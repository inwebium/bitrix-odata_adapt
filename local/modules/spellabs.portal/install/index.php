<?
\Bitrix\Main\Localization\Loc::loadMessages(__FILE__);

if(class_exists("spellabs_portal"))
{
	return;
}

//include('../classes/rest/RepositoryGenerator.php');

//echo file_get_contents('../classes/rest/RepositoryGenerator.php');

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

	function DoInstall(bool $isShell = false)
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
        $this->generateRestRepository();
        $this->fillFixtures();
        $this->InstallEvents();
        
        
		
        if (!$isShell)
        {
            $APPLICATION->IncludeAdminFile(GetMessage("SPPORTAL_INSTALL_TITLE"), $_SERVER['DOCUMENT_ROOT']."/local/modules/" . $this->MODULE_ID . "/install/step.php");
        }
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
			$_SERVER["DOCUMENT_ROOT"] . "/local/modules/" . $this->MODULE_ID . "/install/components",
			$_SERVER["DOCUMENT_ROOT"] . "/local/components",
			true, true
		);
        
        // Копирование страниц
        CopyDirFiles(
			$_SERVER["DOCUMENT_ROOT"] . "/local/modules/" . $this->MODULE_ID . "/install/pages",
			$_SERVER["DOCUMENT_ROOT"] . "",
			true, true
		);
        
        // Копирование js-скриптов
        CopyDirFiles(
			$_SERVER["DOCUMENT_ROOT"] . "/local/modules/" . $this->MODULE_ID . "/install/js",
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
		RegisterModule($this->MODULE_ID);
        
        if (!CModule::IncludeModule("iblock"))
        {
            die();
        }
        
        $this->CreateIblockType();
        $this->CreateIblocks();
        $this->CreateProperties();
        $this->SetupEditForms();
        $this->SetupUserFields();
        $this->setupUserEntity();
        
		return true;
	}
	
    /**
     * Регистрация обработчиков событий (например "перед выводом пролога", "после сохранения элемента")
     * 
     * @return boolean
     */
	function InstallEvents()
	{
        RegisterModuleDependences("main", "OnProlog", $this->MODULE_ID, "CSPHandlers", "OnPrologHandler");
		return true;
	}
	
	function DoUninstall(bool $isShell = false)
	{
		global $DOCUMENT_ROOT, $APPLICATION;
		
		$this->UnInstallFiles();
		$this->UnInstallDB();
        $this->UnInstallEvents();
		
        if (!$isShell)
        {
            $APPLICATION->IncludeAdminFile(GetMessage("SPPORTAL_UNINSTALL_TITLE"), $_SERVER['DOCUMENT_ROOT']."/local/modules/" . $this->MODULE_ID . "/install/unstep.php");
        }
	}
	
    /**
     * Действия с БД при удалении модуля
     * 
     * @return boolean
     */
	function UnInstallDB()
	{
        global $DB;
        UnRegisterModule($this->MODULE_ID);
        
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
     * @todo Добавить удаления сгенерированного репозитория
     * @return boolean
     */
	function UnInstallFiles()
	{
        DeleteDirFiles(
            $_SERVER["DOCUMENT_ROOT"] . "/local/modules/" . $this->MODULE_ID . "/install/js", 
            $_SERVER["DOCUMENT_ROOT"] . "/local/js", 
            array("index.php")
        );
        
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
        UnRegisterModuleDependences("main", "OnProlog", $this->MODULE_ID, "CSPMain", "OnPrologHandler");
        UnRegisterModuleDependences("main", "OnBeforeProlog", $this->MODULE_ID, "CSPHandlers", "OnBeforePrologHandler");
        UnRegisterModuleDependences("main", "OnPageStart", $this->MODULE_ID, "CSPHandlers", "OnPageStartHandler");
        UnRegisterModuleDependences("main", "OnProlog", $this->MODULE_ID, "CSPHandlers", "OnPrologHandler");
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
     * @global CCacheManager $CACHE_MANAGER
     * @return bool
     */
    private function CreateIblockType()
    {
        global $DB, $CACHE_MANAGER;
        
        $CACHE_MANAGER->cleanDir("b_iblock_type");
        $resIblockType = CIBlockType::GetByID('spellabs');
        
        if ($resIblockType->GetNext())
        {
            echo "\nNOTICE (CreateIblockType): IBlockType spellabs already exists\n\n";
        }
        else
        {
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
                $CACHE_MANAGER->cleanDir("b_iblock_type");
                return $result;
            }
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
            
            $iblockParams['CODE'] = $iblockCode;
            
            if (empty($iblockParams['IBLOCK_TYPE_ID'])) {
                $iblockParams['IBLOCK_TYPE_ID'] = 'spellabs';
            }

            $arPermissions = $iblockParams['PERMISSIONS'];
            unset($iblockParams['PERMISSIONS']);

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
                CIBlock::SetPermission($result, $arPermissions);
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
                if (!isset($arProperty['PROPERTY_TYPE']) && !isset($arProperty['NAME'])) {
                    continue;
                }
            
                $newProperty = new CIBlockProperty;
                $arProperty['CODE'] = $propertyCode;
                $arProperty['IBLOCK_ID'] = $iblockId;
                
                // если свойство из конфига - привязка к элементам (E)
                if ($arProperty['PROPERTY_TYPE'] == 'E') {
                    // то берем LINK_IBLOCK_CODE и заменяем на 
                    // LINK_IBLOCK_ID с Id соответствующего по коду инфоблока
                    $linkedIblockId = $this->GetIblockId($arProperty['LINK_IBLOCK_CODE']);
                    unset($arProperty['LINK_IBLOCK_CODE']);
                    $arProperty['LINK_IBLOCK_ID'] = $linkedIblockId;
                }
                
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
                $arSettings['ENTITY_ID'] = str_replace(
                    $regExpMatches[0], 
                    $this->GetIblockId($regExpMatches[1]), 
                    $arSettings['ENTITY_ID']
                    );
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
                echo "\nERROR (SetupUserFields " . $fieldName . "): " . $newUserField->LAST_ERROR . "\n\n";
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
    
    /**
     * Генерирует репозиторий для rest-сущностей: классы иноблоков 
     * и полей фалов и привязок
     */
    private function generateRestRepository()
    {
        //include($this->GetPath() . '/../classes/rest/RepositoryGenerator.php');
        // echo "\n\n" . $this->GetPath() . "\n\n";
        // echo file_get_contents($this->GetPath() . '/../classes/rest/RepositoryGenerator.php');
        Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\IblockUtils' => '/local/modules/spellabs.portal/classes/rest/IblockUtils.php',
                'Spellabs\Portal\Rest\RepositoryGenerator' => '/local/modules/spellabs.portal/classes/rest/RepositoryGenerator.php',
            ]
        );
        
        $repository = new Spellabs\Portal\Rest\RepositoryGenerator();
        $arIblocksParams = json_decode(
            file_get_contents($this->GetPath() . "/conf/iblock.json"), true
        );
        $arIblocksProps = json_decode(
            file_get_contents($this->GetPath() . "/conf/property.json"), true
        );
        
        foreach ($arIblocksParams as $iblockCode => $iblockParams)
        {
            $repository->setTemplate($this->GetPath() . '/../classes/rest/Repository/IblocksClass.php.tpl');
            
            $createdIblock = Spellabs\Portal\Rest\IblockUtils::getIblockBy(
                'code', 
                $iblockCode
            );
            
            $arIblockProps = [];
            $constructorAdditionals = '';
            $fieldInitString = "\t\t\$this->fieldsCollection\n";
            
            foreach ($arIblocksProps[$iblockCode] as $propertyCode => $arProperty)
            {
                $propertyType = 'StringType';
                $fieldEntity = 'PROPERTY';
                
                if (isset($arProperty['RETURNS'])) {
                    $propertyType = $arProperty['RETURNS'] . 'Type';
                } elseif (isset($arProperty['PROPERTY_TYPE'])) {
                    switch ($arProperty['PROPERTY_TYPE'])
                    {
                        case 'E':
                            $propertyType = 'EntityType';
                            break;
                        case 'F':
                            $propertyType = 'FileType';
                            break;
                        default:
                            break;
                    }
                }
                
                if (
                    isset($arProperty['FIELD_ENTITY']) && 
                    in_array($arProperty['FIELD_ENTITY'], ['PROPERTY', 'FIELD', 'USERFIELD'])
                ) {
                    $fieldEntity = $arProperty['FIELD_ENTITY'];
                }
                
                $fieldInitString .= 
                    "\t\t\t->addField(\n" .
                    "\t\t\t\tnew Field(\n" . 
                    "\t\t\t\t\t'" . $propertyCode . "',\n" .
                    "\t\t\t\t\t'" . $arProperty['XML_ID'] . "',\n" . 
                    "\t\t\t\t\tType\\" . $propertyType . "::class,\n" . 
                    "\t\t\t\t\t'" . $fieldEntity . "',\n" .
                    "\t\t\t\t)\n" . 
                    "\t\t\t)\n";
                
                
                /*if (!isset($arProperty['PROPERTY_TYPE']) && !isset($arProperty['NAME'])) {
                    $constructorAdditionals .= 
                        "\t\t" . 'static::$fieldsAssoc[\'' . $arProperty['XML_ID'] . '\'] = \'' . $propertyCode . "';\n";
                    
                    continue;
                }*/
                
                $this->generateRepositoryFields($arProperty, $propertyCode);
                $arIblockProps[$arProperty['XML_ID']] = $propertyCode;
            }
            
            $fieldInitString .= "\t\t;\n";
            
            $repository
                ->setFilename('List' . $iblockParams['XML_ID'] . '.php')
                ->setToken('xmlId', $iblockParams['XML_ID'])
                ->setToken('id', $createdIblock['ID'])
                ->setToken('code', $iblockCode)
                ->setToken('fields', $fieldInitString)
                ->setToken('construct', $constructorAdditionals)
            ;
            $propertiesString = $repository->arrayToString($arIblockProps);
            $repository
                ->setToken('properties', $propertiesString)
                ->executeTemplate()
            ;

            $repository->executeTemplate();
        }
        
        
    }
    
    /**
     * Если у переданного arProperty PROPERTY_TYPE = E|F (привязка к элементам или файл), 
     * то создаст для него класс в репозитории
     * 
     * @param array $arProperty
     * @param string $propertyCode
     */
    private function generateRepositoryFields($arProperty, $propertyCode)
    {
        if (!isset($arProperty['PROPERTY_TYPE']) && !isset($arProperty['NAME'])) {
            return false;
        }

        Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\IblockUtils' => '/local/modules/spellabs.portal/classes/rest/IblockUtils.php',
                'Spellabs\Portal\Rest\RepositoryGenerator' => '/local/modules/spellabs.portal/classes/rest/RepositoryGenerator.php',
            ]
        );
        
        if (in_array($arProperty['PROPERTY_TYPE'], ['E', 'F'])) {
            $repository = new Spellabs\Portal\Rest\RepositoryGenerator();
            $repository
                ->setTemplate($this->GetPath() . '/../classes/rest/Repository/IblockPropertyClass.php.tpl')
                ->setFilename('Fields/' . $arProperty['XML_ID'] . '.php')
                ->setToken('xmlId', $arProperty['XML_ID'])
                ->setToken('code', $propertyCode)
                ->executeTemplate()
            ;
        }

        return true;
    }
    
    /**
     * Наполняет инфоблоки данными из json файлов из /classes/rest/Fixtures/
     */
    private function fillFixtures()
    {
        Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\IblockUtils' => '/local/modules/spellabs.portal/classes/rest/IblockUtils.php',
            ]
        );
        
        $dir = scandir($this->GetPath() . '/../classes/rest/Fixtures');
        
        // В первом проходе заполним элементы
        foreach ($dir as $key => $item)
        {
            $iblockCode = pathinfo($item)['filename'];
            
            $createdIblock = Spellabs\Portal\Rest\IblockUtils::getIblockBy(
                'code', 
                $iblockCode
            );
            
            $elements = json_decode(
                file_get_contents(
                    $this->GetPath() . '/../classes/rest/Fixtures/' . $item
                ), 
                true
            );

            foreach ($elements as $key => $elementFields)
            {
                $this->fillFixtureAttachments($elementFields['PROPERTY_VALUES']);
                $elementFields['IBLOCK_ID'] = $createdIblock['ID'];

                // если задана "картинка анонса" и есть такой файл
                if (
                    !empty($elementFields['PREVIEW_PICTURE']) && 
                    file_exists(
                        $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $elementFields['PREVIEW_PICTURE']
                    )
                ) {
                    //echo "\n " . $elementFields['NAME'] . " - Has preview picture!\n";
                    $elementFields['PREVIEW_PICTURE'] = CFile::MakeFileArray(
                        $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $elementFields['PREVIEW_PICTURE']
                    );
                }

                // если задана "детальная картинка" и есть такой файл
                if (
                    !empty($elementFields['DETAIL_PICTURE']) && 
                    file_exists(
                        $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $elementFields['DETAIL_PICTURE']
                    )
                ) {
                    $elementFields['DETAIL_PICTURE'] = CFile::MakeFileArray(
                        $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $elementFields['DETAIL_PICTURE']
                    );
                }

                $newIblockElement = new CIBlockElement;
                $newIblockElement->Add($elementFields, false, true, true);
            }
        }
        
        // Во втором проходе заполним привязки
        foreach ($dir as $key => $item)
        {
            $iblockCode = pathinfo($item)['filename'];
            
            $createdIblock = Spellabs\Portal\Rest\IblockUtils::getIblockBy(
                'code', 
                $iblockCode
            );
            
            $elements = json_decode(
                file_get_contents($this->GetPath() . '/../classes/rest/Fixtures/' . $item), true
            );
            
            foreach ($elements as $key => $elementFields)
            {
                $currentElement = Spellabs\Portal\Rest\IblockUtils::getElement(
                    [
                        'IBLOCK_ID' => $createdIblock['ID'],
                        'XML_ID' => $elementFields['XML_ID']
                    ]
                );
                // привязки создавать для элементов с указанными свойствами и XML_ID
                if (
                    !empty($elementFields['PROPERTY_VALUES']) && 
                    !empty($elementFields['XML_ID'])
                ) {
                    $this->fillFixtureLookups(
                        $elementFields['PROPERTY_VALUES'], 
                        $createdIblock['ID']
                    );
                    
                    CIBlockElement::SetPropertyValuesEx(
                        $currentElement['ID'], 
                        $createdIblock['ID'], 
                        $elementFields['PROPERTY_VALUES']
                    );
                }
            }
        }
    }
    
    private function fillFixtureAttachments(&$propertyValues)
    {
        foreach ($propertyValues as $propertyCode => $propertyValue) {
            $arProperty = Spellabs\Portal\Rest\IblockUtils::getPropertyBy(
                'CODE', 
                $propertyCode, 
                $iblockId
            );
            
            // если свойство типа файл
            if ($arProperty['PROPERTY_TYPE'] == 'F') {
                $attachmentsProperty = [];

                // если множественно
                if ($arProperty['MULTIPLE'] == 'Y') {
                    $nCounter = 0;
                    
                    foreach ($propertyValue as $filenameKey => $filename) {
                        $filePath = $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $filename;
                        
                        if (file_exists($filePath)) {
                            $attachmentFile = CFile::MakeFileArray($filePath);
                            $attachmentsProperty['n' + $nCounter] = ['VALUE' => $attachmentFile];
                            $nCounter++;
                        }
                    }
                } else {
                     $filePath = $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $propertyValue[0];
                        
                    if (file_exists($filePath)) {
                        $attachmentFile = CFile::MakeFileArray($filePath);
                        $attachmentsProperty['n0'] = ['VALUE' => $attachmentFile];
                    }
                }
        
                if (count($attachmentsProperty) > 0) {
                    $propertyValues[$propertyCode] = $attachmentsProperty;
                } else {
                    unset($propertyValues[$propertyCode]);
                }
            }
        }
    }
    
    /**
     * Заполнить свойства с привязками.
     * 
     * @todo Нужно где-то определить порядок, т.к. может выйти что я хочу 
     * добавить привязку к еще не созданному элементу
     * @param array $propertyValues
     */
    private function fillFixtureLookups(&$propertyValues, $iblockId)
    {
        Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\IblockUtils' => '/local/modules/spellabs.portal/classes/rest/IblockUtils.php',
            ]
        );
        
        foreach ($propertyValues as $propertyCode => $propertyValue)
        {
            $arProperty = Spellabs\Portal\Rest\IblockUtils::getPropertyBy(
                'CODE', 
                $propertyCode, 
                $iblockId
            );
            
            // если свойство типа привязка к элементам
            if ($arProperty['PROPERTY_TYPE'] == 'E') {
                // если множественно
                if ($arProperty['MULTIPLE'] == 'Y') {
                    // получаем элементЫ у которых XML_ID = значению из JSON
                    $lookupTarget = Spellabs\Portal\Rest\IblockUtils::getElements(
                        [
                            'IBLOCK_ID' => $arProperty['LINK_IBLOCK_ID'],
                            'XML_ID' => $propertyValue
                        ]
                    );

                    $propertyValues[$propertyCode] = Spellabs\Portal\Rest\IblockUtils::getIdsArray($lookupTarget);
                } else {
                    // получаем элемент у которого XML_ID = значению из JSON
                    $lookupTarget = Spellabs\Portal\Rest\IblockUtils::getElement(
                        [
                            'IBLOCK_ID' => $arProperty['LINK_IBLOCK_ID'],
                            'XML_ID' => $propertyValue
                        ]
                    );
                    
                    // в массив на обновление св-в коду обновляемого свойства
                    // задаем значени Id полученного элемента
                    $propertyValues[$propertyCode] = $lookupTarget['ID'];
                }
                
            } else {
                // иначе уберем его из переданного массива, т.к. мы тут 
                // вообще-то подготавливаем массив для задания 
                // свойств-привязок к элементам
                unset($propertyValues[$propertyCode]);
            }
        }
    }
    
    private function setupUserEntity()
    {
        Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\IblockUtils' => '/local/modules/spellabs.portal/classes/rest/IblockUtils.php',
                'Spellabs\Portal\Rest\RepositoryGenerator' => '/local/modules/spellabs.portal/classes/rest/RepositoryGenerator.php',
            ]
        );
        
        $repository = new Spellabs\Portal\Rest\RepositoryGenerator();
        $repository->setTemplate($this->GetPath() . '/../classes/rest/Repository/ListslEmployees.php.tpl');
        
        $usersParams = json_decode(
            file_get_contents($this->GetPath() . "/conf/users.json"), true
        );
        
        $constructorAdditionals = '';
        $fieldInitString = "\t\t\$this->fieldsCollection\n";
        
        foreach ($usersParams as $externalCode => $reflectedIn)
        {
            if (isset($reflectedIn['FIELD'])) {
                $type = 'StringType';
                
                if (isset($reflectedIn['FIELD']['RETURNS'])) {
                    $type = $reflectedIn['FIELD']['RETURNS'] . 'Type';
                }
                
                $this->addFieldsInitString(
                    $fieldInitString, 
                    $reflectedIn['FIELD']['FIELD_NAME'], 
                    $externalCode, 
                    $type, 
                    'FIELD'
                );
            }
            
            if (isset($reflectedIn['UF'])) {
                
                if (is_array($reflectedIn['UF'])) {
                    $reflectedIn['UF']['XML_ID'] = $externalCode;
                    $reflectedIn['UF']['ENTITY_ID'] = 'USER';

                    if ($this->addUserField($reflectedIn['UF']))
                    {
                        $type = 'StringType';

                        switch ($reflectedIn['UF']['USER_TYPE_ID'])
                        {
                            case 'boolean':
                                $type = 'BooleanType';
                                break;
                            case 'date':
                                $type = 'DatetimeType';
                                break;
                            /**
                             * @todo other types
                             */
                            default:
                                break;
                        }

                        $this->addFieldsInitString(
                            $fieldInitString, 
                            $reflectedIn['UF']['FIELD_NAME'], 
                            $externalCode, 
                            $type, 
                            'UF'
                        );
                    }
                } else {
                    $type = 'StringType';
                    
                    $this->addFieldsInitString(
                        $fieldInitString, 
                        $reflectedIn['UF'], 
                        $externalCode, 
                        $type, 
                        'UF'
                    );
                }
                
            }
            
            if (isset($reflectedIn['METHOD'])) {
                
            }
        }
        
        $fieldInitString .= "\t\t;\n";
        
        $repository
            ->setFilename('ListslEmployees.php')
            ->setToken('fields', $fieldInitString)
            ->setToken('construct', $constructorAdditionals)
            ->executeTemplate()
        ;
        
        
    }
    
    private function addUserField($ufArray)
    {
        global $DB;
        
        $newUserField = new CUserTypeEntity();
        
        $DB->StartTransaction();

        $result = $newUserField->Add($ufArray);

        if (!$result)
        {
            $DB->Rollback();
            echo "\nERROR (addUserField) " . $newUserField->LAST_ERROR;
            return false;
        }
        else
        {
            $DB->Commit();
            return true;
        }
    }
    
    private function addFieldsInitString(
        &$fieldInitString, 
        $code, 
        $xmlId, 
        $type = 'StringType', 
        $entity = 'FIELD'
    ) {
        $fieldInitString .= 
            "\t\t\t->addField(\n" .
            "\t\t\t\tnew Field(\n" . 
            "\t\t\t\t\t'" . $code . "',\n" .
            "\t\t\t\t\t'" . $xmlId . "',\n" . 
            "\t\t\t\t\tType\\" . $type . "::class,\n" . 
            "\t\t\t\t\t'" . $entity . "',\n" .
            "\t\t\t\t)\n" . 
            "\t\t\t)\n";
    }
}