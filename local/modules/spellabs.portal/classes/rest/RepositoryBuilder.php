<?php
namespace Spellabs\Portal\Rest;

/**
 * Заполняет репозиторий классами rest-сущностей
 */
class RepositoryBuilder
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
    
    /**
     * 
     * @param type $installerPath
     * @return $this
     */
    public function setInstallerPath($installerPath)
    {
        $this->installerPath = $installerPath;
        return $this;
    }
    
    /**
     * Генерирует репозиторий для rest-сущностей: классы иноблоков 
     * и полей фалов и привязок
     */
    public function generateRestRepository()
    {
        \Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\IblockUtils' => '/local/modules/spellabs.portal/classes/rest/IblockUtils.php',
                'Spellabs\Portal\Rest\RepositoryGenerator' => '/local/modules/spellabs.portal/classes/rest/RepositoryGenerator.php',
            ]
        );
        
        $repository = new \Spellabs\Portal\Rest\RepositoryGenerator();
        $arIblocksParams = json_decode(
            file_get_contents($this->getInstallerPath() . "/conf/iblock.json"), true
        );
        $arIblocksProps = json_decode(
            file_get_contents($this->getInstallerPath() . "/conf/property.json"), true
        );
        
        foreach ($arIblocksParams as $iblockCode => $iblockParams)
        {
            $repository->setTemplate($this->getInstallerPath() . '/../classes/rest/Repository/IblocksClass.php.tpl');
            
            $createdIblock = \Spellabs\Portal\Rest\IblockUtils::getIblockBy(
                'code', 
                $iblockCode
            );
            
            // Определим в качестве чего выступает ИБ (список или библиотека)
            $entityBehaviour = 'ListBehaviour';
            
            if (!empty($iblockParams['BEHAVIOUR'])) {
                $entityBehaviour = $iblockParams['BEHAVIOUR'] . 'Behaviour';
            }
            
            $arIblockProps = [];
            $constructorAdditionals = '';
            
            $fieldInitString = "";
            
            if ($entityBehaviour == 'LibraryBehaviour') {
                $arIblocksProps[$iblockCode]['SL_SERVER_RELATIVE_URL'] = [
                    'XML_ID' => 'ServerRelativeUrl',
                    'FIELD_ENTITY' => 'PROPERTY',
                    'RETURNS' => 'FileUrl'
                ];
                
                $contentTypes = $this->getContentTypes($iblockCode);
                $constructorAdditionals .= "\n\t\t\$this->contentTypes = [\n";
                
                foreach ($contentTypes as $for => $arContentTypes) {
                    $constructorAdditionals .= $this->stringifyContentTypes($arContentTypes, $for);    
                }
                
                $constructorAdditionals .= "\n\t\t];";  
                
                $fieldInitString .= $this->stringifySectionFields($arIblocksProps[$iblockCode]);
            }
            
            $fieldInitString .= "\t\t\$this->fieldsCollection\n";
            
            foreach ($arIblocksProps[$iblockCode] as $propertyCode => $arProperty) {
                if ($arProperty['FIELD_ENTITY'] == 'SECTION_FIELD') {
                    continue;
                }
                
                $propertyType = $this->determinePropertyType($arProperty);
                $fieldEntity = 'PROPERTY';
                    
                if (
                    isset($arProperty['FIELD_ENTITY']) && 
                    in_array(
                        $arProperty['FIELD_ENTITY'], 
                        ['PROPERTY', 'FIELD', 'USERFIELD']
                    )
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

                $this->generateRepositoryFields($arProperty, $propertyCode);
                $arIblockProps[$arProperty['XML_ID']] = $propertyCode;
            }
            
            $fieldInitString .= "\t\t;\n";
            
            // Заполняем шаблон
            $repository
                ->setFilename('List' . $iblockParams['XML_ID'] . '.php')
                ->setToken('xmlId', $iblockParams['XML_ID'])
                ->setToken('id', $createdIblock['ID'])
                ->setToken('code', $iblockCode)
                ->setToken('fields', $fieldInitString)
                ->setToken('construct', $constructorAdditionals)
                ->setToken('name', $iblockParams['NAME'])
                ->setToken('behaviour', $entityBehaviour)
                ->executeTemplate()
            ;
        }
    }
    
    private function determinePropertyType($arProperty)
    {
        $propertyType = 'StringType';
        
        if (isset($arProperty['PROPERTY_TYPE'])) {
            switch ($arProperty['PROPERTY_TYPE'])
            {
                case 'E':
                    $propertyType = 'EntityType';
                    break;
                case 'F':
                    $propertyType = 'FileType';
                    break;
                case 'S':
                    $propertyType = 'StringType';

                    if (isset($arProperty['USER_TYPE'])) {
                        switch ($arProperty['USER_TYPE'])
                        {
                            case 'DateTime':
                                $propertyType = 'DatetimeType';
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                default:
                    break;
            }
        } 
        
        if (isset($arProperty['RETURNS'])) {
            $propertyType = $arProperty['RETURNS'] . 'Type';
        }
        
        return $propertyType;
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

        \Bitrix\Main\Loader::registerAutoLoadClasses(
            null, [
                'Spellabs\Portal\Rest\IblockUtils' => '/local/modules/spellabs.portal/classes/rest/IblockUtils.php',
                'Spellabs\Portal\Rest\RepositoryGenerator' => '/local/modules/spellabs.portal/classes/rest/RepositoryGenerator.php',
            ]
        );
        
        if (in_array($arProperty['PROPERTY_TYPE'], ['E', 'F'])) {
            $repository = new \Spellabs\Portal\Rest\RepositoryGenerator();
            $repository
                ->setTemplate($this->getInstallerPath() . '/../classes/rest/Repository/IblockPropertyClass.php.tpl')
                ->setFilename('Fields/' . $arProperty['XML_ID'] . '.php')
                ->setToken('xmlId', $arProperty['XML_ID'])
                ->setToken('code', $propertyCode)
                ->executeTemplate()
            ;
        }

        return true;
    }
    
    /**
     * Получить настройки контентных типов по коду инфоблока
     * 
     * @param string $iblockCode
     * @param string $for
     * @return array
     */
    private function getContentTypes($iblockCode)
    {
        return json_decode(
            file_get_contents($this->getInstallerPath() . "/conf/content_types.json"), true
        )[$iblockCode];
    }
    
    private function stringifyContentTypes($arContentTypes, $for)
    {
        $result = "";
        
        foreach ($arContentTypes as $key => $arContentType) {
            $result .= "\t\t\tnew \Spellabs\Portal\Rest\Entity\ContentType('" .
                $arContentType['id'] . "', '" .
                $arContentType['name'] . "', '" .
                $for . "'),\n";
            
        }
        
        return $result;
    }
    
    private function stringifySectionFields($sectionFieldsArray)
    {
        $result = "";
        
        $result .= "\t\t\$this->sectionFieldsCollection = new \Spellabs\Portal\Rest\FieldsCollection(\n";
        $result .= "\t\t\t[\n";
        
        foreach ($sectionFieldsArray as $propertyCode => $arProperty) {
            if (
                isset($arProperty['FIELD_ENTITY']) && 
                in_array(
                    $arProperty['FIELD_ENTITY'], 
                    ['SECTION_FIELD']
                )
            ) {
                $propertyType = $this->determinePropertyType($arProperty);
                $result .= "\t\t\t\tnew Field(\n" . 
                    "\t\t\t\t\t'" . $propertyCode . "',\n" .
                    "\t\t\t\t\t'" . $arProperty['XML_ID'] . "',\n" . 
                    "\t\t\t\t\tType\\" . $propertyType . "::class,\n" . 
                    "\t\t\t\t\t'" . $arProperty['FIELD_ENTITY'] . "',\n" .
                    "\t\t\t\t),\n";
            }
        }
        
        $result .= "\t\t\t]\n";
        $result .= "\t\t);\n";
        
        return $result;
    }
}
