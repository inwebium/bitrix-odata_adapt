<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest;

class Iblocks{{ xmlId }} extends AbstractIblockEntity
{
    private $iblockId = {{ id }};
    private $iblockCode = '{{ code }}';
    private $externalCode = '{{ xmlId }}';
    private $propertiesAssoc = [
{{ properties }}
    ];
    
    public function __construct(RequestParameters $requestParameters)
    {
        parent::__construct($requestParameters);
    }
}
