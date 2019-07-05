<?php
namespace Spellabs\Portal\Rest;

class ModelBuilder
{
    /**
     * @var string Путь до папки install модуля
     */
    private $installerPath;
    
    public function __construct($installerPath)
    {
        $this->setInstallerPath($installerPath);
    }

    public function getInstallerPath()
    {
        return $this->installerPath;
    }

    public function setInstallerPath($installerPath)
    {
        $this->installerPath = $installerPath;
        return $this;
    }

    /**
     * Создаст тип инфоблоков
     * 
     * @global CDatabase $DB
     * @global CCacheManager $CACHE_MANAGER
     * @return $this
     */
    public function createIblockType()
    {
        global $DB, $CACHE_MANAGER;
        
        $CACHE_MANAGER->cleanDir("b_iblock_type");
        $resIblockType = \CIBlockType::GetByID('spellabs');
        
        if ($resIblockType->GetNext())
        {
            echo "\nNOTICE (CreateIblockType): IBlockType spellabs already exists\n\n";
        }
        else
        {
            $slIblockType = new \CIBlockType;
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
            }
        }
        
        return $this;
    }
    
    /**
     * Создаст инфоблоки из конфига conf/iblock.json
     * 
     * @global CDatabase $DB
     */
    public function createIblocks()
    {
        global $DB;
        $arIblocksParams = json_decode(file_get_contents($this->getInstallerPath() . "/conf/iblock.json"), true);

        foreach ($arIblocksParams as $iblockCode => $iblockParams)
        {
            $newIblock = new \CIBlock;
            
            // удалим придуманные ключи от греха подальше
            if (!empty($iblockParams['BEHAVIOUR'])) {
                unset($iblockParams['BEHAVIOUR']);
            }
            
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
                \CIBlock::SetPermission($result, $arPermissions);
            }
        }
        
        return $this;
    }
    
    /**
     * Создаст свойства инфоблоков из конфига conf/property.json
     * 
     * @global CDatabase $DB
     */
    public function createProperties()
    {
        global $DB;
        $arIblocksProperties = json_decode(file_get_contents($this->getInstallerPath() . "/conf/property.json"), true);

        foreach ($arIblocksProperties as $iblockCode => $arProperties)
        {
            $iblockId = $this->getIblockId($iblockCode);
            foreach ($arProperties as $propertyCode => $arProperty)
            {
                if (!isset($arProperty['PROPERTY_TYPE']) && !isset($arProperty['NAME'])) {
                    continue;
                }
            
                $newProperty = new \CIBlockProperty;
                $arProperty['CODE'] = $propertyCode;
                $arProperty['IBLOCK_ID'] = $iblockId;
                
                // если свойство из конфига - привязка к элементам (E)
                if ($arProperty['PROPERTY_TYPE'] == 'E') {
                    // то берем LINK_IBLOCK_CODE и заменяем на 
                    // LINK_IBLOCK_ID с Id соответствующего по коду инфоблока
                    $linkedIblockId = $this->getIblockId($arProperty['LINK_IBLOCK_CODE']);
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
        
        return $this;
    }
    
    /**
     * Настроит формы редактирования элементов инфоблоков по конфигу conf/editform.json
     * 
     */
    public function setupEditForms()
    {
        $editFormsSettings = json_decode(file_get_contents($this->getInstallerPath() . "/conf/editform.json"), true);
        
        foreach ($editFormsSettings as $iblockCode => $arFormSettings)
        {
            $iblockId = $this->getIblockId($iblockCode);
            
            $arCreatedProperties = [];
            $resProperties = \CIBlockProperty::GetList(['SORT' => 'ASC', 'NAME' => 'ASC'], ['IBLOCK_ID' => $iblockId]);
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
            $result = \CUserOptions::SetOption("form", "form_element_".$iblockId, $arSettings, true, false);
        }
        
        return $this;
    }
    
        /**
     * Создание пользовательских полей (свойства пользователей, разделов инфоблоков)
     * 
     * @global CDatabase $DB
     */
    public function setupUserFields()
    {
        global $DB;
        $arUserFields = json_decode(file_get_contents($this->getInstallerPath() . "/conf/userfield.json"), true);
        
        foreach ($arUserFields as $fieldName => $arSettings)
        {
            $newUserField = new \CUserTypeEntity();
            $arSettings['FIELD_NAME'] = $fieldName;
            
            $regExpMatches = [];
            
            if (preg_match('/#([a-zA-Z0-9_]*)#/', $arSettings['ENTITY_ID'], $regExpMatches))
            {
                $arSettings['ENTITY_ID'] = str_replace(
                    $regExpMatches[0], 
                    $this->getIblockId($regExpMatches[1]), 
                    $arSettings['ENTITY_ID']
                    );
            }
            
            $regExpMatches = [];
            
            if (isset($arSettings['SETTINGS']['IBLOCK_ID']) && preg_match('/^#([a-zA-Z0-9_]*)#$/', $arSettings['SETTINGS']['IBLOCK_ID'], $regExpMatches))
            {
                $arSettings['SETTINGS']['IBLOCK_ID'] = str_replace(
                    $regExpMatches[0], 
                    $this->getIblockId($regExpMatches[1]), 
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
        
        return $this;
    }
    
    /**
     * Удалит пользовательские поля согласно conf/userfield.json
     * 
     * @global CDatabase $DB
     */
    public function deleteUserFields()
    {
        global $DB;
        $arUserFields = json_decode(file_get_contents($this->getInstallerPath() . "/conf/userfield.json"), true);
        $userTypeEntity = new \CUserTypeEntity();
        
        foreach ($arUserFields as $fieldName => $arSettings)
        {
            $userFieldEntity = \CUSerTypeEntity::GetList(['ID' => 'ASC'], ['FIELD_NAME' => $fieldName]);
            
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
    
    private function addUserField($ufArray)
    {
        global $DB;
        
        $newUserField = new \CUserTypeEntity();
        
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
    
    /**
     * Метод вернет id инфоблока по его символьному коду
     * 
     * @param string $iblockCode Символьный код инфоблока
     * @return int ID инфоблока
     */
    private function getIblockId($iblockCode)
    {
        \Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\IblockUtils' => '/local/modules/spellabs.portal/classes/rest/IblockUtils.php',
            ]
        );
        
        return intval(IblockUtils::getIblockBy('CODE', $iblockCode)['ID']);
    }
}
