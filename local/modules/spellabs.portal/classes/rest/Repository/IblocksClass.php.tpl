<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\Entity\AbstractIblockEntity;
use Spellabs\Portal\Rest\Field;
use Spellabs\Portal\Rest\Processor\Type;
use Spellabs\Portal\Rest\RequestParameters;

class List{{ xmlId }} extends AbstractIblockEntity
{
    use \Spellabs\Portal\Rest\Entity\Leverage\{{ behaviour }};
    
    public function __construct(RequestParameters $requestParameters)
    {
        $this
            ->setIblockId({{ id }})
            ->setIblockCode('{{ code }}')
            ->setExternalCode('{{ xmlId }}')
        ;       
{{ construct }}
        parent::__construct($requestParameters);
    }
    
    protected function initializeFields()
    {
{{ fields }}
    }
}
