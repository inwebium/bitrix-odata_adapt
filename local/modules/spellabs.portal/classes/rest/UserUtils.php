<?php
namespace Spellabs\Portal\Rest;

class UserUtils
{
    public static function getUserBy($field, $value)
    {
        $by = "id";
        $order = "desc";
        
        $dbResult = CUser::GetList($by, $order, [$field => $value]);
        
        if ($arUser = $dbResult->GetNext())
        {
            return $arUser;
        }
        else
        {
            return [];
        }
    }
    
    
}
