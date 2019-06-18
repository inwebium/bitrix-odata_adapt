<?php
namespace Spellabs\Portal\Rest;

use Processor\Type\TypeInterface;

class Field
{    
    /**
     * Код поля в битриксе (ID, NAME, SORT, DETAIL_TEXT...)
     * @var string
     */
    private $code;
    /**
     * XML_ID (внешний код) для поля в битриксе. Т.е. = код поля в ангуляре
     * (Created, slIndex)
     * @var string
     */
    private $xmlId;
    /**
     * Тип поля. Объект используемый для обработки результата в поле
     * 
     * @var TypeInterface Description
     */
    private $type;
    
    private $bitrixEntity;
    
    /**
     * Конструктор. Вызывает сеттеры для всех свойств.
     * 
     * @param string $code
     * @param string $xmlId
     * @param string $type
     */
    public function __construct($code, $xmlId, $type, $bitrixEntity = 'FIELD')
    {
        $this
            ->setCode($code)
            ->setXmlId($xmlId)
            ->setType($type)
            ->setBitrixEntity($bitrixEntity)
        ;
    }
    
    /**
     * Вернет код поля (ID, SORT, DETAIL_TEXT ...)
     * 
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }
    
    /**
     * Вернет XML_ID поля. Используется для ассоциации с полями в ангуляре.
     * Например в ангуляре slIndex => SORT, где slIndex будет как раз XML_ID
     * 
     * @return string
     */
    public function getXmlId()
    {
        return $this->xmlId;
    }

    public function getType()
    {
        return $this->type;
    }
    
    /**
     * Установит значение кода поля.
     * 
     * @param string $code
     * @return $this Fluent
     */
    public function setCode($code)
    {
        $this->code = $code;
        return $this;
    }
    
    /**
     * Установит XML_ID для поля (для ассоциации с ангуляром)
     * 
     * @param string $xmlId
     * @return $this
     */
    public function setXmlId($xmlId)
    {
        $this->xmlId = $xmlId;
        return $this;
    }
    
    /**
     * Установит тип поля для обработки значения перед отдачей 
     * (потомки Spellabs\Portal\Rest\Processor\Type\AbstractType)
     * 
     * @param string $type
     * @return $this
     */
    public function setType($type)
    {
        $this->type = $type;
        return $this;
    }
    
    public function getBitrixEntity()
    {
        return $this->bitrixEntity;
    }

    public function setBitrixEntity($bitrixEntity)
    {
        $this->bitrixEntity = $bitrixEntity;
        return $this;
    }
        
    /**
     * Вернет массив вида [XML_ID => CODE]
     * 
     * @return array
     */
    public function getAssociation()
    {
        return [$this->getXmlId() => $this->getCode()];
    }
    
    
    public function handleValue($value)
    {
        return $this->type::parseValue();
    }
}
