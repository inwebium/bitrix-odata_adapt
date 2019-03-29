<?php
namespace Spellabs\Portal\Rest;

class RequestParser
{
    private $requestMethod;
    private $requestParams;
    
    public function __construct($requestMethod, $requestParams)
    {
        $this->requestMethod = $requestMethod;
        $this->requestParams = $requestParams;
    }
    
    public function parseSelect()
    {
        $result = false;
        
        if ($this->isParamSet('select'))
        {
            $result = explode(',', $this->requestParams['select']);
            
            foreach ($result as $key => $fieldName)
            {
                $result[$key] = trim($fieldName);
            }
        }

        return $result;
    }
    
    public function parseFilter()
    {
        $arFilter = [];

        $parenthesesParser = new ParenthesesParser();
        
        $arParentheses = $parenthesesParser->parse('(' . $this->requestParams['filter'] . ')');
        
        $filterParser = new RequestFilterParser();
        
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
                
                $result[$arOrderDefinition[0]] = $arOrderDefinition[1];
            }
        }
        
        return $result;
    }
    
    public function parseExpand()
    {
        $result = false;
        
        if ($this->isParamSet('expand'))
        {
            $result = explode(',', $this->requestParams['expand']);
            
            foreach ($result as $key => $fieldName)
            {
                $result[$key] = trim($fieldName);
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
        return json_decode($this->requestParams, true);
    }
}