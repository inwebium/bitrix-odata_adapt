<?php
namespace Spellabs\Portal\Rest;

class ResponseHeaders implements \ArrayAccess
{
    /** @var string[] */
    private $headers;
    
    public function __construct(array $headers = [])
    {
        $this->setHeaders($headers);
    }
    
    public function getHeaders()
    {
        return $this->headers;
    }
    
    public function getHeader($headerName)
    {
         return $this->headers[$headerName];
    }

    public function setHeaders(array $headers)
    {
        $this->headers = $headers;
        return $this;
    }
    
    private function setHeader(string $headerName, string $headerValue)
    {
        $this->headers[$headerName] = $headerValue;
        return $this;
    }

    public function addHeader(string $headerName, string $headerValue)
    {
        if (in_array($headerName, array_keys($this->getHeaders())))
        {
            $this->setHeader($headerName, $headerValue);
        }
        else
        {
            $this->headers[$headerName] = $headerValue;
        }
    }
    
    public function applyHeaders()
    {
        foreach ($this->headers as $header => $value)
        {
            header($header . ': ' . $value, true);
        }
    }

    public function offsetExists($offset)
    {
        if (isset($this->headers[$offset]) && !empty($this->headers[$offset]))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public function offsetGet($offset)
    {
        return $this->getHeader($offset);
    }

    public function offsetSet($offset, $value): void
    {
        $this->setHeader($offset, $value);
    }

    public function offsetUnset($offset): void
    {
        unset($this->headers[$offset]);
    }

}
