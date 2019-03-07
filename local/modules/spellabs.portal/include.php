<?
global $DB, $MESS, $APPLICATION;


Bitrix\Main\Loader::registerAutoLoadClasses(
    'spellabs.portal', 
    [
        'CSPMain' => 'classes/general/CSPMain.php',
        'CSPHandlers' => 'classes/handlers/CSPHandlers.php',
        'SPEventManager' => 'classes/extend/SPEventManager.php',
    ]
    );

IncludeModuleLangFile(__FILE__);