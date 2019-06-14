<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class IntegerType extends AbstractType
{
    public static function parseValue($value)
    {
        return intval($value);
    }
}
