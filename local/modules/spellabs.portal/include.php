<?
global $DB, $MESS, $APPLICATION;


Bitrix\Main\Loader::registerAutoLoadClasses(
    'spellabs.portal', 
    [
        'CSPMain' => 'classes/general/CSPMain.php',
        'CSPHandlers' => 'classes/handlers/CSPHandlers.php',
        'SPEventManager' => 'classes/extend/SPEventManager.php',
        'Spellabs\Portal\Rest\RestApiEntityInterface' => 'classes/rest/RestApiEntityInterface.php',
        'Spellabs\Portal\Rest\RestApiEntity' => 'classes/rest/RestApiEntity.php',
        'Spellabs\Portal\Rest\RequestParser' => 'classes/rest/RequestParser.php',
        'Spellabs\Portal\Rest\RequestRouter' => 'classes/rest/RequestRouter.php',
        'Spellabs\Portal\Rest\RequestHandler' => 'classes/rest/RequestHandler.php',
    ]
    );

IncludeModuleLangFile(__FILE__);