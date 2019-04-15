<?php
namespace Spellabs\Portal\Rest\Processor\Filter;

abstract class AbstractCompoundFilterValue implements FilterValueInterface
{
    protected $value;
    
    public function __construct($value)
    {
        $this->setValue($value);
    }

    public function getProcessedValue()
    {
        return $this->processValue();
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
    
    protected abstract function processValue();
}
