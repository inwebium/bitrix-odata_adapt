<?php
namespace Spellabs\Portal\Rest;

class FieldsCollection implements \Iterator
{
    /**
     * Массив полей. Ключи массива - коды полей (ID, SORT...)
     * @var array Массив с объектами Field
     */
    private $fields;
    
    /**
     * Конструктор. Проинициализирует массив полей переданным массивом объектов
     * класса Field либо пустым массивом.
     * 
     * @param array $fields
     */
    public function __construct(array $fields = [])
    {
        $this->setFields($fields);
    }
    
    /**
     * Вернет массив полей
     * 
     * @return array
     */
    public function getFields()
    {
        return $this->fields;
    }
    
    /**
     * Присвоит массиву полей пустой массив. Затем уже добавит к нему переданные
     * элементы если они объекты класса Field
     * 
     * @param array $fields
     * @return $this
     */
    public function setFields(array $fields = [])
    {
        $this->fields = [];
        
        foreach ($fields as $key => $field)
        {
            if ($field instanceof Field) {
                $this->addField($field);
            }
        }
        
        return $this;
    }

    /**
     * Добавит объект Field в массив полей
     * 
     * @param \Spellabs\Portal\Rest\Field $field
     * @return $this
     */
    public function addField(Field $field)
    {
        $this->fields[$field->getCode()] = $field;
        
        return $this;
    }
    
    /**
     * Возвращает объект Field по коду поля
     * 
     * @param string $code
     * @return \Spellabs\Portal\Rest\Field
     */
    public function getField($code)
    {
        return $this->fields[$code];
    }
    
    /*
     * Далее реализация итератора
     */

    public function current()
    {
        return current($this->fields);
    }

    public function key()
    {
        return key($this->fields);
    }

    public function next(): void
    {
        next($this->fields);
    }

    public function rewind(): void
    {
        reset($this->fields);
    }

    public function valid(): bool
    {
        return isset($this->fields[$this->key()]);
    }

}
