<?
global $DB, $MESS, $APPLICATION;


Bitrix\Main\Loader::registerAutoLoadClasses(
    'spellabs.portal', 
    [
        'CSPMain' => 'classes/general/CSPMain.php',
        'CSPHandlers' => 'classes/handlers/CSPHandlers.php',
        'SPEventManager' => 'classes/extend/SPEventManager.php',
        'Spellabs\Portal\Rest\ParenthesesParser' => 'classes/rest/ParenthesesParser.php',
        'Spellabs\Portal\Rest\RestApiEntityInterface' => 'classes/rest/RestApiEntityInterface.php',
        'Spellabs\Portal\Rest\AbstractRestApiEntity' => 'classes/rest/AbstractRestApiEntity.php',
        'Spellabs\Portal\Rest\AbstractIblockEntity' => 'classes/rest/AbstractIblockEntity.php',
        'Spellabs\Portal\Rest\RequestFilterParser' => 'classes/rest/RequestFilterParser.php',
        'Spellabs\Portal\Rest\RequestParser' => 'classes/rest/RequestParser.php',
        'Spellabs\Portal\Rest\RequestRouter' => 'classes/rest/RequestRouter.php',
        'Spellabs\Portal\Rest\RequestParameters' => 'classes/rest/RequestParameters.php',
        'Spellabs\Portal\Rest\RequestHandler' => 'classes/rest/RequestHandler.php',
        'Spellabs\Portal\Rest\ResponseHeaders' => 'classes/rest/ResponseHeaders.php',
        'Spellabs\Portal\Rest\ResponseBody' => 'classes/rest/ResponseBody.php',
        'Spellabs\Portal\Rest\ResponseHandler' => 'classes/rest/ResponseHandler.php',
    ]
    );

IncludeModuleLangFile(__FILE__);