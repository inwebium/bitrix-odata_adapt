<?php
namespace Spellabs\Portal\Rest;

class ResponseHeaders implements \ArrayAccess
{
    /** @var string[] */
    private $headers;
    
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
    
    public function setHeader(string $headerName, string $headerValue)
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

    public function offsetExists($offset): bool
    {
        if (isset($this->headers) && !empty($this->headers))
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
