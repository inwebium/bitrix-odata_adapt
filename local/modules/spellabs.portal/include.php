<?
global $DB, $MESS, $APPLICATION;

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

$classesMap = [
    'CSPMain' => 'classes/general/CSPMain.php',
    'CSPHandlers' => 'classes/handlers/CSPHandlers.php',
    'SPEventManager' => 'classes/extend/SPEventManager.php',
];

$restCodebase = scandir($_SERVER['DOCUMENT_ROOT'] . '/local/modules/spellabs.portal/classes/rest');
$restClassesMap = [];
$restClassesMap = scanFolder(
    $_SERVER['DOCUMENT_ROOT'] . '/local/modules/spellabs.portal/classes/rest', 
    "Spellabs\\Portal\\Rest\\",
    'classes/rest/'
);

$classesMap = $classesMap + $restClassesMap;

Bitrix\Main\Loader::registerAutoLoadClasses(
    'spellabs.portal', 
    $classesMap
    );

IncludeModuleLangFile(__FILE__);