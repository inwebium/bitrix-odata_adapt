<?php
namespace Spellabs\Portal\Rest;

class RequestParser
{
    /** @var string */
    private $requestMethod;
    /** @var array */
    private $requestParams;
    
    public function __construct(RequestRouter $requestRouter)
    {
        $this->requestMethod = $requestRouter->getRequestMethod();
        $this->requestParams = $requestRouter->getRequestParameters();
        
        // если пришли паратры с $ то вырезаем его
        foreach ($this->requestParams as $key => $value) {
            if (strpos($key, '$') !== false) {
                unset($this->requestParams[$key]);
                $key = substr($key, strpos($key, '$')+1);
                $this->requestParams[$key] = $value;
            }
        }
        
        if ($this->isParamSet('caml')) {
            $camlParser = new Caml\CamlParser($this->requestParams['caml']);
            $this->requestParams['filter'] = $camlParser->getFilter();
            //var_dump($this->requestParams['filter']);
        }
    }
    
    public function parseSelect()
    {
        $result = false;
        
        if ($this->isParamSet('select')) {
            $result = explode(',', $this->requestParams['select']);
        }
        
        return $result;
    }
    
    /**
     * Вызывает парсер скобок и фильтра. Возвращает подготовленный под битрикс
     * массив с фильтром
     * 
     * @return array
     */
    public function parseFilter()
    {
        $arFilter = [];
        $parenthesesParser = new ParenthesesParser();
        $filterParser = new RequestFilterParser();
        
        $this->requestParams['filter'] = $filterParser->odataAdaptation($this->requestParams['filter']);
        $arParentheses = $parenthesesParser->parse('(' . $this->requestParams['filter'] . ')');
        $arNodes = $filterParser->parseNodes($arParentheses);
        $arFilter = $filterParser->buildFilter($arNodes);
        
        return $arFilter;
    }
    
    public function parseOrder()
    {
        $result = [];
        
        if ($this->isParamSet('order'))
        {
            $arOrders = explode(',', $this->requestParams['order']);
            
            foreach ($arOrders as $num => $orderDefinition) {
                $arOrderDefinition = explode('=', $orderDefinition);
                
                if (!in_array($arOrderDefinition[1], ['asc', 'desc'])) {
                    if ($arOrderDefinition[1] == true) {
                        $arOrderDefinition[1] = 'asc';
                    } else {
                        $arOrderDefinition[1] = 'desc';
                    }
                }
                
                $result[$arOrderDefinition[0]] = $arOrderDefinition[1];
            }
        }
        
        return $result;
    }
    
    /**
     * Разбивает строку из expand по запятым и возвращает получившийся массив.
     * 
     * @return bool|array
     */
    public function parseExpand()
    {
        $result = false;
        
        if ($this->isParamSet('expand')) {
            $result = explode(',', $this->requestParams['expand']);
            
            foreach ($result as $key => $fieldName) {
                $result[$key] = $fieldName;
            }
        }
        
        return $result;
    }
    
    /**
     * @todo Возможно в каких-то классах битрикса используется другой вид и 
     * придется подправить момент с ограничением числа результатов
     */
    public function parseTop()
    {
        $result = false;
        
        if ($this->isParamSet('top')) {
            $result = ['nTopCount' => intval($this->requestParams['top'])];
        }
        
        return $result;
    }
    
    /**
     * Проверяет представлен ли в параметрах запроса параметр $paramName
     * 
     * @param string $paramName Название параметра из запроса, наличие которого 
     * нужно проверить
     * @return boolean
     */
    private function isParamSet($paramName)
    {
        $result = false;
        
        if (isset($this->requestParams[$paramName]) && strlen($this->requestParams[$paramName]) > 0) {
            $result = true;
        }
        
        return $result;
    }
    
    public function parsePost()
    {
        $payload = json_decode($this->requestParams, true);
        
        $result = [];
        
        /*foreach ($payload as $field => $value)
        {
            $result[AssociativeReplacer::replace($field, $this->associations)] = $value;   
        }*/
        /*$this->requestParams = $payload;
        
        echo "\nparsePost\n";
        var_dump($this->requestParams);
        echo "\n";*/
        
        return $result;
    }
}