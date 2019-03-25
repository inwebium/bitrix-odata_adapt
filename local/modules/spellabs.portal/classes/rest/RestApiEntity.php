<?php
namespace Spellabs\Portal\Rest;

abstract class RestApiEntity implements RestApiEntityInterface
{
    /** @var RequestParameters */
    protected $requestParameters;
    
    public abstract function __construct(RequestParameters $requestParameters);
    
    protected function getRequestParameters()
    {
        return $this->requestParameters;
    }
    
    protected function setRequestParameters(RequestParameters $requestParameters)
    {
        $this->requestParameters = $requestParameters;
        
        return $this;
    }

    public abstract function get();
    
    public abstract function post();
    
    public abstract function merge();
    
    public abstract function delete();
}