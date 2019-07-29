<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class GluedUsersIdsType extends AbstractType
{
    public static function parseValue($value)
    {
        return explode(',', $value);
    }
}
