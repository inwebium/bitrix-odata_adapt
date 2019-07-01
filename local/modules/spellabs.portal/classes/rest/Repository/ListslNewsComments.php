<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\Entity\AbstractIblockEntity;
use Spellabs\Portal\Rest\Field;
use Spellabs\Portal\Rest\Processor\Type;
use Spellabs\Portal\Rest\RequestParameters;

class ListslNewsComments extends AbstractIblockEntity
{
    /*public static $propertiesAssoc = [

    ];*/
    
    public function __construct(RequestParameters $requestParameters)
    {
        $this
            ->setIblockId(1303)
            ->setIblockCode('sl_news_comments')
            ->setExternalCode('slNewsComments')
            ->setName('Комментарии к новостям')
        ;       

        parent::__construct($requestParameters);
    }
    
    protected function initializeFields()
    {
		$this->fieldsCollection
		;

    }
}
