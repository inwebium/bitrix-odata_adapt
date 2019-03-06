<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
/** @var CBitrixComponent $this */
/** @var array $arParams */
/** @var array $arResult */
/** @var string $componentPath */
/** @var string $componentName */
/** @var string $componentTemplate */
/** @global CDatabase $DB */
/** @global CUser $USER */
/** @global CMain $APPLICATION */

use Bitrix\Main\Context,
	Bitrix\Main\Type\DateTime,
	Bitrix\Main\Loader,
	Bitrix\Iblock;

$APPLICATION->AddHeadScript('/local/js/spellabs.example.js');

$arParams["IBLOCK_TYPE"] = trim($arParams["IBLOCK_TYPE"]);
$arParams["IBLOCK_ID"] = trim($arParams["IBLOCK_ID"]);


$arSort = [
    $arParams['SORT_BY1'] => $arParams['PARAM_SORT_ORDER1'],
    $arParams['SORT_BY2'] => $arParams['PARAM_SORT_ORDER2'],
];

$arFilter = ['IBLOCK_ID' => $arParams['IBLOCK_ID'], 'ACTIVE' => 'Y'];
$arGroup = false;
$arNav = false;
$arSelect = ['IBLOCK_ID', 'ID', 'NAME', 'CODE'];

if ($arParams['ELEMENTS_COUNT'] > 0)
{
    $arNav = [];
    $arNav['nPageSize']  = $arParams['ELEMENTS_COUNT'];
}

$arResult = [];
$arResult["ITEMS"] = [];

if(!Loader::includeModule("iblock"))
{
    $this->abortResultCache();
    ShowError("Where is iblock module?");
    return;
}
    
$res = CIBlockElement::GetList($arSort, $arFilter, $arGroup, $arNav, $arSelect);

while ($arElement = $res->GetNext())
{
    $arButtons = CIBlock::GetPanelButtons(
			$arElement["IBLOCK_ID"],
			$arElement["ID"],
			0,
			array("SECTION_BUTTONS"=>false, "SESSID"=>false)
		);
    $arElement["EDIT_LINK"] = $arButtons["edit"]["edit_element"]["ACTION_URL"];
    $arElement["DELETE_LINK"] = $arButtons["edit"]["delete_element"]["ACTION_URL"];
    
    $arResult["ITEMS"][] = $arElement;
}

$this->includeComponentTemplate();