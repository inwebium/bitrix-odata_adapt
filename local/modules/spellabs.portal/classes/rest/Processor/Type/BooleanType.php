<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class StringType extends AbstractType
{
    public static function parseValue($value)
    {
        return boolval($value);
    }
}
