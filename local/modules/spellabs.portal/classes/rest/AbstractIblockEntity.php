<?php
namespace Spellabs\Portal\Rest;

use Bitrix\Main\Loader;

Loader::includeModule('iblock');

abstract class AbstractIblockEntity extends AbstractRestApiEntity
{
    private $fieldsToExpand = [
        'IBLOCK_ID',
        'ID',
        'NAME',
        'CODE',
        'XML_ID'
    ];
    
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
        $this->Expand();
        $arSelect = $this->getRequestParameters()->getSelect();

        $arFilter['IBLOCK_ID'] = 122;

        if (!in_array('IBLOCK_ID', $arSelect))
        {
            $arSelect[] = 'IBLOCK_ID';
        }

        echo '<pre>';
        var_dump($arOrder);
        echo '</pre>';
        echo '<pre>';
        var_dump($arFilter);
        echo '</pre>';
        echo '<pre>';
        var_dump($arGroup);
        echo '</pre>';
        echo '<pre>';
        var_dump($arNav);
        echo '</pre>';
        echo '<pre>';
        var_dump($arSelect);
        echo '</pre>';

        $resource = \CIBlockElement::GetList($arOrder, $arFilter, $arGroup, $arNav, $arSelect);
        
        while($element = $resource->GetNext())
        {
            $result[] = $element;
            var_dump($element['ID']);
        }
        
        return $result;
    }

    public function merge()
    {
        echo 'merge';
    }

    public function post()
    {
        echo 'post';
    }
    
    protected function Expand()
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
}