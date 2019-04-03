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
}
