<?
$_SERVER["DOCUMENT_ROOT"] = 'C:\xampp\htdocs\test.bitrix.dev10.spellabs.com';
$userId = 1;
$moduleId = 'spellabs.portal';
$lang = 'ru';
$isInstall = true;
$isUninstall = false;
$isClear = false;

ini_set("max_execution_time", 0);
ini_set("display_errors", 1);

define("STOP_STATISTICS", true);
define("NO_KEEP_STATISTIC", 'Y');
define("NO_AGENT_STATISTIC",'Y');
define("NO_AGENT_CHECK", true);
define("DisableEventsCheck", true);
//define("NEED_AUTH", false);
define("NOT_CHECK_PERMISSIONS", true);
define("BX_BUFFER_USED", true);
$documentRoot = $_SERVER["DOCUMENT_ROOT"];

echo "HELLO\n";

require_once($documentRoot . '/bitrix/modules/main/include/prolog_admin_before.php');
global $DB, $USER, $APPLICATION;

echo "Authorizing user with id=" . $userId . "\n";
$isAuthorized = $USER->Authorize($userId);

if (!$isAuthorized)
{
    die("ERROR: \nFailed to authrize user with id=" . $userId); 
}
else
{
    echo "User with id=" . $userId . " authorized\n";
}

$errorMessage = "";
$errorMessageFull = "";
$id = $moduleId;
$isAdmin = $USER->CanDoOperation('edit_other_settings');

if ($isAdmin)
{
    echo "User is administrator. Continuing.\n";
}

if(($isUninstall || $isInstall || $isClear) && $isAdmin)
{
	$id = str_replace("\\", "", str_replace("/", "", $id));
	if($Module = CModule::CreateModuleObject($id))
	{
		if($Module->IsInstalled() && $isUninstall)
		{
            echo "Module " . $id . " installed. Begin uninstall.\n";
			OnModuleInstalledEvent($id, 'N', $Module);
			if (COption::GetOptionString("main", "event_log_marketplace", "Y") === "Y")
            {
                CEventLog::Log("INFO", "MP_MODULE_UNINSTALLED", "main", $id);
            }

            if($Module->DoUninstall() !== false)
			{
				echo "Module " . $id . " uninstalled.\n";
			}
			else
			{
				$errorMessage = GetMessage("MOD_UNINSTALL_ERROR", Array("#CODE#" => $id));
				if ($e = $APPLICATION->GetException())
                {
                    $errorMessageFull = $e->GetString();
                }
            }

		}
		elseif(!$Module->IsInstalled() && $isInstall)
		{
            echo "Module " . $id . " not installed. Begin install.\n";
			if (strtolower($DB->type)=="mysql" && defined("MYSQL_TABLE_TYPE") && strlen(MYSQL_TABLE_TYPE)>0)
			{
				$DB->Query("SET storage_engine = '".MYSQL_TABLE_TYPE."'", true);
			}

			OnModuleInstalledEvent($id, 'Y', $Module);
			if(COption::GetOptionString("main", "event_log_marketplace", "Y") === "Y")
				CEventLog::Log("INFO", "MP_MODULE_INSTALLED", "main", $id);

			if($isInstall)
			{
				echo "Module " . $id . " installed.\n";
			}
			else
			{
				$errorMessage = GetMessage("MOD_INSTALL_ERROR", Array("#CODE#" => $id));
				if ($e = $APPLICATION->GetException())
                {
                    $errorMessageFull = $e->GetString();
                }
            }

		}
        elseif(!$Module->IsInstalled() && $isClear)
		{
            echo "Module " . $id . " installed. Begin clear.\n";
			if(strlen($Module->MODULE_ID) > 0 && ($mdir = getLocalPath("modules/".$Module->MODULE_ID)) !== false)
			{
				if (COption::GetOptionString("main", "event_log_marketplace", "Y") === "Y")
                {
                    CEventLog::Log("INFO", "MP_MODULE_DELETED", "main", $id);
                }
                DeleteDirFilesEx($mdir . "/");
				echo "Module " . $id . " removed.\n";
			}
		}
        else
        {
            echo "\nERROR: \nLooks like there is an error in autoinstaller configuration. E.g. module installed and installation requested.\n\n";
        }
	}
    else
    {
        echo "\nERROR: \nError while creating module object with module id=" . $id . ".\n\n";
    }
}

if (strlen($errorMessage) > 0)
{
    echo "\nERROR: \n" . $errorMessageFull . "\n\n";
}