<?php
namespace Spellabs\Portal\Rest\Processor\Filter;

class EnumerationFilterValue extends AbstractCompoundFilterValue
{
    public function setValue($value)
    {
        // избавимся от возможных пробелов по краям и скобок
        $value = trim($value);
        $matches = [];
        preg_match("/\((.*)\)/", trim($value), $matches);
        
        // засунуть matches в массив
        $explodePattern = "/,\s?(?=(?:[^\']*\'[^\']*\')*[^\']*$)/";
        $value = preg_split($explodePattern, $matches[1]);
        
        // а еще от ковычек у возможных значений как-то надо избавиться
        $quotesPattern = "/^'?(.*?)'?$/";
        
        $this->value = array_map(
            function($element) {
                $matches = [];
                preg_match($quotesPattern, $element, $matches);
                return $mathes[1];
            }, 
            $value
        );
        
        return $this;
    }

    protected function processValue()
    {
        return $this->getValue();
    }
    
    public function __toString()
    {
        return implode(',', $this->getValue());
    }

}
