<?php
namespace Spellabs\Portal\Rest\Caml\Node\ComparisonOperator;

class IsNullNode extends AbstractComparisonOperator
{
    protected function getStringRepresentation()
    {
        $result = '';
        
        $result = $this->branches['FieldRef'] . '[eq]=null';
        
        return $result;
    }
}
