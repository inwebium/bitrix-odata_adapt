<?php
namespace Spellabs\Portal\Rest\Processor\Filter;

class DatetimeFilterValue extends AbstractCompoundFilterValue
{
    public function setValue($value)
    {
        $this->value = new \DateTime($value);
        return $this;
    }

    protected function processValue()
    {
        $siteFormat = \Bitrix\Main\Type\DateTime::getFormat();
        
        return $this->getValue()->format($siteFormat);
    }
}
