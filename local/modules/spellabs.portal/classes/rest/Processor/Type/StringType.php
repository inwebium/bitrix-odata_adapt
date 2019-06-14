<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class StringType extends AbstractType
{
    public static function parseValue($value)
    {
        return strval($value);
    }
}
