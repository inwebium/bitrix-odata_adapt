<?php
namespace Spellabs\Portal\Rest\Processor\Filter;

interface FilterValueInterface
{
    public function __construct($value);
    
    public function getValue();
    
    public function setValue($value);
    
    public function getProcessedValue();
    
    public function __toString();
}
