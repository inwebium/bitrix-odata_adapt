<?
class CMainSpellabsHello 
{
    static $MODULE_ID="spellabs.hello";

    static function OnBeforePrologHandler() 
    {
        global $APPLICATION;
        $APPLICATION->throwException(COption::GetOptionString(self::$MODULE_ID, "SIMPLE_TEXT", "DEFAULT MESSAGE IF NOT DEFINED"));
        return true;
    }
}