<?php
namespace Spellabs\Portal\Rest\Caml;

use Spellabs\Portal\Rest\Caml\Node\Clause\WhereNode;

class CamlParser
{
    private $xmlString;
    private $xml;
    
    public function __construct($xmlString)
    {
        $this->xmlString = $xmlString;
        $this->xml = new \SimpleXMLIterator($this->xmlString);
        $this->xml->rewind();
        
        /*foreach ($this->xmlIterator as $key => $value)
        {
            v_dump($value);
        }*/
    }

    public function getFilter()
    {
        if (isset($this->xml->Query->Where)) {
            $where = new WhereNode($this->xml->Query->Where);
            $where->setContent($this->xml->Query->Where->children());
            $where->refine();
            //v_dump($where->branches);
            return strval($where);
        } else {
            return false;
        }
    }
    
    public function getOrder()
    {
        if (isset($this->xmlIterator->OrderBy)) {
            return true;
        } else {
            return false;
        }
    }
    
    public function getGroup()
    {
        if (isset($this->xmlIterator->GroupBy)) {
            return true;
        } else {
            return false;
        }
    }
}

function v_dump($var) {
    echo "<pre>";
    var_dump($var);
    echo "</pre>";
}