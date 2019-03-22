<?php
namespace Spellabs\Portal\Rest;

abstract class RestApiEntity implements RestApiEntityInterface
{
    public abstract function __construct();
    
    public abstract function get();
    
    public abstract function post();
    
    public abstract function merge();
    
    public abstract function delete();
}