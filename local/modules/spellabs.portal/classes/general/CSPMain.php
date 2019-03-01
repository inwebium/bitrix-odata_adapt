<?
/**
 * Некий главный класс модуля
 *
 * @author mikhail.korneev
 */
class CSPMain
{
    private static $Id = 'spellabs.portal';
    
    public static function GetModuleId()
    {
        return self::$Id;
    }
    
    public static function GetModuleVersion()
    {
        $arModuleVersion = [];
		include($_SERVER['DOCUMENT_ROOT'] . '/local/modules/' . self::GetModuleId() . '/install/version.php');

		return $arModuleVersion['VERSION'];
    }
}
