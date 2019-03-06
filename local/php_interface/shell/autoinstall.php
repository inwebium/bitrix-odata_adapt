<?
/**
 * Скрипт позволяет устанавливать/удалять/переустанавливать/стирать
 * нужный модуль. 
 * На одном уровне находится файл autoinstall.json с конфигурацией:
 *  "userId": IdПользователя, Id пользователя который будет выполнять скрипт (1 - стандартный админ)
 *  "moduleId": "IdМодуля", Код модуля в папке local/modules (e.g. spellabs.portal)
 *  "action": "Действие", Что делать (install/uninstall/clear/reinstall)
 * install - модуль не установлен в битриксе, установить
 * uninstall - модуль установлен в битриксе, удалить
 * clear - модуль удален в битриксе, удалить файлы в local/modules/IdМодуля
 * reinstall - модуль установлен в битриксе, сначала удалит, потом заново установит
 * 
 * Так же скрипту можно передать аргументы из командной строки. E.g.:
 * Находясь в папке = DocumentRoot
 * php -f local/php_interface/shell/autoinstall.php spellabs.portal uninstall 1
 * 
 * Где аргументы должны идти строго в порядке:
 * 1 - IdМодуля,
 * 2 - Действие,
 * 3 - IdПользователя
 * 
 * Переданные аргументы имеют больший приоритет над параметрами из .json файла
 */

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