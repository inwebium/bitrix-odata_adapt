<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class EntityType extends AbstractType
{
    public static function parseValue($value)
    {
        //$filepath = \CFile::GetPath($value);
        
        return $value;
    }
}
