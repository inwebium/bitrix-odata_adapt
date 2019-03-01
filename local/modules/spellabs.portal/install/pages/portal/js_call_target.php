<?
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

CModule::IncludeModule("iblock");

$arSelect = ["ID", "NAME", "DATE_ACTIVE_FROM"];
$arFilter = ["IBLOCK_ID" => $_REQUEST['data'], "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y"];
$res = CIBlockElement::GetList([], $arFilter, false, ["nPageSize" => 3], $arSelect);

while($arElement = $res->GetNext())
{
    echo '<pre>' . var_dump($arElement) . '</pre>';
}