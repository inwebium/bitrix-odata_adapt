<?
/**
 * Некий главный класс модуля
 *
 * @author mikhail.korneev
 */
class CSPMain
{
    private static $Id = 'spellabs.portal';
    
    public static function GetModuleId ()
    {
        return self::$Id;
    }
    
    public static function GetModuleVersion ()
    {
        $arModuleVersion = [];
		include($_SERVER['DOCUMENT_ROOT'] . '/local/modules/' . self::GetModuleId() . '/install/version.php');

		return $arModuleVersion['VERSION'];
    }

    /**
     * Тестовый обработчик, сработает перед выводом визуальной части пролога
     * 
     * @global CMain $APPLICATION
     * @return boolean
     */
    public static function OnPrologHandler() 
    {
        global $APPLICATION; // Если нужно обращаться к методам CMain
        //echo '<h1>FOO</h1>';
       // echo '<script>window.name="test.bitrix.dev10.spellabs.com:8080|0|"</script>';
        return true;
    }
}
