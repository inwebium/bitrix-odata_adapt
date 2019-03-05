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
    var $PARTNER_NAME;
    var $PARTNER_URI;
    
   	public function __construct()
	{
		$arModuleVersion = array();
		
		include($this->GetPath() . "/version.php");

		$this->MODULE_VERSION = $arModuleVersion["VERSION"];
		$this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];

		$this->MODULE_NAME = GetMessage("SPPORTAL_MODULE_NAME");
		$this->MODULE_DESCRIPTION = GetMessage("SPPORTAL_MODULE_DESCRIPTION");
        
        $this->PARTNER_NAME = 'Spellabs';
        $this->PARTNER_URI = 'https://spellabs.ru';
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
    
    /**
     * Копирование нужных файлов (компоненты, другие нужные файлы, 
     * может .js или какие-нибудь php-библиотеки)
     * 
     * @return boolean
     */
	function InstallFiles()
	{
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
        
        // Копирование js-скриптов
        CopyDirFiles(
			$_SERVER["DOCUMENT_ROOT"] . "/local/modules/spellabs.portal/install/js",
			$_SERVER["DOCUMENT_ROOT"] . "/local/js",
			true, true
		);
        
        //Добавление правила в urlrewrire
        CUrlRewriter::Add([
            'CONDITION' => '#(.*)#',
            'RULE' => '',
            'ID' => '',
            'PATH' => '/portal/index.php',
            'SORT' => 1,
        ]);
        
		return true;
	}
	
    /**
     * Регистрация модуля и прочие действия с БД
     * 
     * @return boolean
     */
	function InstallDB()
	{
		RegisterModule("spellabs.portal");
        
        if (!CModule::IncludeModule("iblock"))
        {
            die();
        }
        
        $this->CreateIblockType();
        $this->CreateIblocks();
        $this->CreateProperties();
        $this->SetupEditForms();
        $this->SetupUserFields();
        
		return true;
	}
	
    /**
     * Регистрация обработчиков событий (например "перед выводом пролога", "после сохранения элемента")
     * 
     * @return boolean
     */
	function InstallEvents()
	{
        RegisterModuleDependences("main", "OnProlog", "spellabs.portal", "CSPHandlers", "OnPrologHandler");
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
	
    /**
     * Действия с БД при удалении модуля
     * 
     * @return boolean
     */
	function UnInstallDB()
	{
        global $DB;
        UnRegisterModule("spellabs.portal");
        
        // Удалим тип инфоблоков spellabs, за ним удалятся и все связанные инфоблоки
        $DB->StartTransaction();
        
        if(!CIBlockType::Delete('spellabs'))
        {
            $DB->Rollback();
            echo "\nERROR: Failed to delete Iblock type = spellabs\n\n";
        }
        $DB->Commit();
        
        $this->DeleteUserFields();
        
		return true;
	}
	
    /**
     * Действия с файловой структурой при удалении модуля
     * 
     * @todo Добавить удаление установленных файлов
     * @return boolean
     */
	function UnInstallFiles()
	{
        
        CUrlRewriter::Delete([
            'SITE_ID' => 's1',
            'CONDITION' => '#(.*)#',
            'ID' => '',
            'PATH' => '/portal/index.php',
        ]);
        
		return true;
	}
	
    /**
     * Удаление зарегистрированных обработчиков событий
     * 
     * @return boolean
     */
	function UnInstallEvents()
	{
        // Для уверенности сейчас думаю нужно оставлять все удаления обработчиков
        // На время разработки
        UnRegisterModuleDependences("main", "OnProlog", "spellabs.portal", "CSPMain", "OnPrologHandler");
        UnRegisterModuleDependences("main", "OnBeforeProlog", "spellabs.portal", "CSPHandlers", "OnBeforePrologHandler");
        UnRegisterModuleDependences("main", "OnPageStart", "spellabs.portal", "CSPHandlers", "OnPageStartHandler");
        UnRegisterModuleDependences("main", "OnProlog", "spellabs.portal", "CSPHandlers", "OnPrologHandler");
		return true;
	}
    
    /**
     * Возвращает путь к текущему файлу
     * 
     * @return string Абсолютный путь к файлу
     */
    private function GetPath()
    {
        $path = str_replace("\\", "/", __FILE__);
		$path = substr($path, 0, strlen($path) - strlen("/index.php"));
        return $path;
    }
  
    /**
     * Создаст тип инфоблоков
     * 
     * @global CDatabase $DB
     * @return bool
     */
    private function CreateIblockType()
    {
        global $DB;
        $slIblockType = new CIBlockType;
        $arIblockTypeFields = [
            'ID' => 'spellabs',
            'SECTIONS' => 'Y',
            'IN_RSS' => 'N',
            'SORT' => 1,
            'LANG' => [
                'ru' => [
                    'NAME' => 'Spellabs',
                    'SECTION_NAME' => 'Разделы',
                    'ELEMENT_NAME' => 'Элементы',
                ],
                'en' => [
                    'NAME' => 'Spellabs',
                    'SECTION_NAME' => 'Sections',
                    'ELEMENT_NAME' => 'Elements',
                ],
            ],
        ];
        
        $DB->StartTransaction();

        $result = $slIblockType->Add($arIblockTypeFields);

        if (!$result)
        {
            $DB->Rollback();
            echo "\nERROR (CreateIblockType): " . $slIblockType->LAST_ERROR . "\n\n";
            die();
        }
        else
        {
            $DB->Commit();
            return $result;
        }
    }
    
    /**
     * Создаст инфоблоки из конфига conf/iblock.json
     * 
     * @global CDatabase $DB
     */
    private function CreateIblocks()
    {
        global $DB;
        $arIblocksParams = json_decode(file_get_contents($this->GetPath() . "/conf/iblock.json"), true);

        foreach ($arIblocksParams as $iblockCode => $iblockParams)
        {
            $newIblock = new CIBlock;
            $iblockParams['IBLOCK_TYPE_ID'] = 'spellabs';
            $iblockParams['CODE'] = $iblockCode;

            $DB->StartTransaction();

            $result = $newIblock->Add($iblockParams);

            if (!$result)
            {
                $DB->Rollback();
                echo "\nERROR (CreateIblocks): " . $newIblock->LAST_ERROR . "\n\n";
            }
            else
            {
                $DB->Commit();
            }
        }
    }
    
    /**
     * Создаст свойства инфоблоков из конфига conf/property.json
     * 
     * @global CDatabase $DB
     */
    private function CreateProperties()
    {
        global $DB;
        $arIblocksProperties = json_decode(file_get_contents($this->GetPath() . "/conf/property.json"), true);

        foreach ($arIblocksProperties as $iblockCode => $arProperties)
        {
            $iblockId = $this->GetIblockId($iblockCode);
            foreach ($arProperties as $propertyCode => $arProperty)
            {
                $newProperty = new CIBlockProperty;
                $arProperty['CODE'] = $propertyCode;
                $arProperty['IBLOCK_ID'] = $iblockId;
                
                $DB->StartTransaction();

                $result = $newProperty->Add($arProperty);

                if (!$result)
                {
                    $DB->Rollback();
                    echo "\nERROR (CreateProperties): " . $newProperty->LAST_ERROR . "\n\n";
                }
                else
                {
                    $DB->Commit();
                }
            }
        }
    }
    
    /**
     * Настроит формы редактирования элементов инфоблоков по конфигу conf/editform.json
     * 
     */
    private function SetupEditForms()
    {
        $editFormsSettings = json_decode(file_get_contents($this->GetPath() . "/conf/editform.json"), true);
        
        foreach ($editFormsSettings as $iblockCode => $arFormSettings)
        {
            $iblockId = $this->GetIblockId($iblockCode);
            
            $arCreatedProperties = [];
            $resProperties = CIBlockProperty::GetList(['SORT' => 'ASC', 'NAME' => 'ASC'], ['IBLOCK_ID' => $iblockId]);
            while ($arProperty = $resProperties->GetNext())
            {
                $arCreatedProperties[] = 'PROPERTY_' . $arProperty['ID'] . '--#--' . $arProperty['NAME'];
            }
            
            $strFields = [];
            
            foreach ($arFormSettings as $tabKey => $arTabSettings)
            {
                $arFields = [];
                
                foreach ($arTabSettings as $code => $name)
                {
                    $arFields[] = $code . '--#--' . $name;
                }
                
                $arStrFields = array_merge($arFields, $arCreatedProperties);
                
                $strFields[] = implode('--,--', $arStrFields);
                
            }
            
            $arSettings = ['tabs' => implode('--;--', $strFields) . '--;--'];

            // Применяем настройки для всех пользователей
            $result = CUserOptions::SetOption("form", "form_element_".$iblockId, $arSettings, true, false);
        }
    }
    
    /**
     * Метод вернет id инфоблока по его символьному коду
     * 
     * @param string $iblockCode Символьный код инфоблока
     * @return int ID инфоблока
     */
    private function GetIblockId($iblockCode)
    {
        $result = 0;
        
        $resIblock = CIBlock::GetList(['ID' => 'DESC'], ['CODE' => $iblockCode], false);
        
        if ($arIblock = $resIblock->GetNext())
        {
            $result = intval($arIblock['ID']);
        }
        
        return $result;
    }
    
    /**
     * Создание пользовательских полей (свойства пользователей, разделов инфоблоков)
     * 
     * @global CDatabase $DB
     */
    private function SetupUserFields()
    {
        global $DB;
        $arUserFields = json_decode(file_get_contents($this->GetPath() . "/conf/userfield.json"), true);
        
        foreach ($arUserFields as $fieldName => $arSettings)
        {
            $newUserField = new CUserTypeEntity();
            $arSettings['FIELD_NAME'] = $fieldName;
            
            $regExpMatches = [];
            
            if (preg_match('/#([a-zA-Z0-9_]*)#/', $arSettings['ENTITY_ID'], $regExpMatches))
            {
                $arSettings['ENTITY_ID'] = str_replace($regExpMatches[0], GetIblockId($regExpMatches[1]), $arSettings['ENTITY_ID']);
            }
            
            $regExpMatches = [];
            
            if (isset($arSettings['SETTINGS']['IBLOCK_ID']) && preg_match('/^#([a-zA-Z0-9_]*)#$/', $arSettings['SETTINGS']['IBLOCK_ID'], $regExpMatches))
            {
                $arSettings['SETTINGS']['IBLOCK_ID'] = str_replace(
                    $regExpMatches[0], 
                    $this->GetIblockId($regExpMatches[1]), 
                    $arSettings['SETTINGS']['IBLOCK_ID']
                    );
            }
            
            $DB->StartTransaction();

            $result = $newUserFieldId = $newUserField->Add($arSettings);

            if (!$result)
            {
                $DB->Rollback();
                echo "\nERROR (SetupUserFields " . $fieldName . "): " . $newProperty->LAST_ERROR . "\n\n";
            }
            else
            {
                $DB->Commit();
            }
        }
    }
    
    /**
     * Удалит пользовательские поля согласно conf/userfield.json
     * 
     * @global CDatabase $DB
     */
    private function DeleteUserFields()
    {
        global $DB;
        $arUserFields = json_decode(file_get_contents($this->GetPath() . "/conf/userfield.json"), true);
        $userTypeEntity = new CUserTypeEntity();
        
        foreach ($arUserFields as $fieldName => $arSettings)
        {
            $userFieldEntity = CUSerTypeEntity::GetList(['ID' => 'ASC'], ['FIELD_NAME' => $fieldName]);
            
            if ($arUserField = $userFieldEntity->GetNext())
            {
                $DB->StartTransaction();

                $result = $userTypeEntity->Delete($arUserField['ID']);

                if (!$result)
                {
                    $DB->Rollback();
                    echo "\nERROR (DeleteUserFields " . $fieldName . "): " . $userTypeEntity->LAST_ERROR . "\n\n";
                }
                else
                {
                    $DB->Commit();
                }
            }
        }      
    }
}
