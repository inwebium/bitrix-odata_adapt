<?php
namespace Spellabs\Portal\Rest;

class RequestParameters
{
    private $select;
    private $filter;
    private $order;
    private $expand;
    private $top;
    
    public function __construct(RequestParser $requestParser)
    {
        $this
            ->setSelect($requestParser->ParseSelect())
            ->setExpand($requestParser->ParseExpand())
            ->setFilter($requestParser->ParseFilter())
            ->setOrder($requestParser->ParseOrder())
            ->setTop($requestParser->ParseTop())
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


}
