<?
Class spellabs_hello extends CModule
{
    var $MODULE_ID = "spellabs.hello";
    var $MODULE_VERSION;
    var $MODULE_VERSION_DATE;
    var $MODULE_NAME;
    var $MODULE_DESCRIPTION;
    var $MODULE_CSS;
    var $PARTNER_NAME;
    var $PARTNER_URI;

    function spellabs_hello()
    {
        $arModuleVersion = [];

        $path = str_replace("\\", "/", __FILE__);
        $path = substr($path, 0, strlen($path) - strlen("/index.php"));
        include($path."/version.php");

        if (is_array($arModuleVersion) && array_key_exists("VERSION", $arModuleVersion))
        {
            $this->MODULE_VERSION = $arModuleVersion["VERSION"];
            $this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
        }

        $this->MODULE_NAME = "Spellabs Hello";
        $this->MODULE_DESCRIPTION = "Simple test module";
        $this->PARTNER_NAME = 'Spellabs';
        $this->PARTNER_URI = 'https://spellabs.ru';
    }

    function DoInstall()
    {
        global $DOCUMENT_ROOT, $APPLICATION;

        RegisterModuleDependences("main", "OnAfterEpilog", $this->MODULE_ID, "CMainSpellabsHello", "OnAfterEpilogHandler");
        RegisterModule($this->MODULE_ID);
        $APPLICATION->IncludeAdminFile("Установка модуля spellabs.hello", $DOCUMENT_ROOT."/local/modules/spellabs.hello/install/step.php");
        return true;
    }

    function DoUninstall()
    {
        global $DOCUMENT_ROOT, $APPLICATION;
        
        UnRegisterModuleDependences("main", "OnAfterEpilog", $this->MODULE_ID, "CMainSpellabsHello", "OnAfterEpilogHandler");
        UnRegisterModule($this->MODULE_ID);
        $APPLICATION->IncludeAdminFile("Деинсталляция модуля spellabs.hello", $DOCUMENT_ROOT."/local/modules/spellabs.hello/install/unstep.php");
        return true;
    }
}