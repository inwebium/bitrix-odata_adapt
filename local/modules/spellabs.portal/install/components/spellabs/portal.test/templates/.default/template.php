<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
?>
<div>Компонент установлен с помощью модуля <? echo CSPMain::GetModuleId() . ' ' . CSPMain::GetModuleVersion(); ?></div>
<section class="list-wrapper">
    <?foreach ($arResult["ITEMS"] as $key => $arItem):?>
    	<?
        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), ["CONFIRM" => "Удалить"]);
        ?>
        <article id="<?=$this->GetEditAreaId($arItem['ID']);?>">
            <h3><?=$arItem["ID"];?> - <?=$arItem["NAME"];?> - <?=$arItem["CODE"];?></h3>
        </article>
    <?endforeach;?>
</section>

<section class="test-wrapper">
    <label for="js-input-iblock_id-component">IBLOCK_ID=</label><input type="text" id="js-input-iblock_id-component" value="1" />
    <div id="js-container-test">response must be here</div>
    <button type="submit" id="js-test_call-component">sl.test.call</button>
</section>