<?
namespace Spellabs\Portal\Extend;

/**
 * Description of SPEventManager
 *
 * @author mikhail.korneev
 */
class SPEventManager extends \Bitrix\Main\EventManager
{
    public function findEventHandlers(array $filter = null)
    {
        if (!$this->isHandlersLoaded)
        {
            $this->loadEventHandlers();
        }
        
        $arHandlers = $this->handlers;
        
        if (is_array($filter) && count($filter) > 0)
        {
            foreach ($arHandlers as $eventModuleId => $arEventTypes)
            {
                foreach ($arEventTypes as $eventType => $handlers)
                {
                    foreach ($handlers as $key => $handler)
                    {
                        if (!in_array($handler['TO_MODULE_ID'], $filter))
                        {
                            unset($arHandlers[$eventModuleId][$eventType][$key]);
                        }
                    }
                     
                }
            }
        }

        return $handlers;
    }
}
