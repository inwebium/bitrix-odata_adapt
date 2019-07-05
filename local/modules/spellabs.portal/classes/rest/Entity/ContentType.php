<?php
namespace Spellabs\Portal\Rest\Entity;

/**
 * Простой класс-контейнер (пока?) для описания контентного типа.
 * Имеет свойства: id, имя и "назначение" (т.е. применяется ли он к разделам ИБ
 * ил элементам ИБ)
 */
class ContentType
{
    /**
     *
     * @var string
     */
    private $id;
    /**
     *
     * @var string
     */
    private $name;
    /**
     *
     * @var string
     */
    private $appliesFor;
    
    /**
     * 
     * @param string $id
     * @param string $name
     * @param string $appliesFor
     */
    public function __construct($id, $name, $appliesFor)
    {
        $this->setId($id);
        $this->setName($name);
        $this->setAppliesFor($appliesFor);
    }
    
    /**
     * 
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * 
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
    
    /**
     * 
     * @return string
     */
    public function getAppliesFor()
    {
        return $this->appliesFor;
    }
    
    /**
     * 
     * @param string $id
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * 
     * @param string $name
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }
    
    /**
     * 
     * @param string $appliesFor
     * @return $this
     */
    public function setAppliesFor($appliesFor)
    {
        $this->appliesFor = $appliesFor;
        return $this;
    }
}
