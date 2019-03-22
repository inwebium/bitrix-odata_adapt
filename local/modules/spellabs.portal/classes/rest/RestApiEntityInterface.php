<?php
namespace Spellabs\Portal\Rest;

interface RestApiEntityInterface
{
    public function get();
    
    public function post();
    
    public function put();
    
    public function delete();
}