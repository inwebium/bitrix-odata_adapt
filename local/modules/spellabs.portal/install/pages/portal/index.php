<?
// Пролог с визуальной частью (обычно шапка + какие-нибудь сайдбары)
//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

// Служебная часть пролога - без вывода (header.php), только события и т.п.
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

//Содержимое тега title + можно заданное значение вывести с помощью $APPLICATION->ShowTitle()
$APPLICATION->SetTitle("Spellabs Portal test");
// Подключаем некую библиотеку и т.п.
$APPLICATION->SetAdditionalCSS('/local/js/styles.css');
$APPLICATION->AddHeadScript('/local/js/runtime.js');
$APPLICATION->AddHeadScript('/local/js/polyfills.js');
$APPLICATION->AddHeadScript('/local/js/styles.js');
$APPLICATION->AddHeadScript('/local/js/scripts.js');
$APPLICATION->AddHeadScript('/local/js/vendor.js');
$APPLICATION->AddHeadScript('/local/js/main.js');
// Выводит все, что должно быть в <head> (в т.ч. разные битриксовые скрипты/стили)
$APPLICATION->ShowHead();
?>

<div><? $APPLICATION->ShowPanel(); ?></div>
<?/*
<div class="l-body">
	<div><app-header></app-header></div>
	<div class="l-body__content-area">
		<div class="l-body__navigation s4-notdlg">
			<div class="l-body__left-menu">
				<app-left-menu></app-left-menu>
			</div>
			<app-left-menu-control></app-left-menu-control>
		</div>
		<div class="l-body__content">
			<app-root></app-root>
			<div><app-footer></app-footer></div>
		</div>
	</div>
</div>
*/?>
<div id="s4-workspace" class="ms-core-overlay">
    <div id="s4-bodyContainer">
        <div id="contentRow">
            <div aria-live="polite" aria-relevant="all" role="main">
                <div id="notificationArea" class="ms-notif-box">
                </div>
                <div id="pageStatusBar">
                </div>
                <a id="mainContent" name="mainContent" tabindex="-1">
                </a>
                <div class="DefaultContentBlock">
                    <div class="l-body">
                        <app-header></app-header>
                        <div class="l-body__content-area">
                            <div class="l-body__navigation">
                                <div class="l-body__left-menu">
                                    <app-left-menu></app-left-menu>
                                </div>
                            </div>
                            <div class="l-body__content">
                                <app-root></app-root>
                                <app-footer></app-footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ms-hide">
            </div>
        </div>
    </div>
</div> 

<?
// Эпилог с визуальной частью (обычно футер)
//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");

// Служебная часть пролога - без вывода (footer.php), только события и т.п.
require($_SERVER['DOCUMENT_ROOT']. '/bitrix/modules/main/include/epilog_after.php');
?>