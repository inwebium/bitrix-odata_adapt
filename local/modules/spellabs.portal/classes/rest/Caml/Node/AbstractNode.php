<?php
namespace Spellabs\Portal\Rest\Caml\Node;

abstract class AbstractNode
{
    const CLAUSE_NODES = [
        'Where', 'OrderBy'
    ];
    const LOGIC_NODES = [
        'Or', 'And'
    ];
    const COMPARISON_NODES = [
        'Eq', 'Geq', 'Gt',
        'Leq', 'Lt', 'Neq',
        'IsNull', 'IsNotNull', 'Includes',
        'Contains', 'BeginsWith', 'In',
        'NotIncludes'
    ];
    const CLAUSE_NODE = 'Clause';
    const LOGIC_NODE = 'LogicalJoin';
    const COMPARISON_NODE = 'ComparisonOperator';
    const NODE_TYPES = [
        self::CLAUSE_NODE => self::CLAUSE_NODE,
        self::LOGIC_NODE => self::LOGIC_NODE,
        self::COMPARISON_NODE => self::COMPARISON_NODE
    ];
    
    protected $itself;
    /**
     *
     * @var \SimpleXMLIterator
     */
    protected $content;
    
    public $branches;
    
    public function __construct(\SimpleXMLIterator &$itself = null)
    {
        $this->branches = [];
        $this->itself = $itself;
    }
    
    /**
     * 
     * @return \SimpleXMLIterator
     */
    public function getContent()
    {
        return $this->content;
    }
    
    /**
     * Сеттер свойства с потомками этого нода
     * 
     * @param \SimpleXMLIterator $content
     * @return $this
     */
    public function setContent(\SimpleXMLIterator &$content)
    {
        $this->content = $content;
        return $this;
    }
    
    public function getBranches()
    {
        return $this->branches;
    }

    public function setBranches(&$name, &$value)
    {
        $this->branches[$name] = $value;
        return $this;
    }

        
    public function refine()
    {
        //$result = [];
        // v_dump($this->content->hasChildren());
        // v_dump($this->content->hasChildren());
        // если у итератора имеются потомки
        if (!empty($this->content)) {
            
            // перебираем итераторы-потомки
            for ($this->content->rewind(); $this->content->valid(); $this->content->next()) {
                $currentNode = $this->content->current();
//                v_dump('Current node content is: ');
//                v_dump($currentNode);
                // Определяем тип (namespace по-сути)
                $nodeType = $this->determineNodeType($currentNode->getName());
//                v_dump('Node type is: ');
//                v_dump($nodeType);
//                v_dump('Node name is: ');
//                v_dump($currentNode->getName());
                // составляем полное название класса
                $nodeClass = 
                    'Spellabs\Portal\Rest\Caml\Node\\' . 
                    $nodeType . 
                    $currentNode->getName() . 'Node'
                ;
//                v_dump('Class name will be: ');
//                v_dump($nodeClass);
                
                // если есть такой класс
                if (class_exists($nodeClass)) {
//                    v_dump($this->content);
                    // создать его объект
                    $node = new $nodeClass($this->content->getChildren());

                    // если есть потомки
                    if ($this->content->hasChildren()) {
//                        v_dump('It has children');
//                        v_dump($this->content->getChildren());
                        // призвоить их ноду
                        $node->setContent($this->content->getChildren());
                    } else {
//                        v_dump('It doesn\'t have children');
                    }
                    
                    // пускай нод обработает что у него есть
                    $node->refine();
                    $this->setBranches($currentNode->getName(), $node);
                }
            }
        }
    }
    
    /**
     * Определяет тип нода (сравнение, логика)
     * 
     * @param string $name
     * @return string
     */
    protected function determineNodeType(&$name)
    {
        if (in_array($name, self::CLAUSE_NODES)) {
            return self::NODE_TYPES[self::CLAUSE_NODE] . '\\';
        }
        
        if (in_array($name, self::LOGIC_NODES)) {
            return self::NODE_TYPES[self::LOGIC_NODE] . '\\';
        }
        
        if (in_array($name, self::COMPARISON_NODES)) {
            return self::NODE_TYPES[self::COMPARISON_NODE] . '\\';
        }
        
        return '';
    }
    
    public function getNodeClass()
    {
        return get_called_class();
    }
    
    protected function getStringRepresentation()
    {
        return $this->getNodeClass();
    }
    
    public function __toString()
    {
        return $this->getStringRepresentation();
    }
}

function v_dump($var) {
    echo "<pre>";
    var_dump($var);
    echo "</pre>";
}