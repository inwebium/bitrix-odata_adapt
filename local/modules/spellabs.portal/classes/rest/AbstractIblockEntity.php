<?php
namespace Spellabs\Portal\Rest;

use Bitrix\Main\Loader;

Loader::includeModule('iblock');

/**
 * Абстрактный класс rest-сущностей являющихся инфоблоками
 */
abstract class AbstractIblockEntity extends AbstractRestApiEntity
{
    public static $fieldsAssoc = [
        'Id' => 'ID',
        'Title' => 'NAME',
        'Created' => 'DATE_CREATE',
    ];
    
    protected $fieldsToExpand = [
        'IBLOCK_ID',
        'ID',
        'NAME',
        'CODE',
        'XML_ID',
    ];
    
    protected $iblockId;
    protected static $propertiesAssoc;
    
    public function getIblockId()
    {
        return $this->iblockId;
    }

    public function setIblockId($iblockId)
    {
        $this->iblockId = $iblockId;
        return $this;
    }
    
    public function delete()
    {
        $arPayload = $this->getRequestParameters()->getPayload();
        
        $elementFields = [];
        
        foreach ($arPayload as $fieldCode => $fieldValue)
        {
            $elementFields[$fieldCode] = $fieldValue;
        }
        
        $elementId = false;
        
        if (isset($this->getRequestParameters()->getFilter()['ID']) && $this->getRequestParameters()->getFilter()['ID'] > 0) {
            $elementId = $this->getRequestParameters()->getFilter()['ID'];
        } elseif (isset($elementFields['ID']) && $elementFields['ID'] > 0) {
            $elementId = $elementFields['ID'];
            unset($elementFields['ID']);
        } else {
            return false;
        }
        
        if (\CIBlockElement::Delete($elementId)) {
            return true;
        } else {
            return false;
        }
        
    }

    public function get()
    {
        $result = false;
        
        $arOrder = $this->getRequestParameters()->getOrder();
        $arFilter = $this->getRequestParameters()->getFilter();
        $arGroup = false;
        $arNav = $this->getRequestParameters()->getTop();
        $this->expand();
        $arSelect = $this->getRequestParameters()->getSelect();
        
        $this->getRequestParameters()->appendFilter(['IBLOCK_ID' => $this->getIblockId()]);
        //$arFilter['IBLOCK_ID'] = $this->getIblockId();
        
        // В arSelect минимум нужны IBLOCK_ID и ID
        if (!in_array('IBLOCK_ID', $arSelect))
        {
            $this->getRequestParameters()->appendSelect(['IBLOCK_ID']);
            //$arSelect[] = 'IBLOCK_ID';
        }
        
        if (!in_array('ID', $arSelect))
        {
            $this->getRequestParameters()->appendSelect(['ID']);
            //$arSelect[] = 'ID';
        }
        
        //$this->getRequestParameters()->associativeReplace($this->fieldsAssoc, $this->propertiesAssoc);

        echo '<pre>$arOrder';
        var_dump($arOrder);
        echo '</pre>';
        echo '<pre>$arFilter';
        var_dump($arFilter);
        echo '</pre>';
        echo '<pre>$arGroup';
        var_dump($arGroup);
        echo '</pre>';
        echo '<pre>$arNav';
        var_dump($arNav);
        echo '</pre>';
        echo '<pre>$arSelect';
        var_dump($arSelect);
        echo '</pre>';

        $resource = \CIBlockElement::GetList($arOrder, $arFilter, $arGroup, $arNav, $arSelect);
        
        $arElements = [];
        while($element = $resource->GetNext())
        {
            $arElements[] = $element;
            //var_dump($element['ID']);
        }
        
        if (!isset($arFilter['ID']) || is_array($arFilter['ID'])) {
            $result['value'] = $arElements;
        } else {
            $result = $arElements;
        }
        
        return $result;
    }

    public function merge()
    {
        global $USER;

        $iblockElement = new \CIBlockElement;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        
        /*echo "\n\nPayload:\n";
        var_dump($arPayload);*/
        
        $elementFields = [];
        
        foreach ($arPayload as $fieldCode => $fieldValue)
        {
            // Проверить является ли $fieldCode XML_ID
            // Если это XML_ID, то получить код свойства по XML_ID
            $elementFields[$fieldCode] = $fieldValue;
        }
        
        if (isset($this->getRequestParameters()->getFilter()['ID']) && $this->getRequestParameters()->getFilter()['ID'] > 0)
        {
            $elementId = $this->getRequestParameters()->getFilter()['ID'];
        }
        elseif (isset($elementFields['ID']) && $elementFields['ID'] > 0)
        {
            $elementId = $elementFields['ID'];
            unset($elementFields['ID']);
        }
        else
        {
            return false;
        }

        /*echo "\n\n";
        var_dump($elementId);*/

        $result = $iblockElement->Update($elementId, $elementFields, false, true, true, true);
        
        $result = $this->getElementProperties();
        
        if ($result) {
            $result = \CIBlockElement::GetList($arFilter, $arFilter, $arGroupBy, $arNavStartParams, $arSelectFields);
            while ($element = $result->GetNext())
            {
                $element->GetFields();
                $element->GetProperties();
            }
        }
        
        /*echo "\n\n";
        var_dump($result);*/
        
        if ($result) {
            return IblockUtils::getElement(['ID' => $elementId], array_keys($elementFields));
        } else {
            return false;
        }
    }

    public function post()
    {
        global $USER;
        
        echo 'post';
        
        $newIblockElement = new \CIBlockElement;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        
        echo "\n\nPayload:\n";
        var_dump($arPayload);
        
        $elementFields = [];
        
        foreach ($arPayload as $fieldCode => $fieldValue)
        {
            // Проверить является ли $fieldCode XML_ID
            // Если это XML_ID, то получить код свойства по XML_ID
            $elementFields[$fieldCode] = $fieldValue;
        }
        
        $newElementId = $newIblockElement->Add($elementFields, false, true, true);
        
        if ($newElementId)
        {
            // Получить созданный элемент
            // Отправить в ответ созданный элемент
            return IblockUtils::getElement(['ID' => $newElementId]);
        }
        else
        {
            // Отправить в ответ ошибку
            return false;
        }
    }
    
    protected function expand()
    {
        $propertiesToExpand = $this->getRequestParameters()->getExpand();
        
        $newSelects = [];
        
        foreach ($propertiesToExpand as $num => $propertyCode)
        {
            foreach ($this->fieldsToExpand as $key => $fieldName)
            {
                $selectString = 'PROPERTY_' . $propertyCode . '.' . $fieldName;
                
                $newSelects[] = $selectString;
            }
        }
        
        $this->getRequestParameters()->appendSelect($newSelects);
        
        return $this;
    }
    
    protected function getElementProperties()
    {
        
    }
    
    protected function setElementProperties()
    {
        $elementId = 10;
        $properties = [];

        \CIBlockElement::SetPropertyValuesEx($elementId, false, $properties);
    }
}