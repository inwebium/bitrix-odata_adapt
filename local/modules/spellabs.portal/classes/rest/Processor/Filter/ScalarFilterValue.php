<?php
namespace Spellabs\Portal\Rest\Processor\Filter;

class ScalarFilterValue implements FilterValueInterface
{
    private $value;
    
    public function __construct($value)
    {
        if (preg_match("/(?<=').*?(?=')/", $value)) {
            $value = ltrim($value, '\'');
            $value = rtrim($value, '\'');
        }
        
        $value = stripslashes($value);
        $value = urldecode($value);
        
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
