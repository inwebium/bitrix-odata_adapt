<?
ini_set("max_execution_time", 0);
ini_set("display_errors", 1);

$_SERVER["DOCUMENT_ROOT"] = 'C:\xampp\htdocs\test.bitrix.dev10.spellabs.com';

$arPath = pathinfo(__FILE__);

define("STOP_STATISTICS", true);
define("NO_KEEP_STATISTIC", 'Y');
define("NO_AGENT_STATISTIC",'Y');
define("NO_AGENT_CHECK", true);
//define("DisableEventsCheck", true);
define("NOT_CHECK_PERMISSIONS", true);
//define("BX_BUFFER_USED", true);

echo "HELLO\n";

require_once($_SERVER["DOCUMENT_ROOT"] . '/bitrix/modules/main/include/prolog_admin_before.php');
require_once($arPath['dirname'] . '/classes/CSPAutoInstall.php');
global $DB, $USER, $APPLICATION;

$conf = json_decode(file_get_contents($arPath['dirname'] . '/' . $arPath['filename'] . '.json'), true);

// Перезапишем
if (count($argv) > 1)
{
    $conf['moduleId'] = $argv[1];
    $conf['action'] = isset($argv[2]) ? $argv[2] : $conf['action'];
    $conf['userId'] = isset($argv[3]) ? $argv[3] : $conf['userId'];
}

$autoInstaller = new CSPAutoInstall($conf);

$autoInstaller->Authorize();

switch ($autoInstaller['action'])
{
    case 'install':
        $autoInstaller->Install();
        break;
    case 'uninstall':
        $autoInstaller->UnInstall();
        break;
    case 'clear':
        $autoInstaller->Clear();
        break;
    case 'reinstall':
        $autoInstaller->ReInstall();
        break;
    default:
        die("\nERROR: unsupported action type.\n\n");
        break;
}

echo "Script end.\n\n";