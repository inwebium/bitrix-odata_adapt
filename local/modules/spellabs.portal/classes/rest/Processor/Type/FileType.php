<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class FileType extends AbstractType
{
    public static function parseValue($value)
    {
        $filepath = \CFile::GetPath($value);
        
        return $filepath;
    }
}
