<?
global $DB, $MESS, $APPLICATION;

$arJsConfig = [
    'prop_usersgroups' => [
        'js' => '/local/js/spellabs/property.usersgroups.js',
        'css' => '/local/js/spellabs/css/property.usersgroups.css',
        ]
]; 

foreach ($arJsConfig as $ext => $arExt) { 
    \CJSCore::RegisterExt($ext, $arExt); 
}

Bitrix\Main\Loader::registerAutoLoadClasses(
    'spellabs.portal', 
    [
        'CSPMain' => 'classes/general/CSPMain.php',
        'CSPHandlers' => 'classes/handlers/CSPHandlers.php',
        'SPEventManager' => 'classes/extend/SPEventManager.php',
        'PropertyUsers' => 'classes/general/PropertyUsers.php'
    ]
    );

IncludeModuleLangFile(__FILE__);