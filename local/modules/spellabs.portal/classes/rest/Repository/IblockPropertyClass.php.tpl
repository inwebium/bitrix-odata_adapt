<?php
namespace Spellabs\Portal\Rest\Repository\Fields;

use Spellabs\Portal\Rest\AbstractExpandableProperty;

class {{ xmlId }} extends AbstractExpandableProperty
{
    public function __construct()
    {
        parent::__construct();
        $this->setPropertyCode('{{ code }}');
    }

}