<?php
namespace Spellabs\Portal\Rest;

class IblockUtils
{
    public static function getPropertyByXmlId($xmlIdValue, $iblockId = 0)
    {
        return self::getPropertyBy('XML_ID', $xmlIdValue, $iblockId);
    }
    
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
            return false;
        }
    }
}
