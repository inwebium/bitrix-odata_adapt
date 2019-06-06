<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\AbstractIblockEntity;
use Spellabs\Portal\Rest\RequestParameters;

class List{{ xmlId }} extends AbstractIblockEntity
{
    protected $iblockId = {{ id }};
    protected $iblockCode = '{{ code }}';
    protected $externalCode = '{{ xmlId }}';
    public static $propertiesAssoc = [
{{ properties }}
    ];
    
    public function __construct(RequestParameters $requestParameters)
    {
        parent::__construct($requestParameters);
    }
}
