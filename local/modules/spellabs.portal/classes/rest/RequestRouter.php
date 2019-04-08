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
    
    private $routeAssociation = [
        0 => [
            'Iblock' => ["/iblocks*/", "/lists*/"],
        ],
        1 => [
            'getByTitle' => ["/getByTitle\('([\w\d\s%]+)'\)/"],
            'getByXmlId' => ["/([\w\d]+)/"], // must be last
        ],
        2 => [
            'getItemById' => ["/items\(([\d]+)\)/"], 
            'getItems'    => ["/items/"], // must be last
        ],
    ];
    
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
        
        $result = $this->parseUri();

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
        
        if (
            (isset($this->getUriArray()[2]) && is_numeric($this->getUriArray()[2])) ||
            preg_match("/items\((\d+)\)/", $this->getUriArray()[2])
        ) {
            $result = true;
        }
        
        return $result;
    }
    
    public function getPresentedId()
    {
        $result = false;
        
        if ($this->isIdPresented())
        {
            $matches = [];
            if (preg_match("/items\((\d+)\)/", $this->getUriArray()[2], $matches)) {
                $result = ['ID' => $matches[1]];
            } else {
                $result = ['ID' => $this->getUriArray()[2]];
            }
            
        }
        
        return $result;
    }
    
    /**
     * 
     * @return boolean
     */
    private function parseUri()
    {
        $className = '';
        
        echo "\nparseUri entered\n";
        //$entityType = '';
        var_dump($this->getUriArray());
        
        $counter = 0;
        // Для каждой части в URI
        foreach ($this->getUriArray() as $key => $value) {
            
            if ($counter >= 2) {
                break;
            }
            
            $isRouteFound = false;
            // Перебираем элементы-ассоциации
            foreach ($this->routeAssociation[$key] as $classNamePart => $synonyms) {
                echo "\nvalue = $value\n";
                
                foreach ($synonyms as $pattern)
                {
                    if (preg_match($pattern, $value)) {

                        if (method_exists($this, $classNamePart)) {
                            echo "\nmethod Found = $classNamePart\n";
                            $className .= $this->$classNamePart($value);
                        } else {
                            echo "\nmethod not Found = $classNamePart\n";
                            $className .= $classNamePart;
                        }
                        $isRouteFound = true;
                        break;
                    }
                }
                
                if ($isRouteFound) {
                    break;
                }
                
                
            }
            
            $counter++;
        }
        
        echo "\nend className = $className\n";
        return $className;
    }
    
    private function getByTitle($uriPart)
    {
        $pattern = "/(\w+)\('([\w\d\s%]+)'\)/";
        $matches = [];
        preg_match($pattern, $uriPart, $matches);

        $iblock = IblockUtils::getIblockBy('NAME', urldecode($matches[2]));
        
        return $iblock['XML_ID'];
    }
    
    private function getByXmlId($uriPart)
    {
        /*$pattern = "/(\w+)\('([\w\d\s%]+)'\)/";
        $matches = [];
        preg_match($pattern, $uriPart, $matches);

        $iblock = IblockUtils::getIblockBy('NAME', urldecode($matches[2]));*/
        
        return $uriPart;
    }
    
    private function getItems()
    {
        
    }
    
    private function getItemById($uriPart)
    {
        $pattern = "/items\(([\d]+)\)/";
        $matches = [];
        preg_match($pattern, $uriPart, $matches);
        
        
    }
}