<?php
namespace Spellabs\Portal\Rest\Caml\Node\Clause;

class WhereNode extends \Spellabs\Portal\Rest\Caml\Node\AbstractNode
{
    protected function getStringRepresentation()
    {
        $result = '';
        
        foreach ($this->branches as $key => $value) {
            $result = $value->getStringRepresentation();
        }
        
        return $result;
    }

}
