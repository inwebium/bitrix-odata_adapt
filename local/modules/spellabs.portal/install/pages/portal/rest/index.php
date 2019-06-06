<?
header('Access-Control-Allow-Origin: *');
define("STOP_STATISTICS", true);
define("NO_KEEP_STATISTIC", 'Y');
define("NO_AGENT_STATISTIC",'Y');
define("NO_AGENT_CHECK", true);
define("NOT_CHECK_PERMISSIONS", true);
define("NEED_AUTH", false);
define("PUBLIC_AJAX_MODE", true);

require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');
set_time_limit(0);
global $USER;
$USER ->Authorize(1);
//header('Access-Control-Allow-Origin: https://www.example.com');
/*use Bitrix\Main\Application;
$request = Application::getInstance()->getContext()->getRequest();
var_dump($request->getRequestMethod());
var_dump($request->isAjaxRequest());*/

CModule::IncludeModule("iblock");
CModule::IncludeModule("spellabs.portal");
/*
function scanFolder($folder, $namespace, $classpath)
{
    $classesMap = [];
    $dir = scandir($folder);
    
    foreach ($dir as $key => $item)
    {
        $fullPath = $folder . '/' . $item;

        if (is_file($fullPath) && pathinfo($fullPath)['extension'] == 'php') {
            $className = $namespace . pathinfo($fullPath)['filename'];
            $classPath = $classpath . $item;
            
            $classesMap[$className] = $classPath;
        }
        
        if (is_dir($fullPath) && !in_array($item, ['.', '..'])) {
            $subMap = scanFolder(
                $fullPath, 
                $namespace . $item . "\\", 
                $classpath . $item . '/'
            );
            
            $classesMap = $classesMap + $subMap;
        }
    }
    
    return $classesMap;
}

$restCodebase = scandir($_SERVER['DOCUMENT_ROOT'] . '/local/modules/spellabs.portal/classes/rest');
$classesMap = [];

$classesMap = scanFolder(
    $_SERVER['DOCUMENT_ROOT'] . '/local/modules/spellabs.portal/classes/rest', 
    "Spellabs\\Portal\\Rest\\",
    'classes/rest/'
);
var_dump($classesMap);

die();*/
/*$dateTimeObj = new DateTime('2019-04-15T07:02:53.458Z');

var_dump($dateTimeObj);
var_dump($dateTimeObj->format(DateTime::ISO8601));

die();*/

use Spellabs\Portal\Rest\AbstractIblockEntity;
use Spellabs\Portal\Rest\RequestHandler;
use Spellabs\Portal\Rest\ResponseHandler;
/*use Spellabs\Portal\Rest\ParenthesesParser;
use Spellabs\Portal\Rest\Repository;*/

/*$classesMap = [];

$restRepository = scandir($_SERVER['DOCUMENT_ROOT'] . '/local/modules/spellabs.portal/classes/rest/Repository');

var_dump($restRepository);

foreach ($restRepository as $key => $value)
{
    $pathinfo = pathinfo($value);
    
    if ($pathinfo['extension'] == 'php') {
        $className = "Spellabs\\Portal\\Rest\\Repository\\" . $pathinfo['filename'];
        $classPath = 'classes/rest/Repository/' . $pathinfo['basename'];
        
        $classesMap[$className] = $classPath;
    }
}

var_dump($classesMap);

die();*/



/*$postData = file_get_contents('php://input');

var_dump($postData);
die();*/

//$string = '(a and b((2-0(3-0)2-1)1-0(3-1))0-1)';
//$string = '((ACTIVE[eq]=Y;NAME[ne]=\'SOME STRING\'),ID[ge]=10;ID[le]=20,ID[eq]=22)';

//$string = '((slToUserId eq 41 or slToUserId eq 16 or slToUserId eq 61 or slToUserId eq 30 or slToUserId eq 11 or slToUserId eq 40 or slToUserId eq 8 or slToUserId eq 51 or slToUserId eq 16 or slToUserId eq 15 ) and slThanksTypeLookup/Id ne null)';
/*$p = new ParenthesesParser();
$result = $p->parse($string);*/
//var_dump($result);

/*var_dump($result);

$arNodes = aaa($result);
var_dump($arNodes);*/
/*$arNodes = aaa($result);
var_dump($arNodes);

$arFilter = buildFilter($arNodes);
print_r($arFilter);*/

//array_walk_recursive($result, 'foo');
//var_dump($result);

/*$res = CIBlockElement::GetList(['ID' => 'DESC'], [
    [
        'LOGIC' => 'OR',
        ['ID' => 10, 'NAME' => 'ONE'],
        [
            'LOGIC' => 'AND',
            ['ID' => 14, 'NAME' => 'THREE']
        ]
    ]
], false, false, ['IBLOCK_ID', 'ID', 'NAME', 'CODE']);

while ($arItem = $res->GetNext())
{
    var_dump($arItem);
}*/




/*class IblocksNews extends AbstractIblockEntity
{
    
}*/

$requestHandler = new RequestHandler('/_api/web/');

/*var_dump($requestHandler->getRequestRouter()->getRequestMethod());

var_dump($requestHandler->instantiateRequestClass()->getRequestObject());

var_dump($requestHandler->getRequestParameters());*/

$arResult = $requestHandler->instantiateRequestClass()->callRequestMethod();

$responseHandler = new ResponseHandler(['Content-Type' => 'application/json; charset=utf-8']);

$className = get_class($requestHandler->getRequestObject());
    
$associations = $className::$propertiesAssoc + $className::$fieldsAssoc;

$responseHandler->getBodyHandler()->setAssociations($associations)->setBody($arResult);

//echo "\n\nBODY:\n";
/*$responseHandler->getHeadersHandler()->applyHeaders();

$responseHandler->
echo($responseHandler->getBodyHandler()->getBody());*/

$responseHandler->send();

//$USER->Authorize(1);
/*echo "\n\nUserID=\n";
echo $USER->GetID();
echo "\n\n";*/

/*$polls = new IblockPolls(148);
$polls->GetAll();*/

/*$dateTimeObj = new DateTime('2019-03-26T06:58:24.060Z');

var_dump($dateTimeObj->format(DateTime::ISO8601));*/

//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");