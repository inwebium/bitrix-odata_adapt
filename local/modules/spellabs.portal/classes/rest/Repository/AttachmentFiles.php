<?php
namespace Spellabs\Portal\Rest\Repository;

use Spellabs\Portal\Rest\AbstractExpandableProperty;

class AttachmentFiles extends AbstractExpandableProperty
{
    public function __construct()
    {
        parent::__construct();
        $this->setPropertyCode('SL_ATTACHMENTS');
    }

}