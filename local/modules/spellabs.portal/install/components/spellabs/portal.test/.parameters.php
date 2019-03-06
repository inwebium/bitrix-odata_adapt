<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
/** @var array $arCurrentValues */

if(!CModule::IncludeModule("iblock"))
	return;

$arTypesEx = CIBlockParameters::GetIBlockTypes(["-" => " "]);

$arIBlocks = [];
$db_iblock = CIBlock::GetList(
    ["SORT"=>"ASC"], 
    [
        "SITE_ID" => $_REQUEST["site"], 
        "TYPE" => ($arCurrentValues["IBLOCK_TYPE"]!="-"?$arCurrentValues["IBLOCK_TYPE"]:"")
    ]
    );

while ($arRes = $db_iblock->Fetch())
{
    $arIBlocks[$arRes["ID"]] = "[" . $arRes["ID"] . "] " . $arRes["NAME"];
}

$arSorts = [
    "ASC"=>GetMessage("SORT_TYPE_ASC"), 
    "DESC"=>GetMessage("SORT_TYPE_DESC")
    ];
$arSortFields = [
        "ID"=>GetMessage("SORTF_ID"),
		"NAME"=>GetMessage("SORTF_NAME"),
		"ACTIVE_FROM"=>GetMessage("SORTF_ACTIVE_FROM"),
		"SORT"=>GetMessage("SORTF_SORT"),
		"TIMESTAMP_X"=>GetMessage("SORTF_TIMESTAMP")
        ];

$arComponentParameters = [
    "GROUPS" => [],
	"PARAMETERS" => [
        "IBLOCK_TYPE" => [
            "PARENT" => "BASE",
			"NAME" => GetMessage("PARAM_IBLOCK_TYPE"),
			"TYPE" => "LIST",
			"VALUES" => $arTypesEx,
			"DEFAULT" => "",
			"REFRESH" => "Y",
            ],
		"IBLOCK_ID" => [
            "PARENT" => "BASE",
			"NAME" => GetMessage("PARAM_IBLOCK_ID"),
			"TYPE" => "LIST",
			"VALUES" => $arIBlocks,
			"DEFAULT" => '={$_REQUEST["ID"]}',
			"ADDITIONAL_VALUES" => "Y",
			"REFRESH" => "Y",
            ],
		"ELEMENTS_COUNT" => [
            "PARENT" => "BASE",
			"NAME" => GetMessage("PARAM_ELEMENTS_COUNT"),
			"TYPE" => "STRING",
			"DEFAULT" => "20",
            ],
		"SORT_BY1" => [
            "PARENT" => "DATA_SOURCE",
			"NAME" => GetMessage("PARAM_SORT_BY1"),
			"TYPE" => "LIST",
			"DEFAULT" => "ACTIVE_FROM",
			"VALUES" => $arSortFields,
			"ADDITIONAL_VALUES" => "Y",
            ],
		"SORT_ORDER1" => [
            "PARENT" => "DATA_SOURCE",
			"NAME" => GetMessage("PARAM_SORT_ORDER1"),
			"TYPE" => "LIST",
			"DEFAULT" => "DESC",
			"VALUES" => $arSorts,
			"ADDITIONAL_VALUES" => "Y",
            ],
		"SORT_BY2" => [
            "PARENT" => "DATA_SOURCE",
			"NAME" => GetMessage("PARAM_SORT_BY2"),
			"TYPE" => "LIST",
			"DEFAULT" => "SORT",
			"VALUES" => $arSortFields,
			"ADDITIONAL_VALUES" => "Y",
            ],
		"SORT_ORDER2" => [
            "PARENT" => "DATA_SOURCE",
			"NAME" => GetMessage("PARAM_SORT_ORDER2"),
			"TYPE" => "LIST",
			"DEFAULT" => "ASC",
			"VALUES" => $arSorts,
			"ADDITIONAL_VALUES" => "Y",
            ],
        ],
    ];