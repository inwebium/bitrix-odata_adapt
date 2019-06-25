<?php
namespace Spellabs\Portal\Rest\Processor\Type;

class FileType extends AbstractType
{
    public static function parseValue($value)
    {
        $result = [];
        
        if (is_array($value)) {
            
            foreach ($value as $key => $fileId) {
                if (is_numeric($fileId)) {
                    $result[] = ['ServerRelativeUrl' => \CFile::GetPath($fileId)];
                }
            }
            
        } else {
            if (is_numeric($value)) {
                $result[] = ['ServerRelativeUrl' => \CFile::GetPath($value)];
            }
        }
        
        if (count($result) > 0) {
            return $result;
        } else {
            return $value;
        }
    }
}