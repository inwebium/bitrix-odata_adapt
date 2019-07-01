<?php
namespace Spellabs\Portal\Rest\Entity;

/**
 * Интерфей сущности в rest-api. Обязывает поддерживать методы одноименные 
 * методам запроса (get, post, merge, delete)
 */
interface RestApiEntityInterface
{
    public function get();
    
    public function post();
    
    public function merge(); //PUT???
    
    public function delete();
}