<?php
namespace Spellabs\Portal\Rest\Processor\Filter;

class SubstringFilterValue extends AbstractCompoundFilterValue
{
    public function setValue($value)
    {
        $this->value = '%' . $value . '%';
        return $this;
    }

    protected function processValue()
    {
        return $this->getValue();
    }
}
