<?php
namespace Spellabs\Portal\Rest;

class RequestParser
{
    /** @var string */
    private $requestMethod;
    /** @var array */
    private $requestParams;
    /** @var array */
    private $associations;
    
    public function __construct(RequestRouter $requestRouter)
    {
        $this->requestMethod = $requestRouter->getRequestMethod();
        $this->requestParams = $requestRouter->getRequestParameters();
        $className = "Spellabs\\Portal\\Rest\\Repository\\" . $requestRouter->getClassName();
        $this->associations  = $className::$propertiesAssoc + $className::$fieldsAssoc;
    }
    
    public function parseSelect()
    {
        $result = false;
        
        if ($this->isParamSet('select'))
        {
            $result = explode(',', $this->requestParams['select']);
            
            foreach ($result as $key => $fieldName)
            {
                $result[$key] = AssociativeReplacer::replace($fieldName, $this->associations);
            }
        }
        
        return $result;
    }
    
    public function parseFilter()
    {
        $arFilter = [];

        $parenthesesParser = new ParenthesesParser();
        
        $arParentheses = $parenthesesParser->parse('(' . $this->requestParams['filter'] . ')');
        
        
        $filterParser = new RequestFilterParser($this->associations);
        
        $arNodes = $filterParser->parseNodes($arParentheses);
        $arFilter = $filterParser->buildFilter($arNodes);
        
        return $arFilter;
    }
    
    public function parseOrder()
    {
        $result = [];
        
        if ($this->isParamSet('order'))
        {
            $result = [];
            
            $arOrders = explode(',', $this->requestParams['order']);
            
            foreach ($arOrders as $num => $orderDefinition)
            {
                $arOrderDefinition = explode('=', $orderDefinition);
                
                $result[AssociativeReplacer::replace($arOrderDefinition[0], $this->associations)] = $arOrderDefinition[1];
            }
        }
        
        return $result;
    }
    
    /**
     * Разбивает строку из expand по запятым и возвращает получившийся массив.
     * 
     * @return type
     */
    public function parseExpand()
    {
        $result = false;
        
        if ($this->isParamSet('expand'))
        {
            $result = explode(',', $this->requestParams['expand']);
            
            foreach ($result as $key => $fieldName)
            {
                //$result[$key] = AssociativeReplacer::replace($fieldName, $this->associations);
                $result[$key] = $fieldName;
            }
        }
        
        return $result;
    }
    
    public function parseTop()
    {
        $result = false;
        
        if ($this->isParamSet('top'))
        {
            $result = ['nTopCount' => intval($this->requestParams['top'])];
        }
        
        return $result;
    }

    private function isParamSet($paramName)
    {
        $result = false;
        
        if (isset($this->requestParams[$paramName]) && strlen($this->requestParams[$paramName]) > 0)
        {
            $result = true;
        }
        
        return $result;
    }
    
    public function parsePost()
    {
        $payload = json_decode($this->requestParams, true);
        
        $result = [];
        
        foreach ($payload as $field => $value)
        {
            $result[AssociativeReplacer::replace($field, $this->associations)] = $value;   
        }
        /*$this->requestParams = $payload;
        
        echo "\nparsePost\n";
        var_dump($this->requestParams);
        echo "\n";*/
        
        return $result;
    }
    
    private function associativeReplace($fieldName)
    {
        AssociativeReplacer::replace($fieldName, $this->associations);
    }
}