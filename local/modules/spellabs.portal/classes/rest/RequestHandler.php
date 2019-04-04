<?php
namespace Spellabs\Portal\Rest;

class RequestHandler
{
    /** @var RequestParser */
    private $requestParser;
    /** @var RequestRouter */
    private $requestRouter;
    /** @var RequestParameters */
    private $requestParameters;
    /** @var AbstractRestApiEntity */
    private $requestObject;
    
    /**
     * Конструктор объекта запроса, принимает строку с корнем api на сервере
     * 
     * @param string $apiRoot
     */
    public function __construct($apiRoot = '/portal/rest/')
    {
        $this
            ->setRequestRouter(new RequestRouter($apiRoot))
            ->setRequestParser(
                new RequestParser(
                    $this->getRequestRouter()->getRequestMethod(),
                    $this->getRequestRouter()->getRequestParameters()
                    )
                )
            ->setRequestParameters(new RequestParameters($this->getRequestParser()))
        ;
        
        $this->getRequestParameters()->appendFilter(
            $this->getRequestRouter()->getPresentedId()
            );
    }
    
    /**
     * 
     * @return \Spellabs\Portal\Rest\RequestParser
     */
    public function getRequestParser()
    {
        return $this->requestParser;
    }
    
    /**
     * 
     * @return \Spellabs\Portal\Rest\RequestRouter
     */
    public function getRequestRouter()
    {
        return $this->requestRouter;
    }
    
    /**
     * 
     * @return \Spellabs\Portal\Rest\AbstractRestApiEntity
     */
    public function getRequestObject()
    {
        return $this->requestObject;
    }
    
    /**
     * 
     * @return \Spellabs\Portal\Rest\RequestParameters
     */
    public function getRequestParameters()
    {
        return $this->requestParameters;
    }
    
    /**
     * 
     * @param \Spellabs\Portal\Rest\RequestParser $requestParser
     * @return $this Fluent
     */
    private function setRequestParser(RequestParser $requestParser)
    {
        $this->requestParser = $requestParser;
        return $this;
    }
    
    /**
     * 
     * @param \Spellabs\Portal\Rest\RequestRouter $requestRouter
     * @return $this Fluent
     */
    private function setRequestRouter(RequestRouter $requestRouter)
    {
        $this->requestRouter = $requestRouter;
        return $this;
    }
    
    /**
     * 
     * @param \Spellabs\Portal\Rest\AbstractRestApiEntity $requestObject
     * @return $this Fluent
     */
    private function setRequestObject(AbstractRestApiEntity $requestObject)
    {
        $this->requestObject = $requestObject;
        return $this;
    }
    
    /**
     * 
     * @param \Spellabs\Portal\Rest\RequestParameters $requestParameters
     * @return $this Fluent
     */
    private function setRequestParameters(RequestParameters $requestParameters)
    {
        $this->requestParameters = $requestParameters;
        return $this;
    }
    
    /**
     * Создать запрошенный через rest объект. Объект будет свойством RequestHandler.
     * 
     * @return $this Fluent
     */
    public function instantiateRequestClass()
    {
        $className = "Spellabs\\Portal\\Rest\\Repository\\" . $this->getRequestRouter()->getClassName();
       
        $this->setRequestObject(new $className($this->getRequestParameters()));
        
        return $this;
    }
    
    /**
     * Вызвать запрошенный через rest метод объекта requestObject.
     * 
     * @return type Результат выполнения запрошенного метода объекта в RequestObject
     */
    public function callRequestMethod()
    {
        $methodName = $this->getRequestRouter()->getClassMethodName();
        
        return $this->requestObject->$methodName();
    }


}