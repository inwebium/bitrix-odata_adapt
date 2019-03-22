<?php
namespace Spellabs\Portal\Rest;

interface RestApiEntityInterface
{
    public function get();
    
    public function post();
    
    public function merge();
    
    public function delete();
}