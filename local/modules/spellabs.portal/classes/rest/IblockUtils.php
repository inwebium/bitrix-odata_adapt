<?php
namespace Spellabs\Portal\Rest;

/**
 * Класс для разных оберток над методами инфоблоков
 */
class IblockUtils
{
    /**
     * Получить массив описывающий инфоблок с полем $fieldName = $fieldValue 
     * 
     * @param string $fieldName Код поля инфоблока по которому фильтруем
     * @param mixed $fieldValue Значение фильтруемого поля
     * @return array Массив описывающий инфоблок
     */
    public static function getIblockBy($fieldName, $fieldValue)
    {        
        $order = ['order' => 'asc', 'id' => 'desc'];
        $filter = [
            $fieldName => $fieldValue
        ];
        
        $dbResult = \CIBlock::GetList(
            $order,
            $filter,
            false
        );
        
        if ($arIblock = $dbResult->GetNext())
        {
            return $arIblock;
        }
        else
        {
            return [];
        }
    }

    /**
     * Получить массив описывающий свойство с полем $fieldName = $fieldValue 
     * из инфоблока $iblockId
     * 
     * @param string $fieldName Код поля свойства по которому фильтруем
     * @param mixed $fieldValue Значение фильтруемого поля
     * @param int $iblockId ID инфоблока свойства
     * @return array Массив описывающий свойство элементов инфоблока
     */
    public static function getPropertyBy($fieldName, $fieldValue, $iblockId = 0)
    {
        $order = ['order' => 'asc', 'id' => 'desc'];
        $filter = [
            $fieldName => $fieldValue
        ];
        
        if ($iblockId > 0)
        {
            $filter['IBLOCK_ID'] = $iblockId;
        }
        
        $dbResult = \CIBlockProperty::GetList(
            $order,
            $filter
        );
        
        if ($arProperty = $dbResult->GetNext())
        {
            return $arProperty;
        }
        else
        {
            return [];
        }
    }
    
    /**
     * Получить массив описывающий свойство по XML_ID свойства. 
     * Обертка над IblockUtils::getPropertyBy
     * 
     * @param string $xmlIdValue Значение XML_ID
     * @param int $iblockId ID инфоблока свойства
     * @return array
     */
    public static function getPropertyByXmlId($xmlIdValue, $iblockId = 0)
    {
        return self::getPropertyBy('XML_ID', $xmlIdValue, $iblockId);
    }
    
    /**
     * Получить массив описывающий инфоблок по XML_ID. 
     * Обертка над IblockUtils::getIblockBy
     * 
     * @param string $xmlIdValue Значение XML_ID
     * @return array
     */
    public static function getIblockByXmlId($xmlIdValue)
    {
        return self::getIblockBy('XML_ID', $xmlIdValue);
    }
    
    public static function getElement(
        $elementFilter = [], 
        $elementSelect = ['IBLOCK_ID', 'ID', 'NAME']
    ) {
        $order = ['ID' => 'DESC'];
        $filter = $elementFilter;
        $group = false;
        $nav = false;
        $select = $elementSelect;
        
        $result = \CIBlockElement::GetList($order, $filter, $group, $nav, $select);
        
        if ($element = $result->GetNext())
        {
            return $element;
        }
        else
        {
            return false;
        }
    }
    
    public static function getElements(
        $elementFilter = [], 
        $elementSelect = ['IBLOCK_ID', 'ID', 'NAME']
    ) {
        $result = [];
        $order = ['SORT' => 'ASC', 'ID' => 'ASC'];
        $filter = $elementFilter;
        $group = false;
        $nav = false;
        $select = $elementSelect;
        
        $result = \CIBlockElement::GetList($order, $filter, $group, $nav, $select);
        
        while ($element = $result->GetNext())
        {
            $result[] = $element;
        }
        
        return $result;
    }
    
    /**
     * Получить раздел
     * 
     * @param string $fieldName
     * @param type $fieldValue
     * @param int $iblockId
     * @return boolean
     */
    public static function getSection(
        $sectionFilter = [], 
        $sectionSelect = ['IBLOCK_ID', 'ID', 'NAME']
    ) {
        $order = ['ID' => 'DESC'];
        $filter = $sectionFilter;
        $includeCount = false;
        $nav = false;
        $select = $sectionSelect;

        $dbResult = \CIBlockSection::GetList($order, $filter, $includeCount, $select, $nav);
        
        if ($section = $dbResult->GetNext()) {
            return $section;
        } else {
            return false;
        }
    }
    
    public static function getIdsArray($array)
    {
        $result = [];
        
        if (is_array($array)) {
            foreach ($array as $key => $value)
            {
                $result[] = $value['ID'];
            }
        } else {
            $result[] = $array['ID'];
        }
        
        return $result;
    }
}
