<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\Entity\AbstractIblockEntity;
use Spellabs\Portal\Rest\Field;
use Spellabs\Portal\Rest\Processor\Type;
use Spellabs\Portal\Rest\RequestParameters;

class List{{ xmlId }} extends AbstractIblockEntity
{
    /*public static $propertiesAssoc = [
{{ properties }}
    ];*/
    
    public function __construct(RequestParameters $requestParameters)
    {
        $this
            ->setIblockId({{ id }})
            ->setIblockCode('{{ code }}')
            ->setExternalCode('{{ xmlId }}')
            ->setName('{{ name }}')
        ;       
{{ construct }}
        parent::__construct($requestParameters);
    }
    
    protected function initializeFields()
    {
{{ fields }}
    }
}
