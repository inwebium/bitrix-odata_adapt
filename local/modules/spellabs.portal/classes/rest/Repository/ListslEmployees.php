<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\AbstractRestApiEntity;
use Spellabs\Portal\Rest\RequestParameters;

class ListslEmployees extends AbstractRestApiEntity
{
    protected $externalCode = 'slEmployees';
    public static $fieldsAssoc = [
        'Id' => 'ID',
        'Title' => 'NAME',
    ];
    public static $propertiesAssoc = [
		'slAttachments' => 'SL_ATTACHMENTS',
    ];

    public function delete()
    {
        
    }

    public function get()
    {
        $result = [];
        
        $arOrder = $this->getRequestParameters()->getOrder();
        $arFilter = $this->getRequestParameters()->getFilter();
        $arGroup = false;
        $arNav = $this->getRequestParameters()->getTop();
        $this->expand();
        $arSelect = $this->getRequestParameters()->getSelect();

        $arParams = [
            'NAV_PARAMS' => $arNav,
        ];
        
        $arParams += $this->separateSelect($arSelect);
        
        $resource = \CUser::GetList($arOrder, ($by = []), $arFilter, $arParams);
        
        $elements = [];
        
        while ($element = $resource->GetNext())
        {
            $elements[] = $element;
        }
        
        if (!isset($arParams['FIELDS']['ID']) || is_array($arParams['FIELDS']['ID'])) {
            $result['value'] = $elements;
        } else {
            $result = $elements;
        }

        return $result;
    }

    public function merge()
    {
        
    }

    public function post()
    {
        
    }
    
    protected function expand()
    {
        $propertiesToExpand = $this->getRequestParameters()->getExpand();

        foreach ($propertiesToExpand as $num => $fieldCode)
        {
            $this->replaceExpandedFields($fieldCode);
        }
        
        return $this;
    }
    
    public function separateSelect($arSelect)
    {
        $select = [];
        $fields = [];
        
        foreach ($arSelect as $key => $value)
        {
            if (strpos($value, 'UF_')) {
                $select[] = $value;
            } else {
                $fields[] = $value;
            }
        }
        
        return ['SELECT' => $select, 'FIELDS' => $fields];
    }
}
