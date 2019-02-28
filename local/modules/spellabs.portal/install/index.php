<?
\Bitrix\Main\Localization\Loc::loadMessages(__FILE__);

if(class_exists("spellabs_portal"))
{
	return;
}

class spellabs_portal extends \CModule
{
	var $MODULE_ID = "spellabs.portal";
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

		$this->MODULE_NAME = GetMessage("SPPORTAL_MODULE_NAME");
		$this->MODULE_DESCRIPTION = GetMessage("SPPORTAL_MODULE_DESCRIPTION");
	}

	function DoInstall()
	{
		global $DOCUMENT_ROOT, $APPLICATION;
        
        /*
         * Так как могут быть установлены/не установлены разные модули, 
         * то нужно сделать проверку на их наличие. Если чего-то будет не 
         * хватать, то наверно нужно либо отдавать ошибку. Или сделать все 
         * универсальней и добавить в таком случае возможность настроить 
         * соответствие инфоблоков сущностям из портала spellabs?
         */
		
		$this->InstallFiles();
		$this->InstallDB();
        $this->InstallEvents();
		
		$APPLICATION->IncludeAdminFile(GetMessage("SPPORTAL_INSTALL_TITLE"), $_SERVER['DOCUMENT_ROOT']."/local/modules/spellabs.portal/install/step.php");
	}

	function InstallFiles()
	{
        // Копирование нужных файлов (компоненты, другие нужные файлы, может .js или какие-нибудь php-библиотеки)
        // Копирование компонентов
        CopyDirFiles(
			$_SERVER["DOCUMENT_ROOT"] . "/local/modules/spellabs.portal/install/components",
			$_SERVER["DOCUMENT_ROOT"] . "/local/components",
			true, true
		);
        
        // Копирование страниц
        CopyDirFiles(
			$_SERVER["DOCUMENT_ROOT"] . "/local/modules/spellabs.portal/install/pages",
			$_SERVER["DOCUMENT_ROOT"] . "",
			true, true
		);
        
		return true;
	}
	
	function InstallDB()
	{
        // Регистрация модуля
		RegisterModule("spellabs.portal");
		// Другие действия с БД, имеющаяся структура битрикса неприкосновенна
		return true;
	}
	
	function InstallEvents()
	{
        // Регистрация обработчиков событий (например "перед выводом пролога", "после сохранения элемента")
        RegisterModuleDependences("main", "OnProlog", "spellabs.portal", "CSPMain", "OnPrologHandler");
		return true;
	}
	
	function DoUninstall()
	{
		global $DOCUMENT_ROOT, $APPLICATION;
		
		$this->UnInstallFiles();
		$this->UnInstallDB();
        $this->UnInstallEvents();
		
		$APPLICATION->IncludeAdminFile(GetMessage("SPPORTAL_UNINSTALL_TITLE"), $_SERVER['DOCUMENT_ROOT']."/local/modules/spellabs.portal/install/unstep.php");
	}
	
	function UnInstallDB()
	{
		UnRegisterModule("spellabs.portal");

		return true;
	}
	
	function UnInstallFiles()
	{
		return true;
	}
	
	function UnInstallEvents()
	{
        UnRegisterModuleDependences("main", "OnProlog", "spellabs.portal", "CSPMain", "OnPrologHandler");
		return true;
	} 
}