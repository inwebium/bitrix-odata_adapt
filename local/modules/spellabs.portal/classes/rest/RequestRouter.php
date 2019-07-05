<?php
namespace Spellabs\Portal\Rest;

/**
 * Класс работает с URI и определяет какой объект из репозитория и его метод 
 * запрошены
 */
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
            'ListslEmployees' => ["/currentuser/"],
            'List' => ["/[iI]blocks?/", "/[lL]ists?/"],
        ],
        1 => [
            'getByTitle' => ["/getByTitle\('([\w\d\s\-%]+)'\)/"],
            'getByXmlId' => ["/([\w\d]+)/"], // must be last
        ],
        2 => [
            //'getCurrentUserGroups' => [], // группы текущего пользователя
            //'getCurrentUser'       => [], // текущий пользователь
            'getItemById' => ["/items\(([\d]+)\)/"], // элемент по id
            'getItems'    => ["/items/"], // must be last
        ],
        3 => [
            'folder' => ["/folder/"],
        ],
        4 => [
            'files' => ["/files/"],
        ]
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
    
    /**
     * Вернет название метода для вызова запросом. Это либо будет какой-нибудь
     * исключительный случай, например 
     * /Lists/getByTitle('Пользователи')/current. Где current будет таким 
     * исключительным методом. Иначе вернется метод по методу запроса 
     * (get, post...).
     * 
     * @return string|boolean
     */
    public function getClassMethodName()
    {
        $result = false;

        if (!$result = $this->getExceptionalMethod()) {
            $result = strtolower($this->getRequestMethod());
        }
        
        return $result;
    }
    
    /**
     * Если вызван "исключительный" метод и он представлен в классе,
     * например ListslEmployees->getCurrent(), то вернет название метода.
     * Иначе false
     * 
     * @return string|boolean
     */
    private function getExceptionalMethod()
    {
        $result = false;
        
        $methodName = $this->getUriArray()[2];
        
        if (count($this->getUriArray()) > 3) {
            $methodName = $this->getUriArray()[3];
            
            for ($i = 4; isset($this->getUriArray()[$i]); $i++) {
                $methodName .= ucfirst($this->getUriArray()[$i]);
            }
        }
        
        if (
            method_exists(
                "Spellabs\\Portal\\Rest\\Repository\\" . $this->getClassName(), 
                $methodName
            )
        ) {
            $result = $methodName;
        }
        
        /*var_dump($result);
        die();*/
        
        return $result;
    }
    
    /**
     * Проверяет представлен ли id элеента в запросе 
     * (запросы вида .../items(123)...)
     * 
     * @return boolean
     */
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
    
    /**
     * Получает id из предоставленного .../items(N)/...
     * 
     * @return boolean|int
     */
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
     * 
     * @return string
     */
    private function parseUri()
    {
        $className = '';

        $counter = 0;
        // Для каждой части в URI
        foreach ($this->getUriArray() as $key => $value) {
            
            if ($counter >= 2) {
                break;
            }

            $isRouteFound = false;
            // Перебираем элементы-ассоциации
            foreach ($this->routeAssociation[$key] as $classNamePart => $synonyms) {

                foreach ($synonyms as $pattern)
                {
                    if (preg_match($pattern, $value)) {

                        if (method_exists($this, $classNamePart)) {
                            $className .= $this->$classNamePart($value);
                        } else {
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
        
        return $className;
    }
    
    /**
     * Возвращает внешний код запрошенного инфоблока через rest, например:
     * .../lists/getByTitle('Новости') возвращает XML_ID инфоблока у которого
     * NAME = Новости
     * 
     * @param type $uriPart
     * @return type
     */
    private function getByTitle($uriPart)
    {
        $pattern = "/(\w+)\('([\w\d\s\-%]+)'\)/";
        $matches = [];
        preg_match($pattern, $uriPart, $matches);
        
        $iblock = [];
        
        // Группы и сотрудники - исключения, т.к. будут без инфоблоков
        // это отдельные сущности битрикса и в Repository будут заранее
        // созданные для них классы вместо генерируемых во время установки
        if (urldecode($matches[2]) == 'Группы') {
            $iblock['XML_ID'] = 'slGroups';
        } elseif (urldecode($matches[2]) == 'Сотрудники') {
            $iblock['XML_ID'] = 'slEmployees';
        } elseif (urldecode($matches[2]) == 'Настройки портала') {
            $iblock['XML_ID'] = 'slSettings';
        } elseif (urldecode($matches[2]) == 'Просмотры новостей') {
            $iblock['XML_ID'] = 'slNewsViews';
        } else {
            $iblock = IblockUtils::getIblockBy('NAME', urldecode($matches[2]));
        }
        
        return $iblock['XML_ID'];
    }

    private function getByXmlId($uriPart)
    {
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