<?php
namespace Spellabs\Portal\Rest\Entity\Leverage;

use Bitrix\Main\Loader;

Loader::includeModule('iblock');
/**
 * Дефолтный трейт для "измнения" поведения сущности под список SP
 */
trait ListBehaviour
{
    protected function select($arOrder, $arFilter, $arGroup, $arNav, $arSelect)
    {
        $result = false;
        
        $resource = \CIBlockElement::GetList($arOrder, $arFilter, $arGroup, $arNav, $arSelect);
        
        if (in_array('count', $arSelect)) {
            $result = [$resource->SelectedRowsCount()];
        } else {
            $arElements = [];
        
            while($element = $resource->GetNext())
            {
                $this->placeExpandedValues($element);
                $this->adaptResult($element);
                $arElements[] = $element;
            }

            if (!isset($arFilter['ID']) || is_array($arFilter['ID'])) {
                $result = $arElements;
            } else {
                $result = $arElements[0];
            }
        }
        
        return $result;
    }
}
