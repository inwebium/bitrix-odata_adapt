<?

/**
 * Description of SPEventManager
 *
 * @author mikhail.korneev
 */
class SPEventManager extends \Bitrix\Main\EventManager
{
    public static function getInstance()
    {
        if (!isset(self::$instance))
        {
            $c = __CLASS__;
            self::$instance = new $c;
        }

        return self::$instance;
    }
    
    public function findEventsHandlers(array $filter = null)
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
