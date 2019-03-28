<?php
namespace Spellabs\Portal\Rest;

class RequestFilterParser
{
    public function parseNodes(&$node, &$childKey = 0)
    {
        $result = [];

        foreach ($node as $key => $child)
        {
            if (is_array($child))
            {
                $result[] = $this->parseNodes($child, $key);
            }
            else
            {
                //$pattern = "/(([\w]+)\[(\w{2})\]=(\d+|'[^']+'|\w+))?(,|;|$)/";
                $pattern = "/(([\w]+)\[(\w{2})\]=(\d+|'[^']+'|\w+))|(,|;|$)/"; // TODO check?
                $matches = [];
                preg_match_all($pattern, $child, $matches, PREG_SET_ORDER);

                //var_dump($matches);

                foreach ($matches as $matchKey => $arMatch)
                {
                    $arNode = [];

                    if (count($arMatch) == 5 && !empty($arMatch[0]))
                    {

                        $arNode = [
                            'string' => $arMatch[1],
                            'field' => $arMatch[2],
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
                //$filterPart['LOGIC'] = '';

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
                        //$filterPart[$keyForNewField] = [];
                        //$keyForNewField++;
                        $goDeeper = false;
                    }
                    // иначе если перед этим разбирали ИЛИ
                    elseif ($isOtherLogic)
                    {
                        //отберем последний элемент - он относится к текущему И
                        $prevElement = array_pop($filterPart);
                        //$prevElement = $filterPart[$keyForNewField-1];
                        // а на его место встает массив для И
                        //$filterPart[$keyForNewField-1] = [
                        $filterPart[] = [
                            'LOGIC' => 'AND',
                            $prevElement
                        ];

                        $goDeeper = true;
                        //$filterPart[$keyForNewField-1][0] = $prevElement;
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
                        //$filterPart[$keyForNewField] = [];
                        //$keyForNewField++;
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
                        //$keyForNewField = 0;
                        //$keyForNewField = 1;
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
                //$keyForNewField++;
            }
            else
            {
                $filterPart[] = $this->buildFilter($node);
                //$keyForNewField++;
            }
        }

        return $filterPart;
    }
    
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
}