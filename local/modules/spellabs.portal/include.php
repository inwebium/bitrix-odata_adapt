<?
global $DB, $MESS, $APPLICATION;

CModule::AddAutoloadClasses(
	"spellabs.portal",
	[
        "CSPMain" => "classes/general/CSPMain.php",
        'SPEventManager' => 'classes/extend/SPEventManager.php',
    ]
);

IncludeModuleLangFile(__FILE__);