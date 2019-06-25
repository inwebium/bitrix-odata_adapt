<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class FileUrlType extends AbstractType
{
    public static function parseValue($value)
    {
        $result = [];
        
        if (is_array($value)) {
            
            foreach ($value as $key => $fileId) {
                if (is_numeric($fileId)) {
                    $result[] = \CFile::GetPath($fileId);
                }
            }
            
        } else {
            if (is_numeric($value)) {
                $result = \CFile::GetPath($value);
            }
        }
        
        if (count($result) > 0) {
            return $result;
        } else {
            return $value;
        }
    }
}
