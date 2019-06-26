<?php
namespace Spellabs\Portal\Rest;

use Bitrix\Main\Loader;
use Spellabs\Portal\Rest\Processor\Type;

Loader::includeModule('iblock');

/**
 * Абстрактный класс rest-сущностей являющихся инфоблоками
 */
abstract class AbstractIblockEntity extends AbstractRestApiEntity
{
    /*public static $fieldsAssoc = [
        'Id' => 'ID',
        'Title' => 'NAME',
        'Created' => 'DATE_CREATE',
        'slCode' => 'CODE',
        'slIndex' => 'SORT',
    ];*/
    
    protected $fieldsToExpand = [
        'IBLOCK_ID',
        'ID',
        'NAME',
        'CODE',
        'SORT',
        'XML_ID',
    ];
    
    protected $iblockId;
    protected $iblockCode;
    protected $name;
    protected $expandedValues;
    
    public function __construct(RequestParameters $requestParameters)
    {
        parent::__construct($requestParameters);
        
        $this->fieldsCollection
            ->addField(new Field('ID', 'Id', Type\IntegerType::class, 'FIELD'))
            ->addField(new Field('NAME', 'Title', Type\StringType::class, 'FIELD'))
            ->addField(new Field('DATE_CREATE', 'Created', Type\DatetimeType::class, 'FIELD'))
            ->addField(new Field('CODE', 'slCode', Type\StringType::class, 'FIELD'))
            ->addField(new Field('SORT', 'slIndex', Type\IntegerType::class, 'FIELD'))
        ;
        
        $this->getRequestParameters()->adaptFields($this->getFieldsCollection());
    }

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
     * iblockId setter
     * 
     * @param int $iblockId ID инфоблока
     * @return $this
     */
    public function setIblockId($iblockId)
    {
        $this->iblockId = $iblockId;
        return $this;
    }
    
    /**
     * iblockCode getter
     * 
     * @return string
     */
    public function getIblockCode()
    {
        return $this->iblockCode;
    }
    
    /**
     * name getter
     * 
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * iblockCode setter
     * 
     * @param string $iblockCode Символьный код инфоблока
     * @return $this
     */
    public function setIblockCode($iblockCode)
    {
        $this->iblockCode = $iblockCode;
        return $this;
    }
    
    /**
     * name setter
     * 
     * @param string $name Символьный код инфоблока
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }
    
    /**
     * Реализация метода запроса DELETE
     * 
     * @return boolean
     */
    public function delete()
    {
        $payload = $this->getRequestParameters()->getPayload();
        
        $elementFields = $payload;
        
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
     * Реализация метода запроса GET. По сути вызывает CIBlockElement::GetList
     * с отпарсенными select, filter, top, expand, order
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
        }
        
        if (!in_array('ID', $this->getRequestParameters()->getSelect()))
        {
            $this->getRequestParameters()->appendSelect(['ID']);
        }
        
        $arOrder = $this->getRequestParameters()->getOrder();
        $arGroup = false;
        $arNav = $this->getRequestParameters()->getTop();
        $this->expand();
        $arFilter = $this->getRequestParameters()->getFilter();
        $arSelect = $this->getRequestParameters()->getSelect();
        
        $this->adaptSelect($arSelect);
        /*var_dump($arOrder);
        var_dump($arFilter);
        var_dump($arGroup);
        var_dump($arNav);
        var_dump($arSelect);
        die();*/
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
        
        $newIblockElement = new \CIBlockElement;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        
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
            /*echo "\nPOST error\n";
            echo $newIblockElement->LAST_ERROR;
            echo "\n";*/
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
        $propertiesToExpand = array_unique($this->getRequestParameters()->getExpand());

        foreach ($propertiesToExpand as $num => $fieldCode)
        {
            $this->replaceExpandedFields($fieldCode);
        }
        
