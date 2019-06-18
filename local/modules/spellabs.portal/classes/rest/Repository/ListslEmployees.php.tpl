<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\AbstractEmployeesEntity;
use Spellabs\Portal\Rest\Field;
use Spellabs\Portal\Rest\Processor\Type;
use Spellabs\Portal\Rest\RequestParameters;

class ListslEmployees extends AbstractEmployeesEntity
{

    public function __construct(RequestParameters $requestParameters)
    {
        $this
            ->setExternalCode('slEmployees')
        ;       
{{ construct }}
        parent::__construct($requestParameters);
    }
    
    protected function initializeFields()
    {
{{ fields }}
    }
}
