<?
\Bitrix\Main\Localization\Loc::loadMessages(__FILE__);

if(class_exists("spellabs_controller"))
{
	return;
}

class spellabs_controller extends \CModule
{
	var $MODULE_ID = "spellabs.controller";
	var $MODULE_VERSION;
	var $MODULE_VERSION_DATE;
	var $MODULE_NAME;
	var $MODULE_DESCRIPTION;
	var $MODULE_GROUP_RIGHTS = "N";
    
   	public function __construct()
	{
		$arModuleVersion = array();

		$path = str_replace("\\", "/", __FILE__);
		$path = substr($path, 0, strlen($path) - strlen("/index.php"));
		include($path . "/version.php");

		$this->MODULE_VERSION = $arModuleVersion["VERSION"];
		$this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];

		$this->MODULE_NAME = GetMessage("SPCONTROLLER_MODULE_NAME");
		$this->MODULE_DESCRIPTION = GetMessage("SPCONTROLLER_MODULE_DESCRIPTION");
	}

	function DoInstall()
	{
		global $DOCUMENT_ROOT, $APPLICATION;
		
		$this->InstallFiles();
		$this->InstallDB();
        $this->InstallEvents();
		
		$APPLICATION->IncludeAdminFile(GetMessage("SPCONTROLLER_INSTALL_TITLE"), $_SERVER['DOCUMENT_ROOT']."/local/modules/spellabs.test/install/step.php");
	}

	function InstallFiles()
	{
		return true;
	}
	
	function InstallDB()
	{
		RegisterModule("spellabs.controller");
		
		return true;
	}
	
	function InstallEvents()
	{
		return true;
	}
	
	function DoUninstall()
	{
		global $DOCUMENT_ROOT, $APPLICATION;
		
		$this->UnInstallFiles();
		$this->UnInstallDB();
        $this->UnInstallEvents();
		
		$APPLICATION->IncludeAdminFile(GetMessage("WEBS_UNINSTALL_TITLE"), $_SERVER['DOCUMENT_ROOT']."/local/modules/spellabs.test/install/unstep.php");
	}
	
	function UnInstallDB()
	{
		UnRegisterModule("spellabs.controller");

		return true;
	}
	
	function UnInstallFiles()
	{
		return true;
	}
	
	function UnInstallEvents()
	{
		return true;
	} 
}