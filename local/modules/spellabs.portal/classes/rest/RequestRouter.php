<?php
namespace Spellabs\Portal\Rest;

class RequestRouter
{
    /** @var string */
    private $apiRoot;
    /** @var string */
    private $requestMethod;
    /** @var string */
    private $uri;
    
    public function __construct($apiRoot)
    {
        $xRequestMethod = $_SERVER['REQUEST_METHOD'];
        
        if (isset($_SERVER['HTTP_X_HTTP_METHOD']) && !empty($_SERVER['HTTP_X_HTTP_METHOD']))
        {
            $xRequestMethod = $_SERVER['HTTP_X_HTTP_METHOD'];
        }
        
        $this
            ->setApiRoot($apiRoot)
            ->setRequestMethod($xRequestMethod)
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
    
    public function getRequestParameters()
    {
        $result = false;
        
        if ($this->getRequestMethod() != "GET")
        {
            return file_get_contents('php://input');
        }
        else
        {
            return $_REQUEST;
        }
        
        return $result;
    }
    
    public function getClassName()
    {
        $result = false;

        $partsCounter = 0;
        
        foreach ($this->getUriArray() as $key => $value)
        {
            $result .= ucwords($value);
            $partsCounter++;
            
            if ($partsCounter >=2)
            {
                break;
            }
        }

        return $result;
    }
    
    public function getClassMethodName()
    {
        $result = false;
        
        $result = strtolower($this->getRequestMethod());
        
        return $result;
    }
    
    private function isIdPresented()
    {
        $result = false;
        
        if (isset($this->getUriArray()[2]) && is_numeric($this->getUriArray()[2]))
        {
            $result = true;
        }
        
        return $result;
    }
    
    public function getPresentedId()
    {
        $result = false;
        
        if ($this->isIdPresented())
        {
            $result = ['ID' => $this->getUriArray()[2]];
        }
        
        return $result;
    }
}