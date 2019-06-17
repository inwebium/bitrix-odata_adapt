<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\AbstractRestApiEntity;
use Spellabs\Portal\Rest\Field;
use Spellabs\Portal\Rest\Processor\Type;
use Spellabs\Portal\Rest\RequestParameters;

class ListslGroups extends AbstractRestApiEntity
{
    /*protected $externalCode = 'slGroups';
    public static $fieldsAssoc = [
        'Id' => 'ID',
        'Title' => 'NAME',
    ];
    public static $propertiesAssoc = [
		
    ];*/
    
    public function __construct()
    {
        $this
            ->setExternalCode('slEmployees')
        ;       

        parent::__construct($requestParameters);
    }

    public function delete()
    {
        
    }
    
    /**
     * 
     * @todo Синтаксис сложной логики фильтра у CGroups::GetList еще ущербней
     *       если понадобиться фильтр по нескольким ID то их надо склеить 
     *       в строку через |
     * @return type
     */
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
            $result = $elements;
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

    protected function initializeFields()
    {
        $this->fieldsCollection
            ->addField(
				new Field(
					'ID',
					'Id',
					Type\IntegerType::class,
					'FIELD',
				)
			)
            ->addField(
				new Field(
					'NAME',
					'Title',
					Type\StringType::class,
					'FIELD',
				)
			)
            ->addField(
				new Field(
					'SL_ATTACHMENTS',
					'AttachmentFiles',
					Type\FileType::class,
					'PROPERTY',
				)
			)
        ;
    }

}
