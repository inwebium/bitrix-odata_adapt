<?
CModule::IncludeModule("spellabs.hello");
global $DBType;

$arClasses=array(
    'CMainSpellabsHello'=>'classes/general/CMainSpellabsHello.php'
);

CModule::AddAutoloadClasses("spellabs.hello", $arClasses);
