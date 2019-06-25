<?php
namespace Spellabs\Portal\Rest;

/**
 * Класс параметров запроса (select, filter, top ...). Предоставляет функционал
 * для чтения/записи парметров, а так же добавление/замена для некоторых 
 * параметров и адаптация пришедших названий полей из rest под битриксовые 
 * аналоги.
 */
class RequestParameters
{
    private $select;
    private $filter;
    private $order;
    private $expand;
    private $top;
    private $payload;
    
    /**
     * Принимает на вход парсер запроса и через него заполняет свои свойства,
     * хранящие select, filter...
     * 
     * @param \Spellabs\Portal\Rest\RequestParser $requestParser
     */
    public function __construct(RequestParser $requestParser)
    {
        $this
            ->setPayload($requestParser->parsePost())
            ->setSelect($requestParser->parseSelect())
            ->setExpand($requestParser->parseExpand())
            ->setFilter($requestParser->parseFilter())
            ->setOrder($requestParser->parseOrder())
            ->setTop($requestParser->parseTop())
        ;
    }
    
    public function getSelect()
    {
        return $this->select;
    }

    public function getFilter()
    {
        return $this->filter;
    }

    public function getOrder()
    {
        return $this->order;
    }

    public function getExpand()
    {
        return $this->expand;
    }

    public function getTop()
    {
        return $this->top;
    }

    private function setSelect($select)
    {
        $this->select = $select;
        return $this;
    }

    public function setFilter($filter)
    {
        $this->filter = $filter;
        return $this;
    }

    private function setOrder($order)
    {
        $this->order = $order;
        return $this;
    }

    private function setExpand($expand)
    {
        $this->expand = $expand;
        return $this;
    }

    private function setTop($top)
    {
        $this->top = $top;
        return $this;
    }
    
    /**
     * Приклеит дополнительные значения к фильтру. Если в фильтре уже есть 
     * ключи из переданных, то их значения будут замещены переданными
     * 
     * @param array $additionalFilter
     * @return $this
     */
    public function appendFilter($additionalFilter = [])
    {
        if (is_array($additionalFilter) && count($additionalFilter) > 0)
        {
            $compoundArray = $this->getFilter();
            
            foreach ($additionalFilter as $key => $value)
            {
                $compoundArray[$key] = $value;
            }
            
            $this->setFilter($compoundArray);
        }
        
        return $this;
    }
    
    /**
     * Приклеивает и перезаписывает select
     * 
     * @param array $additionalSelect
     * @return $this
     */
    public function appendSelect($additionalSelect = [])
    {
        if (is_array($additionalSelect) && count($additionalSelect) > 0)
        {
            $compoundArray = $this->getSelect();
            
            foreach ($additionalSelect as $key => $value)
            {
                if (!in_array($value, $compoundArray))
                {
                    $compoundArray[] = $value;
                }
            }
            
            $this->setSelect($compoundArray);
        }
        
        return $this;
    }
    
    public function replaceSelect($field, $replaceFor)
    {
        $select = $this->getSelect();
        
        if ($fieldKey = array_search($field, $select)) {
            $select[$fieldKey] = $replaceFor;
        }
        
        $this->setSelect($select);
    }
    
    public function getPayload()
    {
        return $this->payload;
    }
    
    private function setPayload($payload)
    {
        $this->payload = $payload;
        return $this;
    }
    
    public function adaptFields(FieldsCollection $fields)
    {
        $adapted = [];
        
        $fieldsReplace = [];
        
        foreach ($fields as $code => $field)
        {
            $fieldsReplace[$field->getXmlId()] = $field->getCode();
        }
        
        foreach ($this->select as $key => $fieldName)
        {
            $adapted[$key] = AssociativeReplacer::replace($fieldName, $fieldsReplace);
        }
        
        $this->setSelect($adapted);
        $adapted = [];
        $this->recursiveAssocReplace($this->filter, $fieldsReplace);
        foreach ($this->order as $key => $orderDefinition)
        {
            $adapted[AssociativeReplacer::replace($key, $fieldsReplace)] = $orderDefinition;
        }
        
        $this->order = $adapted;
        $adapted = [];
    }
    
    private function recursiveAssocReplace(&$array, $fields)
    {
        $adapted = [];
        
        foreach ($array as $key => $value)
        {
            $key = AssociativeReplacer::replace($key, $fields);
            
            if (is_array($value)) {
                $adapted[$key] = $this->recursiveAssocReplace($value, $fields);
            } else {
                $adapted[$key] = $value;
            }
        }
        
        $array = $adapted;
        return $array;
    }
    
    /**
     * @deprecated
     */
    public function associativeReplace($fieldsAssoc = [], $propertiesAssoc = [])
    {
        $association = $fieldsAssoc + $propertiesAssoc;
        
        if (count($fieldsAssoc) > 0) {
            $this->assocFieldsReplace($fieldsAssoc);
        }
        
        if (count($propertiesAssoc > 0)) {
            $this->assocPropertiesReplace($propertiesAssoc);
        }
        
        
        
        return $this;
    }
    
    /**
     * @deprecated
     */
    private function assocFieldsReplace($fieldsAssoc)
    {
        foreach ($this->select as $key => $value)
        {
            if (isset($fieldsAssoc[$value])) {
                $this->select[$key] = $fieldsAssoc[$value];
            }
        }
        
        return $this;
    }
    
    /**
     * @deprecated
     */
    private function assocPropertiesReplace($propertiesAssoc)
    {
        return $this;
    }
    
    /**
     * @deprecated
     */
    private function assocFilterReplace(&$filter, $fieldsAssoc, $propertiesAssoc)
    {
        foreach ($filter as $key => $value)
        {
            if (isset($fieldsAssoc[$key])) {
                $filter[$key] = $fieldsAssoc[$key];
            }
            if (isset($propertiesAssoc[$key])) {
                $filter[$key] = $fieldsAssoc[$key];
            }
            
            if (is_array($value)) {
                $this->assocFilterReplace($value, $fieldsAssoc, $propertiesAssoc);
            }
        }
    }
}
