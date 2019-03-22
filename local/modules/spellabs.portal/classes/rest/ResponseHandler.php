<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Spellabs\Portal\Rest;

/**
 * Description of ResponseHandler
 *
 * @author mikhail.korneev
 */
class ResponseHandler
{
    /** @var ResponseHeaders */
    private $headers;
    /** @var ResponseBody */
    private $body;
    
    public function __construct()
    {
        ;
    }

    public function getHeaders()
    {
        return $this->headers;
    }

    public function getBody()
    {
        return $this->body;
    }

    private function setHeaders($headers)
    {
        $this->headers = $headers;
        return $this;
    }

    private function setBody($body)
    {
        $this->body = $body;
        return $this;
    }


}
