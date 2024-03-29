<?php
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
        
        Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\RepositoryBuilder' => '/local/modules/spellabs.portal/classes/rest/RepositoryBuilder.php',
            ]
        );
		
		$this->InstallFiles();
		$this->InstallDB();
        
        $repositoryBuilder = new \Spellabs\Portal\Rest\RepositoryBuilder($this->GetPath());
        $repositoryBuilder->generateRestRepository();
        
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
     * Регистрация модуля, создание инфоблоков, свойств, пользовательских полей и прочие действия с БД
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
        
        Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\ModelBuilder' => '/local/modules/spellabs.portal/classes/rest/ModelBuilder.php',
            ]
        );
        
        $modelBuilder = new \Spellabs\Portal\Rest\ModelBuilder($this->GetPath());
        
        $modelBuilder
            ->createIblockType()
            ->createIblocks()
            ->createProperties()
            ->setupEditForms()
            ->setupUserFields()
        ;
        
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
        
        // В первом проходе заполним-создадим элементы
        $this->createJsonElements($dir);
        // Во втором проходе заполним привязки
        $this->createJsonLookups($dir);
    }
    
    /**
     * Формирует массив для загрузки файлов в свойства типа файл 
     * (PROPERTY_TYPE = F). Формируется массив из переданных значений свойств 
     * фикстуры (ключ PROPERTY_VALUES)
     * 
     * @param array $propertyValues Ссылка на ключ PROPERTY_VALUES фикстуры
     * @param int $iblockId Id инфоблока для создаваемых элементов
     */
    private function fillFixtureAttachments(&$propertyValues, $iblockId)
    {
        // Перебираем значения свойств фикстуры
        foreach ($propertyValues as $propertyCode => $propertyValue) {
            // Получаем свойство по коду
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
                        
                        if (strpos($filename, 'http') === 0) {
                            $attachmentFile = CFile::MakeFileArray($filename);
                            $attachmentsProperty['n' + $nCounter] = ['VALUE' => $attachmentFile];
                            $nCounter++;
                        } else {
                            $filePath = $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $filename;
                        
                            if (file_exists($filePath)) {
                                $attachmentFile = CFile::MakeFileArray($filePath);
                                $attachmentsProperty['n' + $nCounter] = ['VALUE' => $attachmentFile];
                                $nCounter++;
                            }
                        }
                        
                    }
                } else {
                    
                    $filename = $propertyValue[0];
                        
                    if (strpos($filename, 'http') === 0) {
                        $attachmentFile = CFile::MakeFileArray($filename);
                        $attachmentsProperty['n0'] = ['VALUE' => $attachmentFile];
                    } else {
                        $filePath = $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $filename;
                        
                        if (file_exists($filePath)) {
                            $attachmentFile = CFile::MakeFileArray($filePath);
                            $attachmentsProperty['n0'] = ['VALUE' => $attachmentFile];
                        }
                    }
                }
                
                // Если добавили элементов в массив значения файлового свойства
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
    
    /**
     * Создает элементы из массива json файлов (в rest/Fixtures они)
     * 
     * @param type $arFiles
     */
    private function createJsonElements($arFiles)
    {
        foreach ($arFiles as $key => $file) {
            // код инфоблока == имя файла
            $iblockCode = pathinfo($file)['filename'];
            
            // Получаем инфо о созданном ранее инфоблоке по его коду
            $createdIblock = Spellabs\Portal\Rest\IblockUtils::getIblockBy(
                'code', 
                $iblockCode
            );
            
            // Получаем массив из json файла
            $jsonElements = json_decode(
                file_get_contents(
                    $this->GetPath() . '/../classes/rest/Fixtures/' . $file
                ), 
                true
            );
            
            $this->createElements($jsonElements, $createdIblock['ID']);
        }
    }
    
    /**
     * Создаст элементы и разделы из массива подготовленных элементов
     * (такие лежат в rest/Fixtures/... поинфоблочно)
     * 
     * @param array $arElements
     * @param int $iblockId
     */
    private function createElements($arElements, $iblockId, $sectionId = 0)
    {
        // Перебираем элементы из json
        foreach ($arElements as $key => $elementFields) {
            // если в json элемент указан как раздел
            if ($elementFields['IS_SECTION']) {
                // сразу удалим за дальнейшей ненадобностью
                unset($elementFields['IS_SECTION']);
                // создать раздел
                $this->createSection($elementFields, $iblockId, $sectionId);
            } else {
                // удалим за ненадобностью
                unset($elementFields['IS_SECTION']);
                // удалим за неправильностью-невозможностью
                unset($elementFields['CHILDREN']);
                // создать элемент
                $this->createElement($elementFields, $iblockId, $sectionId);
            }
        }
    }
    
    /**
     * Создаст элемент из подготовленного массива. Картинки анонса и детальную
     * (ключи PREVIEW_PICTURE и DETAIL_PICTURE соответственно) подготовит сам
     * 
     * @param array $elementFields
     * @param int $iblockId
     */
    private function createElement($elementFields, $iblockId, $sectionId = 0)
    {
        // заполним значения свойств-файлов
        $this->fillFixtureAttachments(
            $elementFields['PROPERTY_VALUES'],
            $iblockId
        );
        
        $elementFields['PROPERTY_VALUES'] = 
            $this->preparePropertyValues(
                $elementFields['PROPERTY_VALUES'], 
                $iblockId
            );
        // заполним id инфоблока из полученноой выше инфо о нем
        $elementFields['IBLOCK_ID'] = $iblockId;
        
        // если параметр $sectionId есть истина
        if ($sectionId) {
            // добавим привязку к разделу $sectionId
            $elementFields['IBLOCK_SECTION_ID'] = $sectionId;
        }

        // если задана "картинка анонса"
        if (!empty($elementFields['PREVIEW_PICTURE'])) {
            // если начинается с http
            if (strpos($elementFields['PREVIEW_PICTURE'], 'http') === 0) {
                $remotePathinfo = pathinfo($elementFields['PREVIEW_PICTURE']);
                $elementFields['PREVIEW_PICTURE'] = CFile::MakeFileArray(
                    $elementFields['PREVIEW_PICTURE']
                );

                if (empty($remotePathinfo['extension'])) {
                    rename(
                        $elementFields['PREVIEW_PICTURE']['tmp_name'],
                        $elementFields['PREVIEW_PICTURE']['tmp_name'] . '.jpg'
                    );

                    $elementFields['PREVIEW_PICTURE']['tmp_name'] = 
                        $elementFields['PREVIEW_PICTURE']['tmp_name'] . '.jpg';

                    $elementFields['PREVIEW_PICTURE']['name'] = 
                        $elementFields['PREVIEW_PICTURE']['name'] . '.jpg';

                }


            } elseif (file_exists( // есть такой файл
                $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $elementFields['PREVIEW_PICTURE']
            )) {
                $elementFields['PREVIEW_PICTURE'] = CFile::MakeFileArray(
                    $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $elementFields['PREVIEW_PICTURE']
                );
            }
        }

        // если задана "детальная картинка" и есть такой файл
        if (!empty($elementFields['DETAIL_PICTURE'])) {
            if (strpos($elementFields['DETAIL_PICTURE'], 'http') === 0) {
                $elementFields['DETAIL_PICTURE'] = CFile::MakeFileArray(
                    $elementFields['DETAIL_PICTURE']
                );
            } elseif (file_exists(
                $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $elementFields['DETAIL_PICTURE']
            )) {
                $elementFields['PREVIEW_PICTURE'] = CFile::MakeFileArray(
                    $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $elementFields['DETAIL_PICTURE']
                );
            }
        }

        // Собственно добавляем элемент инфоблока
        $newIblockElement = new CIBlockElement;

        if (!$createdId = $newIblockElement->Add($elementFields, false, true, true)) {
            echo "\nError creating fixture: " . $newIblockElement->LAST_ERROR . "\n";
        }
    }
    
    /**
     * Создаст раздел из подготовленного массива. Картинку подготовит сам 
     * (ключ PICTURE для разделов)
     * 
     * @param array $sectionFields
     * @param int $iblockId
     */
    private function createSection($sectionFields, $iblockId, $sectionId = 0)
    {
        $newIblockSection = new CIBlockSection;
        $sectionFields['IBLOCK_ID'] = $iblockId;
    
        // если параметр $sectionId есть истина
        if ($sectionId) {
            // добавим привязку к разделу $sectionId
            $elementFields['IBLOCK_SECTION_ID'] = $sectionId;
        }
        
        // если задана "картинка"
        if (!empty($sectionFields['PICTURE'])) {
            // если начинается с http
            if (strpos($sectionFields['PICTURE'], 'http') === 0) {
                $remotePathinfo = pathinfo($sectionFields['PICTURE']);
                $sectionFields['PICTURE'] = CFile::MakeFileArray(
                    $sectionFields['PICTURE']
                );

                if (empty($remotePathinfo['extension'])) {
                    rename(
                        $sectionFields['PICTURE']['tmp_name'],
                        $sectionFields['PICTURE']['tmp_name'] . '.jpg'
                    );

                    $sectionFields['PICTURE']['tmp_name'] = 
                        $sectionFields['PICTURE']['tmp_name'] . '.jpg';

                    $sectionFields['PICTURE']['name'] = 
                        $sectionFields['PICTURE']['name'] . '.jpg';

                }


            } elseif (file_exists( // есть такой файл
                $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $sectionFields['PICTURE']
            )) {
                $sectionFields['PICTURE'] = CFile::MakeFileArray(
                    $this->GetPath() . '/../classes/rest/Fixtures/attachments/' . $sectionFields['PICTURE']
                );
            }
        }
        
        if (!$createdId = $newIblockSection->Add($sectionFields, true, true, true)) {
            echo "\nError creating section-fixture: " . $newIblockSection->LAST_ERROR . "\n";
        } else {
            // коли указаны потомки у раздела
            if (!empty($sectionFields['CHILDREN'])) {
                // пущай создатуться они, к разделу сему привязанные
                $this->createElements($sectionFields['CHILDREN'], $iblockId, $createdId);
            }
        }
    }
    
    /**
     * Задаст лукапы элементов (очевидно заранее созданных по файлам rest/Fixtures)
     * 
     * @param array $arFiles
     */
    private function createJsonLookups($arFiles)
    {
        foreach ($arFiles as $key => $arFile) {
            // код инфоблока == имя файла
            $iblockCode = pathinfo($arFile)['filename'];
            
            // Получаем инфо о созданном ранее инфоблоке по его коду
            $createdIblock = Spellabs\Portal\Rest\IblockUtils::getIblockBy(
                'code', 
                $iblockCode
            );
            
            $jsonElements = json_decode(
                file_get_contents($this->GetPath() . '/../classes/rest/Fixtures/' . $arFile), true
            );
            
            foreach ($jsonElements as $key => $elementFields) {
                // Получаем раннее созданный элемент по инфо из json (по XML_ID)
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
    
    /**
     * Подготовит значения элемента PROPERTY_VALUES для добавления элемента 
     * инфоблока. На данный момент пока необходимо только для свойств-списков (L)
     * 
     * @param array $propertyValues
     * @param int $iblockId
     * @return array
     */
    private function preparePropertyValues($propertyValues, $iblockId)
    {
        foreach ($propertyValues as $propertyCode => $value) {
            $propertyResult = CIBlockProperty::GetList(
                ['ID' => 'DESC'],
                ['IBLOCK_ID' => $iblockId, 'CODE' => $propertyCode]
            );
            
            if ($arProperty = $propertyResult->GetNext()) {
                switch ($arProperty['PROPERTY_TYPE']) {
                    case 'S':
                        // TODO: ?
                    case 'N':
                        // TODO: ?
                    case 'F':
                        // TODO: ?
                        break;
                    case 'L':
                        // находим значение из свойства-списка
                        $enumVariantResult = CIBlockPropertyEnum::GetList(
                            ['ID' => 'DESC'], 
                            [
                                'CODE' => $propertyCode, 
                                'IBLOCK_ID' => $iblockId,
                                'EXTERNAL_ID' => $value
                            ]
                        );
                        
                        if ($arProperty['MULTIPLE'] == 'Y' && is_array($value)) {
                            while ($arEnumVariant = $enumVariantResult->GetNext()) {
                                $propertyValues[$propertyCode][array_search($arEnumVariant['XML_ID'], $value)] = 
                                    $arEnumVariant['ID']
                                ;
                            }
                        } else {
                            if ($arEnumVariant = $enumVariantResult->GetNext()) {
                                $propertyValues[$propertyCode] = [
                                    'VALUE' => $arEnumVariant['ID']
                                ];
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        
        return $propertyValues;
    }
}