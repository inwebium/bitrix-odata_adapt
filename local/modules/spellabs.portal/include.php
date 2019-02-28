<?
global $DB, $MESS, $APPLICATION;

CModule::AddAutoloadClasses(
	"spellabs.portal",
	[
        "CSPMain" => "classes/general/CSPMain.php",
    ]
);

IncludeModuleLangFile(__FILE__);