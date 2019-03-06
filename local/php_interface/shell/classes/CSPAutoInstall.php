<?

class CSPAutoInstall implements ArrayAccess
{
    private $Module;
    private $Id;
    private $conf;
    
    /**
     * Конструктор, заполнит нужные себе поля и т.д.
     * 
     * @param array $_conf
     * @return $this
     */
    function __construct(array &$_conf)
    {
        $this->conf = $_conf;
        $this->Id = str_replace("\\", "", str_replace("/", "", $this->conf['moduleId']));
        
        if (!$this->Module = CModule::CreateModuleObject($this->Id))
        {
            echo "\nERROR: \nError while creating module object with module id=" . $this->Id . ".\n\n";
        }
        else
        {
            unset($_conf);
        }
        
        return $this;
    }
    
    /**
     * Авторизует пользователя с id из конфига и проверяет на админа
     * 
     * @global CMain $APPLICATION
     * @global CUser $USER
     * @global CDatabase $DB
     * @return $this
     */
    public function Authorize()
    {
        global $APPLICATION, $USER, $DB;
        
        echo "Authorizing user with id=" . $this->conf['userId'] . "\n";
        $isAuthorized = $USER->Authorize($this->conf['userId']);

        if (!$isAuthorized)
        {
            die("ERROR: \nFailed to authrize user with id=" . $this->conf['userId']); 
        }
        else
        {
            echo "User with id=" . $this->conf['userId'] . " authorized\n";
        }
        
        $isAdmin = $USER->CanDoOperation('edit_other_settings');

        if ($isAdmin)
        {
            echo "User is administrator. Continuing.\n";
        }
        else
        {
            die("\nERROR: given userId isn't administrator.\n\n");
        }
        
        return $this;
    }
    
    /**
     * Устанавливает модуль
     * 
     * @global CMain $APPLICATION
     * @global CUser $USER
     * @global CDatabase $DB
     * @return $this
     */
    public function Install()
    {
        global $APPLICATION, $USER, $DB;
        
        if (!$this->Module->IsInstalled())
        {
            echo "Module " . $this->Id . " is not installed. Begin install.\n";

            if (strtolower($DB->type)=="mysql" && defined("MYSQL_TABLE_TYPE") && strlen(MYSQL_TABLE_TYPE)>0)
            {
                $DB->Query("SET storage_engine = '".MYSQL_TABLE_TYPE."'", true);
            }

            $this->OnModuleInstalledEvent('Y');

            if (COption::GetOptionString("main", "event_log_marketplace", "Y") === "Y")
            {
                CEventLog::Log("INFO", "MP_MODULE_INSTALLED", "main", $this->Id);
            }

            if($this->Module->DoInstall() !== false)
            {
                echo "Module " . $this->Id . " is installed.\n";
            }
            else
            {
                $errorMessage = GetMessage("MOD_INSTALL_ERROR", ["#CODE#" => $this->Id]);
                
                if ($e = $APPLICATION->GetException())
                {
                    $errorMessageFull = $e->GetString();
                }
            }
        }
        else
        {
            echo "Module " . $this->Id . " must be uninstalled first.\n";
        }
        
        return $this;
    }
    
    /**
     * Удаление модуля
     * 
     * @global CMain $APPLICATION
     * @global CUser $USER
     * @global CDatabase $DB
     * @return $this
     */
    public function UnInstall()
    {
        global $APPLICATION, $USER, $DB;
        
        if ($this->Module->IsInstalled())
        {
            echo "Module " . $this->Id . " is installed. Begin uninstall.\n";
            $this->OnModuleInstalledEvent('N');
            if (COption::GetOptionString("main", "event_log_marketplace", "Y") === "Y")
            {
                CEventLog::Log("INFO", "MP_MODULE_UNINSTALLED", "main", $this->Id);
            }

            if($this->Module->DoUninstall() !== false)
            {
                echo "Module " . $this->Id . " is uninstalled.\n";
            }
            else
            {
                $errorMessage = GetMessage("MOD_UNINSTALL_ERROR", ["#CODE#" => $this->Id]);
                
                if ($e = $APPLICATION->GetException())
                {
                    $errorMessageFull = $e->GetString();
                }
            }
        }
        else
        {
            echo "Module " . $this->Id . " must be installed first.\n";
        }

        return $this;
    }
    
