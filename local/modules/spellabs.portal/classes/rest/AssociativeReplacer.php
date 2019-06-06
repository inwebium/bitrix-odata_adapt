<?php
namespace Spellabs\Portal\Rest;

class AssociativeReplacer
{
    /**
     * Заменяет $value на $replacement. Если $replacement - массив, то заменит
     * $value на элемент $replacement с ключом $value ($replacement[$value])
     * 
     * @param mixed $value
     * @param mixed $replacement
     * @return mixed
     */
    public static function replace($value, $replacement)
    {
        $value = trim($value);
        
        if (is_array($replacement)) {
            
            if (isset($replacement[$value])) {
                $value = $replacement[$value];
            }
        } else {
            $value = $replacement;
        }
        
        return $value;
    }
    
    public static function reverseReplace($value, array $replacement)
    {
        if ($replaceFor = array_search($value, $replacement)) {
            return $replaceFor;
        } else {
            return $value;
        }
    }
    
    /*
     * 
     * @TODO: при вложенных массивах в качестве значений вроде может быть баг
     */
    public static function recursiveReverseReplace(array $target, array $replacement)
    {
        $result = [];
        
        foreach ($target as $key => $value)
        {
            /*var_dump($key);
            var_dump($value);*/
            if (is_array($value)) {
                if ($replaceFor = array_search($key, $replacement, true)) {
                    $result[$replaceFor] = self::recursiveReverseReplace($value, $replacement);
                } else {
                    $result[$key] = self::recursiveReverseReplace($value, $replacement);
                }
            } elseif ($replaceFor = array_search($key, $replacement, true)) {
                $result[$replaceFor] = $value;
            } else {
                $result[$key] = $value;
            }
        }

        return $result;
    }
}
