<?
// Пролог с визуальной частью (обычно шапка + какие-нибудь сайдбары)
//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

// Служебная часть пролога - без вывода (header.php), только события и т.п.
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

//Содержимое тега title + можно заданное значение вывести с помощью $APPLICATION->ShowTitle()
$APPLICATION->SetTitle("Spellabs Portal test");
// Выводит все, что должно быть в <head> (в т.ч. разные битриксовые скрипты/стили)
$APPLICATION->ShowHead();
?>
<div><? $APPLICATION->ShowPanel(); ?></div>
<h1><? $APPLICATION->ShowTitle(); ?></h1>
Страница установлена с помощью модуля <? echo CSPMain::GetModuleId() . ' ' . CSPMain::GetModuleVersion(); ?>
<?
// Эпилог с визуальной частью (обычно футер)
//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");

// Служебная часть пролога - без вывода (footer.php), только события и т.п.
require($_SERVER['DOCUMENT_ROOT']. '/bitrix/modules/main/include/epilog_after.php');
?>