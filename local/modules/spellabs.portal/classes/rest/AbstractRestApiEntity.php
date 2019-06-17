<?php
namespace Spellabs\Portal\Rest;

/**
 * Абстракция сущности доступной в rest
 */
abstract class AbstractRestApiEntity implements RestApiEntityInterface
{
    protected $externalCode;
    /**
     * Объект с параметрами запроса
     * @var RequestParameters
     */
    protected $requestParameters;
    /**
     * Объект с массивом полей для этой сущности
     * @var FieldsCollection
     */
    protected $fieldsCollection;

    /**
     * Конструктор. Принимает объект с параметрами запроса. Вызывает метод 
     * инициализирующий массив с полями.
     * 
     * @param RequestParameters $requestParameters
     */
    public function __construct(RequestParameters $requestParameters)
    {
        $this
            ->setRequestParameters($requestParameters)
        ;
        
        $this->initializeFields();
    }
    
    /**
     * externalCode getter
     * 
     * @return string
     */
    public function getExternalCode()
    {
        return $this->externalCode;
    }

    /**
     * Геттер объекта с параметрами запроса
     * 
     * @return RequestParameters
     */
    protected function getRequestParameters()
    {
        return $this->requestParameters;
    }

    /**
     * Сеттер объекта с параметрами запроса
     * 
     * @param RequestParameters $requestParameters
     * @return $this
     */
    protected function setRequestParameters(RequestParameters $requestParameters)
    {
        $this->requestParameters = $requestParameters;
        $this->fieldsCollection = new FieldsCollection();
        
        return $this;
    }

    /**
     * Геттер массива полей
     * 
     * @return FieldsCollection Объект FieldsCollection
     */
    protected function getFieldsCollection()
    {
        return $this->fieldsCollection;
    }
    
    /**
     * externalCode setter
     * 
     * @param string $externalCode XML_ID инфоблока
     * @return $this
     */
    public function setExternalCode($externalCode)
    {
        $this->externalCode = $externalCode;
        return $this;
    }

    /**
     * Сеттер массива полей
     * 
     * @param FieldsCollection $fieldsCollection
     * @return $this
     */
    protected function setFieldsCollection(FieldsCollection $fieldsCollection)
    {
        $this->fieldsCollection = $fieldsCollection;
        return $this;
    }

    public function getFieldsAssociations($entityName = '')
    {
        $result = [];
        
        $collectionForWalk = $this->fieldsCollection;
        
        if (!empty($entityName)) {
            $collectionForWalk = $this->fieldsCollection->getFieldsByEntity($entityName);
        }
        
        foreach ($collectionForWalk as $fieldCode => $field)
        {
            $result[$field->getXmlId()] = $fieldCode;
        }

        return $result;
    }

    /**
     * Обяжет подонков реализовать этот метод для инициализации массива полей.
     */
    protected abstract function initializeFields();
    
    public abstract function get();
    
    public abstract function post();
    
    public abstract function merge();
    
    public abstract function delete();
    
    
}