<?
global $DB, $MESS, $APPLICATION;


Bitrix\Main\Loader::registerAutoLoadClasses(
    'spellabs.portal', 
    [
        'CSPMain' => 'classes/general/CSPMain.php',
        'CSPHandlers' => 'classes/handlers/CSPHandlers.php',
        'SPEventManager' => 'classes/extend/SPEventManager.php',
        'Spellabs\Portal\Rest\RestApiIblockInterface' => 'classes/rest/RestApiIblockInterface.php',
        'Spellabs\Portal\Rest\RestApiIblock' => 'classes/rest/RestApiIblock.php',
        'Spellabs\Portal\Rest\RequestParser' => 'classes/rest/RequestParser.php',
        'Spellabs\Portal\Rest\RequestRouter' => 'classes/rest/RequestRouter.php',
        'Spellabs\Portal\Rest\RequestHandler' => 'classes/rest/RequestHandler.php',
    ]
    );

IncludeModuleLangFile(__FILE__);