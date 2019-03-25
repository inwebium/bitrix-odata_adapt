<?php
namespace Spellabs\Portal\Rest;

class ResponseHandler
{
    /** @var ResponseHeaders */
    private $headersHandler;
    /** @var ResponseBody */
    private $bodyHandler;
    
    public function __construct(array $headers = [], $format = 'json')
    {
        $this
            ->setHeadersHandler(new ResponseHeaders($headers))
            ->setBodyHandler(new ResponseBody($format))
        ;
    }

    public function getHeadersHandler()
    {
        return $this->headersHandler;
    }

    public function getBodyHandler()
    {
        return $this->bodyHandler;
    }

    private function setHeadersHandler($headersHandler)
    {
        $this->headersHandler = $headersHandler;
        return $this;
    }

    private function setBodyHandler($bodyHandler)
    {
        $this->bodyHandler = $bodyHandler;
        return $this;
    }


}
