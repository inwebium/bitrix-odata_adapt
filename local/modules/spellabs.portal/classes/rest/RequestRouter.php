<?php
namespace Spellabs\Portal\Rest;

class RequestRouter
{
    private $apiRoot;
    private $requestMethod;
    private $uri;
    
    public function __construct($apiRoot)
    {
        $this
            ->setApiRoot($apiRoot)
            ->setRequestMethod($_SERVER['REQUEST_METHOD'])
            ->setUri(str_replace($this->getApiRoot(), '', strtok($_SERVER["REQUEST_URI"],'?')))
            ;
    }
    
    public function getApiRoot()
    {
        return $this->apiRoot;
    }

    public function getRequestMethod()
    {
        return $this->requestMethod;
    }

    public function getUri()
    {
        return $this->uri;
    }

    private function setApiRoot($apiRoot)
    {
        $this->apiRoot = $apiRoot;
        return $this;
    }

    private function setRequestMethod($requestMethod)
    {
        $this->requestMethod = $requestMethod;
        return $this;
    }

    private function setUri($uri)
    {
        $this->uri = $uri;
        return $this;
    }

    public function getUriArray()
    {
        $result = explode('/', $this->getUri());
        
        foreach ($result as $key => $value)
        {
            if (empty($value))
            {
                unset($result[$key]);
            }
        }
        
        return $result;
    }
    
    public function getClassName()
    {
        $result = false;
        
        $arUri = $this->getUriArray();
        
        foreach ($arUri as $key => $value)
        {
            $result .= ucwords($value);
        }
        
        return $result;
    }
    
    public function getClassMethodName()
    {
        $result = false;
        
        $result = strtolower($this->getRequestMethod());
        
        return $result;
    }

}