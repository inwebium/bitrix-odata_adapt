<?php
namespace Spellabs\Portal\Rest;

/**
 * Обертки для работы с пользовательскими полями
 */
class UserFieldUtils
{
    /**
     * Изменить значение пользовательского свойства
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
    
    /**
     * Получить значения пользовательского поля типа список
     * 
     * @param type $filter
     * @param type $sort
     * @return type
     */
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
    
    /**
     * Добавить значение в пользовательское поле типа список
     * 
     * @global \CUserTypeManager $USER_FIELD_MANAGER
     * @param type $value
     * @param type $isDefault
     */
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
    }
    
    public static function updateFiled()
    {
        
    }
}