    /**
     * Стирает файлы удаленного модуля
     * 
     * @global CMain $APPLICATION
     * @global CUser $USER
     * @global CDatabase $DB
     */
    public function Clear()
    {
        global $APPLICATION, $USER, $DB;
        
        if (!$this->Module->IsInstalled())
        {
            echo "Module " . $id . " is not installed. Begin clear.\n";

            if(strlen($this->Module->MODULE_ID) > 0 && ($mdir = getLocalPath("modules/" . $this->Module->MODULE_ID)) !== false)
            {

                if (COption::GetOptionString("main", "event_log_marketplace", "Y") === "Y")
                {
                    CEventLog::Log("INFO", "MP_MODULE_DELETED", "main", $this->Id);
                }
                DeleteDirFilesEx($mdir . "/");
                echo "Module " . $this->Id . " removed.\n";
            }
        }
        else
        {
            echo "Module " . $this->Id . " must be uninstalled first.\n";
        }
        
        return $this;
    }
    
    /**
     * Сначала удалит, потом установит модуль
     * 
     * @global CMain $APPLICATION
     * @global CUser $USER
     * @global CDatabase $DB
     * @return $this
     */
    public function ReInstall()
    {
        global $APPLICATION, $USER, $DB;
        
        $this->UnInstall();
        $this->Install();
        
        return $this;
    }
    
    /**
     * Событие установки/удаления
     * 
     * @global CMain $APPLICATION
     * @global CUser $USER
     * @global CDatabase $DB
     * @param string $installed
     * @return boolean
     */
    private function OnModuleInstalledEvent($installed)
    {
        global $APPLICATION, $USER, $DB;

        foreach(GetModuleEvents("main", "OnModuleInstalled", true) as $arEvent)
        {
            ExecuteModuleEventEx($arEvent, array($this->Id, $installed));
        }

        $cModules = COption::GetOptionString("main", "mp_modules_date", "");
        $arModules = array();
        if (strlen($cModules) > 0)
        {
            $arModules = unserialize($cModules);
        }

        if($installed == "Y")
        {
            $arModules[] = array("ID" => $this->Id, "NAME" => htmlspecialcharsbx($this->Module->MODULE_NAME), "TMS" => time());
            if (count($arModules) > 3)
            {
                $arModules = array_slice($arModules, -3);
            }

            COption::SetOptionString("main", "mp_modules_date", serialize($arModules));
        }
        else
        {
            foreach($arModules as $arid => $val)
            {
                if ($val["ID"] == $this->Id)
                {
                    unset($arModules[$arid]);
                }
            }
            if (count($arModules) > 0)
            {
                COption::SetOptionString("main", "mp_modules_date", serialize($arModules));
            }
            else
            {
                COption::RemoveOption("main", "mp_modules_date");
            }

            $_SESSION["MP_MOD_DELETED"] = array("ID" => $this->Id, "NAME" => $this->Module->MODULE_NAME);
        }
        
        return $this;
    }

    public function offsetExists($offset): bool
    {
        return isset($this->conf[$offset]);
    }

    public function offsetGet($offset)
    {
        return isset($this->conf[$offset]) ? $this->conf[$offset] : null;
    }

    public function offsetSet($offset, $value): void
    {
        if (is_null($offset))
        {
            $this->conf[] = $value;
        }
        else
        {
            $this->conf[$offset] = $value;
        }
    }

    public function offsetUnset($offset): void
    {
        unset($this->conf[$offset]);
    }

}