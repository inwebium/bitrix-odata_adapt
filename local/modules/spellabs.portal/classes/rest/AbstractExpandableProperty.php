<?php
namespace Spellabs\Portal\Rest;

use Bitrix\Main\Loader;

Loader::includeModule('iblock');

abstract class AbstractExpandableProperty
{
    protected $propertyCode;
    protected $fieldsAssoc;
    
    public function __construct()
    {
        $this->setFieldsAssoc([
            'Id' => 'ID',
            'Title' => 'NAME',
            'Created' => 'DATE_CREATE',
            'slCode' => 'CODE',
            'slIndex' => 'SORT',
        ]);
    }
    
    public function getPropertyCode()
    {
        return $this->propertyCode;
    }

    public function getFieldsAssoc()
    {
        return $this->fieldsAssoc;
    }

    public function setPropertyCode($propertyCode)
    {
        $this->propertyCode = $propertyCode;
        return $this;
    }

    public function setFieldsAssoc($fieldsAssoc)
    {
        $this->fieldsAssoc = $fieldsAssoc;
        return $this;
    }

        
    public function getValue($iblockId, $elementsFilter) {
        $elementsReslt = [];
        \CIBlockElement::GetPropertyValuesArray(
            $elementsReslt,
            $iblockId, // текущий запрошенный иблок
            $elementsFilter, // текущий фильтр элементов
            ['CODE' => [$this->propertyCode]],
            ['USE_PROPERTY_ID' => 'N']
        );

        return $this->prepareValue($elementsReslt);
    }
    
    protected function prepareValue($result) {
        $preparedResult = [];
        
        foreach ($result as $elementId => $arProperties)
        {
            foreach ($arProperties as $propertyCode => $arProperty)
            {
                switch ($arProperty["PROPERTY_TYPE"])
                {
                    case "F":
                        $preparedResult[$elementId][$propertyCode] = $this->prepareFileType($arProperty);
                        break;
                    case "E":
                        $preparedResult[$elementId][$propertyCode] = $this->prepareElementType($arProperty);
                        break;
                    default:
                        break;
                }
            }
        }
        
        return $preparedResult;
    }
    
    protected function prepareFileType($arProperty)
    {
        $valueToPrepare = [];
        
        if ($arProperty["MULTIPLE"] == "Y") {
            $valueToPrepare = $arProperty["VALUE"];
        } else {
            $valueToPrepare[] = $arProperty["VALUE"];
        }
        
        foreach ($valueToPrepare as $key => $fileId) {
            $valueToPrepare[$key] = ['ServerRelativeUrl' => \CFile::GetPath($fileId)];
        }
        
        return $valueToPrepare;
    }
    
    protected function prepareElementType($arProperty)
    {
        $result = [];
        
        /*if ($arProperty["MULTIPLE"] == "Y") {
            $valueToPrepare = $arProperty["VALUE"];
        } else {
            $valueToPrepare[] = $arProperty["VALUE"];
        }*/
        
        $resElements = \CIBlockElement::GetList(
            ['SORT' => 'ASC', 'ID' => 'ASC'], 
            ['ID' => $arProperty["VALUE"]], 
            false, 
            false, 
            [] //Выбираем поля указанные в select в виде foo/bar, где bar поле для выборки в этой сущности
        );
        
        if ($arProperty["MULTIPLE"] == "Y") {
            while ($element = $resElements->GetNext()) {
                $element['ID'] = intval($element['ID']);
                $result[] = $element;
            }
        } else {
            if ($element = $resElements->GetNext()) {
                $element['ID'] = intval($element['ID']);
                $result = $element;
            }
        }
        
        
        
        return $result;
    }
}
