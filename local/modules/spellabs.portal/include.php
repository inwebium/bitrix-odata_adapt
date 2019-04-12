<?
global $DB, $MESS, $APPLICATION;

$classesMap = [
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
    'Spellabs\Portal\Rest\IblockUtils' => 'classes/rest/IblockUtils.php',
    'Spellabs\Portal\Rest\AssociativeReplacer' => 'classes/rest/AssociativeReplacer.php',
    'Spellabs\Portal\Rest\RepositoryGenerator' => 'classes/rest/RepositoryGenerator.php'
];

$restRepository = scandir($_SERVER['DOCUMENT_ROOT'] . '/local/modules/spellabs.portal/classes/rest/Repository');

foreach ($restRepository as $key => $value)
{
    $pathinfo = pathinfo($value);
    
    if ($pathinfo['extension'] == 'php') {
        $className = "Spellabs\\Portal\\Rest\\Repository\\" . $pathinfo['filename'];
        $classPath = 'classes/rest/Repository/' . $pathinfo['basename'];
        
        $classesMap[$className] = $classPath;
    }
}
    


Bitrix\Main\Loader::registerAutoLoadClasses(
    'spellabs.portal', 
    $classesMap
    );

IncludeModuleLangFile(__FILE__);