<?
// Пролог с визуальной частью (обычно шапка + какие-нибудь сайдбары)
//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

// Служебная часть пролога - без вывода (header.php), только события и т.п.
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

//Содержимое тега title + можно заданное значение вывести с помощью $APPLICATION->ShowTitle()
$APPLICATION->SetTitle("Spellabs Portal test");
// Подключаем некую библиотеку и т.п.
$APPLICATION->AddHeadScript('/local/js/spellabs.example.js');
// Выводит все, что должно быть в <head> (в т.ч. разные битриксовые скрипты/стили)
$APPLICATION->ShowHead();
?>

<div><? $APPLICATION->ShowPanel(); ?></div>
<h1><? $APPLICATION->ShowTitle(); ?></h1>
<div>Страница установлена с помощью модуля <? echo CSPMain::GetModuleId() . ' ' . CSPMain::GetModuleVersion(); ?></div>

<p>Далее будет вызван компонент</p>
<?$APPLICATION->IncludeComponent(
	"spellabs:portal.test",
	"",
	Array(
		"ELEMENTS_COUNT" => "10",
		"IBLOCK_ID" => "122",
		"IBLOCK_TYPE" => "sl_test",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_BY2" => "SORT",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC"
	)
);?>
<p>Компонент закончился</p>
<?
// Эпилог с визуальной частью (обычно футер)
//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");

// Служебная часть пролога - без вывода (footer.php), только события и т.п.
require($_SERVER['DOCUMENT_ROOT']. '/bitrix/modules/main/include/epilog_after.php');
?>