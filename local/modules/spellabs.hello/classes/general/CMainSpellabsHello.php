<?
class CMainSpellabsHello 
{
    static $MODULE_ID="spellabs.hello";

    static function OnAfterEpilogHandler() 
    {
        echo '<h1>' . COption::GetOptionString(self::$MODULE_ID, "SIMPLE_TEXT", "DEFAULT MESSAGE IF NOT DEFINED") . '</h1>';
        return true;
    }
}