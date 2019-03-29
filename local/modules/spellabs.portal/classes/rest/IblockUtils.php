<?php
namespace Spellabs\Portal\Rest;

/**
 * Класс для разных оберток над методами инфоблоков
 */
class IblockUtils
{
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
        
        $dbResult = CIBlockProperty::GetList(
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
}