        return $this;
    }
    
    /**
     * Заменяет expanded поля в select и filter на битриксовые аналоги
     * 
     * @param string $fieldCode
     */
    protected function replaceExpandedFields($fieldCode)
    {
        
        foreach (array_unique($this->getRequestParameters()->getSelect()) as $selectNum => $fieldToSelect)
        {

            if (strpos($fieldToSelect, $fieldCode . '/') !== false) {
                // Если есть класс
                $classForExpand = "Spellabs\\Portal\\Rest\\Repository\\Fields\\" . $fieldCode;
                
                if (class_exists($classForExpand)) {
                    $objectToExpand = new $classForExpand();
                    
                    $this->setExpandedValues(
                        $objectToExpand->getValue(
                            $this->getIblockId(),
                            $this->getRequestParameters()->getFilter()
                        )
                    );
                }

            }
        }
        
        $arFilter = $this->replaceExpandedFieldsRecursive(
            $this->getRequestParameters()->getFilter(), 
            $fieldCode
        );

        $this->getRequestParameters()->setFilter($arFilter);
    }
    
    protected function replaceExpandedFieldsRecursive($array, $fieldCode) {
        $result = [];
        
        foreach ($array as $key => $value) {
            if (strpos($key, $fieldCode . '/') !== false) {
                $classForExpand = "Spellabs\\Portal\\Rest\\Repository\\Fields\\" . $fieldCode;

                if (class_exists($classForExpand)) {
                    $objectToExpand = new $classForExpand();
                    $key = 'PROPERTY_' . 
                        $objectToExpand->getPropertyCode() . 
                        '.' . 
                        AssociativeReplacer::replace(
                            explode('/', $key)[1], 
                            $objectToExpand->getFieldsAssoc()
                        )
                    ;
                }
            }
            
            if (is_array($value)) {
                $result[$key] = $this->replaceExpandedFieldsRecursive($value, $fieldCode);
            } else {
                $result[$key] = $value;
            }
        }
        
        return $result;
    }
    
    protected function getExpandedValues()
    {
        return $this->expandedValues;
    }
    
    protected function setExpandedValues($array)
    {
        foreach ($array as $key => $value) {
            foreach ($value as $fieldCode => $fieldArray) {
                $this->expandedValues[$key][$fieldCode] = $fieldArray;
            }
            
        }
        
        return $this;
    }
    
    protected function placeExpandedValues(&$element)
    {
        if (isset($this->getExpandedValues()[$element['ID']])) {
            
            foreach ($this->getExpandedValues()[$element['ID']] as $propertyCode => $arValue) {
                $element[$propertyCode] = $arValue;
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
            if (in_array($key, $this->getFieldsAssociations('PROPERTY'))) {
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
            if (in_array($key, $this->getFieldsAssociations('PROPERTY'))) {
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
    
    protected function adaptSelect(&$arSelect)
    {
        foreach ($arSelect as $key => $selectField)
        {
            if (in_array($selectField, $this->getFieldsAssociations('PROPERTY'))) {
                $arSelect[$key] = 'PROPERTY_' . $selectField;
            }
        }
    }
    
    protected function adaptResult(&$arResult)
    {
        if (!empty($arResult['PREVIEW_PICTURE'])) {
            $arResult['PREVIEW_PICTURE'] = \CFile::GetPath($arResult['PREVIEW_PICTURE']);
        }
        
        if (!empty($arResult['DETAIL_PICTURE'])) {
            $arResult['DETAIL_PICTURE'] = \CFile::GetPath($arResult['DETAIL_PICTURE']);
        }
        
        if (!empty($arResult['NAME'])) {
            $arResult['NAME'] = $arResult['~NAME'];
        }
        
        if (!empty($arResult['PREVIEW_TEXT'])) {
            $arResult['PREVIEW_TEXT'] = $arResult['~PREVIEW_TEXT'];
        }
        
        if (!empty($arResult['DETAIL_TEXT'])) {
            $arResult['DETAIL_TEXT'] = $arResult['~DETAIL_TEXT'];
        }
        
        $arPropsCodes = [];
        
        foreach ($this->getFieldsAssociations('PROPERTY') as $key => $value)
        {
            $arPropsCodes['PROPERTY_' . $value . '_VALUE'] = $value;
        }
        
        foreach ($arResult as $key => $value) {
            if (in_array($key, array_keys($arPropsCodes))) {
                $newCode = $arPropsCodes[$key];
                $arResult[$newCode] = $value;
                unset($arResult[$key]);
                $key = $newCode;
            }

            $arResult[$key] = $this->getFieldsCollection()->getField($key)->handleValue($value);
        }
    }
}