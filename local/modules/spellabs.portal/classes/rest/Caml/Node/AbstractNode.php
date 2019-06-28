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
    
    /**
     *
     * @var array
     */
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
        // если у итератора имеются потомки
        if (!empty($this->content)) {
            
            // перебираем итераторы-потомки
            for ($this->content->rewind(); $this->content->valid(); $this->content->next()) {
                $currentNode = $this->content->current();
                // Определяем тип (namespace по-сути)
                $nodeType = $this->determineNodeType($currentNode->getName());
                // составляем полное название класса
                $nodeClass = 
                    'Spellabs\Portal\Rest\Caml\Node\\' . 
                    $nodeType . 
                    $currentNode->getName() . 'Node'
                ;
                
                // если есть такой класс
                if (class_exists($nodeClass)) {
                    // создать его объект
                    $node = new $nodeClass($this->content->getChildren());

                    // если есть потомки
                    if ($this->content->hasChildren()) {
                        // призвоить их ноду
                        $node->setContent($this->content->getChildren());
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