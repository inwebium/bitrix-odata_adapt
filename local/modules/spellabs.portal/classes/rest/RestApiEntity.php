<?php
namespace Spellabs\Portal\Rest;

abstract class RestApiEntity implements RestApiEntityInterface
{
    private $requestParameters;
    
    public abstract function __construct(RequestParameters $requestParameters);
    
    private function getRequestParameters()
    {
        return $this->requestParameters;
    }
    
    private function setRequestParameters(RequestParameters $requestParameters)
    {
        $this->requestParameters = $requestParameters;
        
        return $this;
    }

    public abstract function get();
    
    public abstract function post();
    
    public abstract function merge();
    
    public abstract function delete();
}