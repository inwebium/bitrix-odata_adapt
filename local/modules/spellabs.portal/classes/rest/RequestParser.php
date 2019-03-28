<?php
namespace Spellabs\Portal\Rest;

class RequestParser
{
    private $requestParams;
    
    public function __construct($requestParams)
    {
        $this->requestParams = $requestParams;
    }
    
    public function ParseSelect()
    {
        $result = false;
        
        if ($this->IsParamSet('select'))
        {
            $result = explode(',', $this->requestParams['select']);
            
            foreach ($result as $key => $fieldName)
            {
                $result[$key] = trim($fieldName);
            }
        }

        return $result;
    }
    
    public function ParseFilter()
    {
        $result = false;

        $parenthesesParser = new ParenthesesParser();
        
        $arParentheses = $parenthesesParser->parse('(' . $this->requestParams['filter'] . ')');
        
        $filterParser = new RequestFilterParser();
        
        $arNodes = $filterParser->parseNodes($arParentheses);
        $arFilter = $filterParser->buildFilter($arNodes);
        
        return $arFilter;
    }
    
    public function ParseOrder()
    {
        $result = false;
        
        if ($this->IsParamSet('order'))
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
    
    public function ParseExpand()
    {
        $result = false;
        
        if ($this->IsParamSet('expand'))
        {
            $result = explode(',', $this->requestParams['expand']);
            
            foreach ($result as $key => $fieldName)
            {
                $result[$key] = trim($fieldName);
            }
        }
        
        return $result;
    }
    
    public function ParseTop()
    {
        $result = false;
        
        if ($this->IsParamSet('top'))
        {
            $result = ['nTopCount' => intval($this->requestParams['top'])];
        }
        
        return $result;
    }

    private function IsParamSet($paramName)
    {
        $result = false;
        
        if (isset($this->requestParams[$paramName]) && strlen($this->requestParams[$paramName]) > 0)
        {
            $result = true;
        }
        
        return $result;
    }
}