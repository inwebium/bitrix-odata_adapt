<?php
namespace Spellabs\Portal\Rest;

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
            
            $arIblockProps = [];
            $constructorAdditionals = '';
            $fieldInitString = "\t\t\$this->fieldsCollection\n";
            
            foreach ($arIblocksProps[$iblockCode] as $propertyCode => $arProperty)
            {
                $propertyType = $this->determinePropertyType($arProperty);
                $fieldEntity = 'PROPERTY';
                
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
                
                $this->generateRepositoryFields($arProperty, $propertyCode);
                $arIblockProps[$arProperty['XML_ID']] = $propertyCode;
            }
            
            $fieldInitString .= "\t\t;\n";
            
            // Определим в качестве чего выступает ИБ (список или библиотека)
            $entityBehaviour = 'ListBehaviour';
            
            if (!empty($iblockParams['BEHAVIOUR'])) {
                $entityBehaviour = $iblockParams['BEHAVIOUR'] . 'Behaviour';
            }
            
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
}
