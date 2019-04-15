<?php
namespace Spellabs\Portal\Rest\Processor\Filter;

class ScalarFilterValue implements FilterValueInterface
{
    private $value;
    
    public function __construct($value)
    {
        $this->setValue($value);
    }

    public function getProcessedValue()
    {
        return $this->getValue();
    }

    public function getValue()
    {
        return $this->value;
    }

    public function setValue($value)
    {
        $this->value = $value;
        
        return $this;
    }

    public function __toString()
    {
        return $this->getProcessedValue();
    }

}
