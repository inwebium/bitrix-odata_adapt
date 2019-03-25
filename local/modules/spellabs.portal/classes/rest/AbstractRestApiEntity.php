<?php
namespace Spellabs\Portal\Rest;

abstract class AbstractRestApiEntity implements RestApiEntityInterface
{
    /** @var RequestParameters */
    protected $requestParameters;
    
    public function __construct(RequestParameters $requestParameters)
    {
        $this
            ->setRequestParameters($requestParameters)
        ;
    }
    
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