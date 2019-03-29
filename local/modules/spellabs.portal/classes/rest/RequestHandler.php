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
    
    public function getRequestParser()
    {
        return $this->requestParser;
    }

    public function getRequestRouter()
    {
        return $this->requestRouter;
    }
    
    public function getRequestObject()
    {
        return $this->requestObject;
    }
    
    public function getRequestParameters()
    {
        return $this->requestParameters;
    }

    private function setRequestParser(RequestParser $requestParser)
    {
        $this->requestParser = $requestParser;
        return $this;
    }

    private function setRequestRouter(RequestRouter $requestRouter)
    {
        $this->requestRouter = $requestRouter;
        return $this;
    }
    
    private function setRequestObject(AbstractRestApiEntity $requestObject)
    {
        $this->requestObject = $requestObject;
        return $this;
    }
    
    private function setRequestParameters(RequestParameters $requestParameters)
    {
        $this->requestParameters = $requestParameters;
        return $this;
    }
    
    /**
     * Создать запрошенный через rest объект. Объект будет свойством RequestHandler.
     * 
     * @return $this
     */
    public function instantiateRequestClass()
    {
        $className = $this->getRequestRouter()->getClassName();
       
        $this->setRequestObject(new $className($this->getRequestParameters()));
        
        return $this;
    }
    
    /**
     * Вызвать запрошенный через rest метод объекта requestObject.
     * 
     * @return type
     */
    public function callRequestMethod()
    {
        $methodName = $this->getRequestRouter()->getClassMethodName();
        
        return $this->requestObject->$methodName();
    }


}