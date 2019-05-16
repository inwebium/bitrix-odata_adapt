<?php
namespace Spellabs\Portal\Rest\Processor\Filter;

class EnumerationFilterValue extends AbstractCompoundFilterValue
{
    public function setValue($value)
    {
        $value = trim($value);
        $matches = [];
        preg_match("/\((.*)\)/", trim($value), $matches);
        
        $this->value = new \DateTime($matches[1]);
        return $this;
    }

    protected function processValue()
    {
        $pattern = ",\s?(?=(?:[^\']*\'[^\']*\')*[^\']*$)";
        
        return preg_split($pattern, $this->getValue());
    }
}
