<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\AbstractIblockEntity;
use Spellabs\Portal\Rest\Field;
use Spellabs\Portal\Rest\Processor\Type;
use Spellabs\Portal\Rest\RequestParameters;

class ListslNewsViews extends AbstractIblockEntity
{
    
    public function __construct(RequestParameters $requestParameters)
    {
        $this
            ->setIblockId(\Spellabs\Portal\Rest\IblockUtils::getIblockByXmlId('slNews'))
            ->setIblockCode('sl_news_views')
            ->setExternalCode('slNewsViews')
        ;       

        parent::__construct($requestParameters);
    }
    
    protected function initializeFields()
    {
		$this->fieldsCollection
            ->addField(
				new Field(
					'SL_LOOKUP_NEWS',
					'slLookupNews',
					Type\EntityType::class,
					'PROPERTY',
				)
			)
			->addField(
				new Field(
					'SHOW_COUNTER',
					'LikesCount',
					Type\IntegerType::class,
					'FIELD',
				)
			)
		;

    }
}
