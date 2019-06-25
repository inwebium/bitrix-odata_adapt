<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class BooleanType extends AbstractType
{
    public static function parseValue($value)
    {
        if ($value == 'Y') {
            return true;
        } elseif ($value == 'N') {
            return false;
        } else {
            return boolval($value);
        }
    }
}
