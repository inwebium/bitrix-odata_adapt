<?php
namespace Spellabs\Portal\Rest;

class UserFieldUtils
{
    /**
     * 
     * @global \CUserTypeManager $USER_FIELD_MANAGER
     * @param string $entity
     * @param int $id
     * @param array $value
     * @return type
     */
    public static function updateFieldValue($entity, $id, $value)
    {
        global $USER_FIELD_MANAGER;
        
        $result = false;
        
        if (is_array($value)) {
            $result = $USER_FIELD_MANAGER->Update(
                $entity,
                $id,
                $value
            );
        }
        
        return $result;
    }
    
    public static function getFieldValue()
    {
        global $USER_FIELD_MANAGER;
        
        $result = [];
        
        return $result;
    }
    
    public static function getListValues($filter, $sort)
    {
        $result = [];
        
        $enumUf = new \CUserFieldEnum();
        $dbResult = $enumUf->GetList($sort, $filter);
        
        while ($listValue = $dbResult->GetNext())
        {
            $result[] = $listValue;
        }
        
        return $result;
    }
    
    public static function addListValue($value, $isDefault)
    {
        global $USER_FIELD_MANAGER;
        
        $existingValues = self::getListValues($filter, $sort);
        
        $valuesCount = count($existingValues);
        
        if ($isDefault === true) {
            $isDefault = 'Y';
        } elseif ($isDefault === false) {
            $isDefault = 'N';
        }
        
        $newValues['n' . $valuesCount+1] = [
            'XML_ID' => $valuesCount*10,
            'VALUE' => $value,
            'DEF' => $isDefault,
            'SORT' => $valuesCount*10,
        ];
        
        $enumUf = new \CUserFieldEnum();
        $enumUf->SetEnumValues($newID, $arAddEnum);

        //мы передаем массив, который состоит из таких элементов (наличие n в ключе обязательно)
        $arAddEnum['n'.$i] = array(
              'XML_ID' => $key,
              'VALUE' => $value,
              'DEF' => 'N',
              'SORT' => $i*10
           );
    }
    
    public static function updateFiled()
    {
        
    }
    
    
}
