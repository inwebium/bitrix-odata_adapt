<?php
namespace Spellabs\Portal\Rest\Caml\Node\LogicalJoin;

class AndNode extends AbstractLogicalJoin
{
    protected function getStringRepresentation()
    {
        $result = '(';
        
        foreach ($this->branches as $key => $value) {
            $result .= $value->getStringRepresentation() . ';';
        }
        
        $result = substr($result, 0, -1) . ')';
        
        return $result;
    }
}
