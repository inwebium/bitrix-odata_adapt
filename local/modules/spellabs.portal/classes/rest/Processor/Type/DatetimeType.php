<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class DatetimeType extends AbstractType
{
    public static function parseValue($value)
    {
        $siteFormat = \Bitrix\Main\Type\DateTime::getFormat();
        $bitrixDatetime = new \Bitrix\Main\Type\DateTime($value);
        $dt = new \DateTime();
        
        $dt->createFromFormat($siteFormat, $value, $bitrixDatetime->getTimeZone());
        
        return $dt->format(DateTime::ISO8601);
    }
}
