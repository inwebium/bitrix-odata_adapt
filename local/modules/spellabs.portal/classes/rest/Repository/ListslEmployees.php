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
        
        if (\CUser::Delete($elementId)) {
            return true;
        } else {
            return false;
        }
    }
    
    /**
     * 
     * @return array
     */
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
            $result = $elements;
        } else {
            $result = $elements;
        }

        return $result;
    }

    public function merge()
    {
        $newUser = new \CUser;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        $elementFields = $arPayload;
        
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
        
        //есть ли в payload значения для пользовательских полей
        // если есть,
    }

    public function post()
    {
        $newUser = new \CUser;
        
        $arPayload = $this->getRequestParameters()->getPayload();
        $elementFields = $arPayload;
        
        $elementFields = $this->prepareAddFields($elementFields);
        
        $userAddResult = $newUser->Add($arFields);
        
        if ($userAddResult) {
            
        } else {
            return false;
        }
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
    
    /**
     * Вернет текущего пользователя
     * 
     * @global \CUser $USER
     * @return array
     */
    public function current()
    {
        global $USER;

        $this->getRequestParameters()->appendFilter(['ID' => $USER->GetID()]);
        
        return $this->get();
    }
    
    /**
     * Вернет группы, в которых состоит текущий пользователь
     * 
     * @global \CUser $USER
     * @return array
     */
    public function currentGroups()
    {
        global $USER;
        
        $result = [];
        
        if ($arGroups = $USER->GetUserGroupArray()) {
            
            $arFilter = ['ID' => implode('|', $arGroups)];
            $resource = \CGroup::GetList(($by = 'id'), ($order='asc'), $arFilter);
            
            while ($element = $resource->GetNext())
            {
                $result[] = $element;
            }
        }

        return $result;
    }
}
