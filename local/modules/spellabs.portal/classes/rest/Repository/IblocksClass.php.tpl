<?php
namespace Spellabs\Portal\Rest\Repository;

class Iblocks{{ xmlId }}
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
