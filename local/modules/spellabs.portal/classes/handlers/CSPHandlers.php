<?
/**
 * Пусть здесь будут общие обработчики событий.
 * Если их нужно много, то лучше разнести по разным классам по привязкам к модулям.
 * Например обработчик событий модуля main в CSPHandlersMain, для crm в CSPHandlersCrm и т.д.
 *
 * @author mikhail.korneev
 */
class CSPHandlers
{
    /**
     * Обработчик для OnProlog. Проверит URI запроса, если начинается с /bitrix 
     * или /portal то пройдет как обычно, иначе - редирект на /portal/
     * 
     * @todo В дальнейшем нужно будет учесть моменты связанные с ajax
     * @return boolean
     */
    public static function OnPrologHandler()
    {
        $requestUri = $_SERVER['REQUEST_URI'];
        
        $isBitrixUri = strpos($requestUri, '/bitrix') === 0;
        $isPortalUri = strpos($requestUri, '/portal') === 0;
        $isLocalUri  = strpos($requestUri, '/local')  === 0;
        
        if ($isBitrixUri || $isPortalUri || $isLocalUri || empty($requestUri))
        {
            return true;
        }
        else
        {
            LocalRedirect('/portal/');
        }
        
    }
}
