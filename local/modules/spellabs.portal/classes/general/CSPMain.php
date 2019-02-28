<?
/**
 * Некий главный класс модуля
 *
 * @author mikhail.korneev
 */
class CSPMain
{
    
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
