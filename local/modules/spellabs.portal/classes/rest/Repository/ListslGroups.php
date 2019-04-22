<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\AbstractRestApiEntity;
use Spellabs\Portal\Rest\RequestParameters;

class ListslGroups extends AbstractRestApiEntity
{
    protected $externalCode = 'slGroups';
    public static $fieldsAssoc = [
        'Id' => 'ID',
        'Title' => 'NAME',
    ];
    public static $propertiesAssoc = [
		
    ];

    public function delete()
    {
        
    }
    
    public function get()
    {
        $result = [];
        
        $arFilter = $this->getRequestParameters()->getFilter();
        
        $resource = \CGroup::GetList(($by = 'id'), ($order='asc'), $arFilter);
        
        $elements = [];
        
        while ($element = $resource->GetNext())
        {
            $elements[] = [
                'ID' => $element['ID'],
                'NAME' => $element['NAME']
            ];
        }
        
        if (!isset($arFilter['ID']) || is_array($arFilter['ID'])) {
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
}
