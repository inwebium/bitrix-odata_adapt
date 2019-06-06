<?php
namespace Spellabs\Portal\Rest;

class RequestFilterParser
{
    private $associations;
    
    public function __construct($associations = [])
    {
        $this->associations = $associations;
    }
    
    /**
     * Ищет значения вида ИМЯПОЛЯ[СРАВНЕНИЕ]=значение
     * 
     * @param array $node
     * @return array
     */
    public function parseNodes(&$node)
    {
        $result = [];
        $valueFactory = new FilterValueFactory();

        foreach ($node as $key => $child)
        {
            if (is_array($child))
            {
                $result[] = $this->parseNodes($child, $key);
            }
            else
            {
                //$pattern = "/(([\w]+)\[(\w{2})\]=(\d+|'[^']+'|\w+))|(,|;|$)/";
                $pattern = "/(([\w]+)\[(\w{2})\]=(\d+|'[^']+'|\w+\s?(?:'[^']+')?|\(.*?\)))|(,|;|$)/";
                $matches = [];
                preg_match_all($pattern, $child, $matches, PREG_SET_ORDER);

                foreach ($matches as $matchKey => $arMatch)
                {
                    $arNode = [];

                    if (count($arMatch) == 5 && !empty($arMatch[0]))
                    {
                        $filterValue = $valueFactory->instatiateFilterValue($arMatch[4]);
                        
                        $arMatch[4] = $filterValue->getProcessedValue();

                        $arNode = [
                            'string' => $arMatch[1],
                            'field' => AssociativeReplacer::replace($arMatch[2], $this->associations),
                            'comparison' => $arMatch[3],
                            'value' => $arMatch[4],
                        ];

                    }
                    elseif (count($arMatch) == 6 && !empty($arMatch[5]))
                    {
                        $arNode = [
                            'LOGIC' => $arMatch[5],
                        ];
                    }

                    if (!empty($arNode))
                    {
                        $result[] = $arNode;
                    }
                }
            }
        }

        return $result;
    }
    
    /**
     * Строит фильтр для битриксовых GetList
     * 
     * @param array $arNodes
     * @return array
     */
    public function buildFilter($arNodes)
    {
        $previousLogicPairType = false;
        $keyForNewField = 0;
        $isLogicStarted = false;
        $previousLogic = false;
        $goDeeper = false;

        $filterPart = [];

        foreach ($arNodes as $key => $node)
        {
            $isLogicNode = key_exists('LOGIC', $node);
            $isFieldNode = 
                key_exists('field', $node) && 
                key_exists('comparison', $node) && 
                key_exists('value', $node)
            ;

            if($isLogicNode)
            {
                $previousNode = $arNodes[$key-1];
                $previousFieldName = $this->parseComparison($previousNode['comparison']) . $previousNode['field'];
                $nextNode = $arNodes[$key+1];
                $nextFieldName = $this->parseComparison($nextNode['comparison']) . $nextNode['field'];

                // если И
                if ($node['LOGIC'] == ';')
                {
                    // До этого уже встретили И 
                    $isLogicContinues = $isLogicStarted && $previousLogic == 'AND';
                    // До этого уже встретили ИЛИ
                    $isOtherLogic = $isLogicStarted && $previousLogic == 'OR';

                    // если перед этим уже разбирали И
                    if ($isLogicContinues)
                    {
                        $goDeeper = false;
                    }
                    // иначе если перед этим разбирали ИЛИ
                    elseif ($isOtherLogic)
                    {
                        //отберем последний элемент - он относится к текущему И
                        $prevElement = array_pop($filterPart);
                        // а на его место встает массив для И
                        $filterPart[] = [
                            'LOGIC' => 'AND',
                            $prevElement
                        ];
                        
                        // Для следующего элемента придется углубиться
                        $goDeeper = true;
                        $keyForNewField++;
                    }
                    else
                    {
                        $filterPart['LOGIC'] = 'AND';
                        $goDeeper = false;
                    }

                    $previousLogic = 'AND';
                    $isLogicStarted = true;
                }
                // иначе если ИЛИ
                elseif ($node['LOGIC'] == ',')
                {
                    $goDeeper = false;
                    // До этого уже встретили ИЛИ
                    $isLogicContinues = $isLogicStarted && $previousLogic == 'OR';
                    // До этого уже встретили И
                    $isOtherLogic = $isLogicStarted && $previousLogic == 'AND';

                    // если перед этим уже разбирали ИЛИ
                    if ($isLogicContinues)
                    {
                        ;
                    }
                    // иначе если перед этим разбирали И
                    elseif ($isOtherLogic)
                    {
                        // предшествующая "И-последовательность" должна стать элементом
                        // в массиве ИЛИ
                        $precedingSequence = $filterPart;

                        $filterPart = [
                            'LOGIC' => 'OR',
                            $precedingSequence
                        ];
                    }
                    else
                    {
                        $filterPart['LOGIC'] = 'OR';
                    }

                    $previousLogic = 'OR';
                    $isLogicStarted = true;
                }
            }
            elseif($isFieldNode)
            {
                if ($goDeeper)
                {
                    end($filterPart);
                    $lastKey = key($filterPart);
                    $filterPart[$lastKey][] = [$this->parseComparison($node['comparison']) . $node['field'] => $node['value']];
                }
                else
                {
                    $filterPart[] = [$this->parseComparison($node['comparison']) . $node['field'] => $node['value']];
                }
            }
            else
            {
                $filterPart[] = $this->buildFilter($node);
            }
        }

        return $filterPart;
    }
    
    /**
     * Заменяет переданную строчку сравнения вида eq,ge,lt на битриксовые аналоги
     * 
     * @param string $string
     * @return string
     */
    private function parseComparison($string)
    {
        $comparisonAssoc = [
            'ne' => '!',
            'le' => '<=',
            'ge' => '>=',
            'lt' => '<',
            'gt' => '>',
            'eq' => '',
        ];

        if (key_exists($string, $comparisonAssoc))
        {
            return $comparisonAssoc[$string];
        }
        else
        {
            return '';
        }
    }

    /**
     * 
     * @param string $filterString
     * @return string
     */
    public function odataAdaptation($filterString)
    {
        $filterString = str_replace([' and ', ' or '], [';', ','], $filterString);
        $comparisonsSearch = [
            ' ne ', 
            ' le ', 
            ' ge ',
            ' lt ',
            ' gt ',
            ' eq ',
        ];
        $comparisonsReplacement = [
            '[ne]=', 
            '[le]=', 
            '[ge]=',
            '[lt]=',
            '[gt]=',
            '[eq]=',
        ];
        
        $filterString = str_replace(
            $comparisonsSearch, 
            $comparisonsReplacement, 
            $filterString
        );
        
        return $filterString;
    }
}