<?php
namespace Spellabs\Portal\Rest;

use Bitrix\Main\Loader;

Loader::includeModule('iblock');

/**
 * Абстрактный класс rest-сущностей являющихся инфоблоками
 */
abstract class AbstractIblockEntity extends AbstractRestApiEntity
{
    private $fieldsToExpand = [
        'IBLOCK_ID',
        'ID',
        'NAME',
        'CODE',
        'XML_ID'
    ];
    
    private $iblockId;
    
    public function __construct(RequestParameters $requestParameters, $iblockId = null)
    {
        parent::__construct($requestParameters);
        $this->setIblockId($iblockId);
    }
    
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
        echo 'delete';
    }

    public function get()
    {
        $result = false;

        $arOrder = ['ID' => 'DESC'];
        $arFilter = ['IBLOCK_ID' => 122];
        $arGroup = false;
        $arNav = false;
        $arSelect = [];
        
        $arOrder = $this->getRequestParameters()->getOrder();
        $arFilter = $this->getRequestParameters()->getFilter();
        $arNav = $this->getRequestParameters()->getTop();
        $this->expand();
        $arSelect = $this->getRequestParameters()->getSelect();

        $arFilter['IBLOCK_ID'] = $this->getIblockId();
        
        // В arSelect минимум нужны IBLOCK_ID и ID
        if (!in_array('IBLOCK_ID', $arSelect))
        {
            $arSelect[] = 'IBLOCK_ID';
        }
        
        if (!in_array('ID', $arSelect))
        {
            $arSelect[] = 'ID';
        }

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
        
        while($element = $resource->GetNext())
        {
            $result[] = $element;
            //var_dump($element['ID']);
        }
        
        return $result;
    }

    public function merge()
    {
        global $USER;
        
        echo 'merge';
        
        $result = false;
        
        $iblockElement = new \CIBlockElement;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        
        
        //
        $elementId = 10;
        $userId = $USER->GetID();
        $iblockSection = false;
        $properties = [];
        $name = 'Foo';
        $active = 'Y';
        $previewText = '';
        $detailText = '';

        $fieldsArray = [
            "MODIFIED_BY"     => $userId,
            "IBLOCK_SECTION"  => $iblockSection,
            "PROPERTY_VALUES" => $properties,
            "NAME"            => $name,
            "ACTIVE"          => $active,
            "PREVIEW_TEXT"    => $previewText,
            "DETAIL_TEXT"     => $detailText,
            //"DETAIL_PICTURE"  => CFile::MakeFileArray($_SERVER["DOCUMENT_ROOT"]."/image.gif"),
            //"PREVIEW_PICTURE"  => CFile::MakeFileArray($_SERVER["DOCUMENT_ROOT"]."/image.gif"),
        ];

        //$result = $iblockElement->Update($elementId, $fieldsArray, false, true, true, true);
        
        if ($result)
        {
            
        }
        
        return $result;
    }

    public function post()
    {
        echo 'post';
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