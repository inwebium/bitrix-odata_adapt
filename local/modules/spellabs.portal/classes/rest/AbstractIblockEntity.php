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
    
    /**
     * iblockId getter
     * 
     * @return int
     */
    public function getIblockId()
    {
        return $this->iblockId;
    }
    
    /**
     * $iblockId setter
     * 
     * @param int $iblockId
     * @return $this
     */
    public function setIblockId($iblockId)
    {
        $this->iblockId = $iblockId;
        return $this;
    }
    
    /**
     * Реализация метода запроса DELETE
     * 
     * @return boolean
     */
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
    
    /**
     * Реализация метода запроса GET
     * 
     * @return array
     */
    public function get()
    {
        $result = false;

        $this->getRequestParameters()->appendFilter(['IBLOCK_ID' => $this->getIblockId()]);
        
        // В arSelect минимум нужны IBLOCK_ID и ID
        if (!in_array('IBLOCK_ID', $this->getRequestParameters()->getSelect()))
        {
            $this->getRequestParameters()->appendSelect(['IBLOCK_ID']);
            //$arSelect[] = 'IBLOCK_ID';
        }
        
        if (!in_array('ID', $this->getRequestParameters()->getSelect()))
        {
            $this->getRequestParameters()->appendSelect(['ID']);
            //$arSelect[] = 'ID';
        }
        
        $arOrder = $this->getRequestParameters()->getOrder();
        $arFilter = $this->getRequestParameters()->getFilter();
        $arGroup = false;
        $arNav = $this->getRequestParameters()->getTop();
        $this->expand();
        $arSelect = $this->getRequestParameters()->getSelect();
        
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
        }
        
        if (!isset($arFilter['ID']) || is_array($arFilter['ID'])) {
            $result['value'] = $arElements;
        } else {
            $result = $arElements;
        }
        
        return $result;
    }
    
    /**
     * Реализация метода запроса MERGE
     * 
     * @global \CUser $USER
     * @return boolean
     */
    public function merge()
    {
        global $USER;

        $iblockElement = new \CIBlockElement;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        
        //$elementFields = [];
        
        $elementFields = $arPayload;
        
        /*foreach ($arPayload as $fieldCode => $fieldValue)
        {
            // Проверить является ли $fieldCode XML_ID
            // Если это XML_ID, то получить код свойства по XML_ID
            $elementFields[$fieldCode] = $fieldValue;
        }*/
        
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

        /*echo "\nelementId\n";
        var_dump($elementId);
        echo "\nelementFields\n";
        var_dump($elementFields);*/
        
        $updateResult = false;
        if ($this->hasFieldsInPayload($elementFields)) {
            $updateResult = $iblockElement->Update($elementId, $elementFields, false, true, true, true);
        }
        
        $propertiesUpdateResult = false;
        if ($this->hasPropertiesInPayload($elementFields)) {
            $propertiesUpdateResult = $iblockElement->SetPropertyValuesEx(
                $elementId, 
                0, 
                $this->getPropertiesFromPayload($elementFields)
            );
        }

        

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
    
    /**
     * Реализация метода запроса POST
     * 
     * @global \CUser $USER
     * @return boolean
     */
    
    public function post()
    {
        /*
        * Пример post request (создал благодарность)
         __metadata {
             type	SP.Data.SlThanksListItem
         },

           slComment	foo,
           slThanksTypeLookupId	2,
           slToUserId	35,
        */
        /*
        * в ответ по ходу все о созданной сущности
        */
        global $USER;
        
        echo 'post';
        
        $newIblockElement = new \CIBlockElement;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        
        echo "\n\nPayload:\n";
        var_dump($arPayload);
        
        //$elementFields = [];
        $elementFields = $arPayload;
        
        /*foreach ($arPayload as $fieldCode => $fieldValue)
        {
            // Проверить является ли $fieldCode XML_ID
            // Если это XML_ID, то получить код свойства по XML_ID
            $elementFields[$fieldCode] = $fieldValue;
        }*/
        
        $elementFields = $this->prepareAddFields($elementFields);
        
        $newElementId = $newIblockElement->Add($elementFields, false, true, true);
        
        if ($newElementId)
        {
            // Получить созданный элемент
            // Отправить в ответ созданный элемент
            return IblockUtils::getElement(['ID' => $newElementId]);
        }
        else
        {
            echo "\nPOST error\n";
            echo $newIblockElement->LAST_ERROR;
            echo "\n";
            // Отправить в ответ ошибку?
            return false;
        }
    }
    
    /**
     * Получает expand из объекта параметров запроса. Подменяет значения из 
     * select на нужные битриксовые аналоги.
     * 
     * @return $this
     */
    protected function expand()
    {
        $propertiesToExpand = $this->getRequestParameters()->getExpand();

        foreach ($propertiesToExpand as $num => $fieldCode)
        {
            $this->replaceExpandedFields($fieldCode);
        }
        
        return $this;
    }
    
    /**
     * Заменяет expanded поля в select на битриксовые аналоги
     * 
     * @param type $fieldCode
     */
    protected function replaceExpandedFields($fieldCode)
    {

        foreach ($this->getRequestParameters()->getSelect() as $selectNum => $fieldToSelect)
        {

            if (strpos($fieldToSelect, $fieldCode . '/') !== false) {
                $expandedSelectField = explode('/', $fieldToSelect);
                
                $replacedSelect = 'PROPERTY_';
                $replacedSelect .= AssociativeReplacer::replace(
                    $expandedSelectField[0],
                    static::$propertiesAssoc + static::$fieldsAssoc
                );
                $replacedSelect .= '.' . AssociativeReplacer::replace(
                    $expandedSelectField[1],
                    static::$propertiesAssoc + static::$fieldsAssoc
                );
                
                $this->getRequestParameters()->replaceSelect(
                    $fieldToSelect, 
                    $replacedSelect
                );

            } else {
                $this->getRequestParameters()->replaceSelect(
                    $fieldToSelect, 
                    AssociativeReplacer::replace($fieldToSelect, static::$propertiesAssoc + static::$fieldsAssoc)
                );
                
            }
        }
    }
    
    /**
     * Установка значений свойств элемента инфоблока (после Update)
     */
    protected function setElementProperties()
    {
        $elementId = 10;
        $properties = [];

        \CIBlockElement::SetPropertyValuesEx($elementId, false, $properties);
    }
    
    /**
     * 
     * @param array $payload
     * @return boolean
     */
    protected function hasFieldsInPayload($payload)
    {
        foreach ($payload as $key => $value)
        {
            if (in_array($key, static::$fieldsAssoc)) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * Проверяет наличие переданных значений свойств инфоблока в запросе
     * 
     * @param array $payload
     * @return boolean
     */
    protected function hasPropertiesInPayload($payload)
    {
        foreach ($payload as $key => $value)
        {
            if (in_array($key, static::$propertiesAssoc)) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * 
     * @param array $payload
     * @return array
     */
    protected function getPropertiesFromPayload($payload)
    {
        $properties = [];
        
        foreach ($payload as $key => $value)
        {
            if (in_array($key, static::$propertiesAssoc)) {
                $properties[$key] = $value;
            }
        }
        
        return $properties;
    }
    
    /**
     * 
     * @param array $payload
     * @return array
     */
    protected function prepareAddFields($payload)
    {
        $properties = $this->getPropertiesFromPayload($payload);
        
        foreach ($properties as $key => $value)
        {
            unset($payload[$key]);
        }
        
        $payload['PROPERTY_VALUES'] = $properties;
        
        if (!isset($payload['IBLOCK_ID'])) {
            $payload['IBLOCK_ID'] = $this->iblockId;
        }
        
        return $payload;
    }
}