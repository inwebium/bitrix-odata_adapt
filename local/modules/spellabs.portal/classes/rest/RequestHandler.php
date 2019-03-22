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
    /** @var RestApiEntity */
    private $requestObject;
    
    public function __construct($apiRoot = '/portal/rest/')
    {
        $this
            ->setRequestParser(new RequestParser($_REQUEST))
            ->setRequestRouter(new RequestRouter($apiRoot))
            ->setRequestParameters(new RequestParameters($this->getRequestParser()))
        ;
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
    
    private function setRequestObject(RestApiEntity $requestObject)
    {
        $this->requestObject = $requestObject;
        return $this;
    }
    
    private function setRequestParameters(RequestParameters $requestParameters)
    {
        $this->requestParameters = $requestParameters;
        return $this;
    }
    
    public function instantiateRequestClass()
    {
        $className = $this->getRequestRouter()->getClassName();
       
        $this->setRequestObject(new $className());
        
        return $this;
    }
    
    public function callRequestMethod()
    {
        $methodName = $this->getRequestRouter()->getClassMethodName();
        
        return $this->requestObject->$methodName();
    }


}