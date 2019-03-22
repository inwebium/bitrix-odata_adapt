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
        
        $logicAssoc = [
            'ne' => '!',
            'le' => '<=',
            'ge' => '>=',
            'lt' => '<',
            'gt' => '>',
            'eq' => '',
        ];

        if ($this->IsParamSet('filter'))
        {
            $result = [];
            
            $arFilterStrings = explode(',', $this->requestParams['filter']);
            
            foreach ($arFilterStrings as $num => $filterString)
            {
                $filterMatches = [];
                preg_match('/^([\w_.]+)\[(\w{2})\]=(.*)$/', $filterString, $filterMatches);
                
                if (count($filterMatches) == 4) // 0 - all expression, 1-2-3 - captured groups
                {
                    $filterKey = $logicAssoc[$filterMatches[2]] . $filterMatches[1];
                    // TODO: filter value as string-number-... datetime? function?
                    $filterValue = $filterMatches[3];
                    
                    $result[$filterKey] = $filterValue;
                }
                    
            }
        }
        
        return $result;
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