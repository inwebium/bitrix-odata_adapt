<?php
namespace Spellabs\Portal\Rest;

/**
 * Класс параметров запроса (select, filter, top ...)
 */
class RequestParameters
{
    private $select;
    private $filter;
    private $order;
    private $expand;
    private $top;
    private $payload;
    
    public function __construct(RequestParser $requestParser)
    {
        $this
            ->setSelect($requestParser->ParseSelect())
            ->setExpand($requestParser->ParseExpand())
            ->setFilter($requestParser->ParseFilter())
            ->setOrder($requestParser->ParseOrder())
            ->setTop($requestParser->ParseTop())
            ->setPayload($requestParser->parsePost())
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

    private function setFilter($filter)
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
    
    public function getPayload()
    {
        return $this->payload;
    }
    
    private function setPayload($payload)
    {
        $this->payload = $payload;
        return $this;
    }
}
