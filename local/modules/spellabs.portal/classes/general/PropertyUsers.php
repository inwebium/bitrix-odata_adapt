<?
use Bitrix\Main\Localization\Loc,
	Bitrix\Iblock;

Loc::loadMessages(__FILE__);

//AddEventHandler('iblock', 'OnIBlockPropertyBuildList', ['PropertyUsers', 'GetUserTypeDescription']);

class PropertyUsers
{
    const USER_TYPE = 'UsersGroups';

	public static function GetUserTypeDescription()
	{
		return [
            'PROPERTY_TYPE' => 'S',
			'USER_TYPE' => self::USER_TYPE,
			'DESCRIPTION' => 'Пользователь/Группа',
			'GetPropertyFieldHtml' => [__CLASS__, 'GetPropertyFieldHtml'],
			'GetPropertyFieldHtmlMulty' => [__CLASS__, 'GetPropertyFieldHtmlMulty'],
            'ConvertToDB' => [__CLASS__, 'ConvertToDB'],
            'ConvertFromDB' => [__CLASS__, 'ConvertFromDB'],
			/*"GetAdminListViewHTML" => [__CLASS__,"GetAdminListViewHTML"],
			"GetPublicViewHTML" => [__CLASS__, "GetPublicViewHTML"],
			"GetPublicEditHTML" => [__CLASS__, "GetPublicEditHTML"],
			"GetAdminFilterHTML" => [__CLASS__,'GetAdminFilterHTML'],
			"GetSettingsHTML" => [__CLASS__,'GetSettingsHTML'],
			"PrepareSettings" => [__CLASS__,'PrepareSettings'],
			"AddFilterFields" => [__CLASS__,'AddFilterFields'],
			"GetPublicFilterHTML" => [__CLASS__,'GetPublicFilterHTML'],
			"GetUIFilterProperty" => [__CLASS__, 'GetUIFilterProperty']*/
        ];
	}
    
    public static function GetPropertyFieldHtml($arProperty, $arValue, $strHTMLControlName)
	{
		global $APPLICATION, $USER;
        
        $htmlResult = '';

        /*echo '<pre>';
        var_dump(CAccess::GetUserCodesArray($USER->GetId()));
        echo '</pre>';*/
        /*echo '<pre>';
        var_dump($arProperty);
        echo '</pre>';
        echo '<pre>';
        var_dump($arValue);
        echo '</pre>';
        echo '<pre>';
        var_dump($strHTMLControlName);
        echo '</pre>';*/
        
        $inputId = 'prop-' . $arProperty['ID'] . '-view';
        $addId = 'prop-' . $arProperty['ID'] . '-add';
        
        $sSelect = '';
        $arHighLight = [];
        
        $arSelected = json_encode([]);
        $arNames = [];
        $arDecodedValue = [];
        
        if (!empty($arValue['VALUE']))
        {
            $arSelected = $arValue['VALUE'];
            
            $arDecodedValue = json_decode($arValue['VALUE'], true);
            
            $access = new CAccess();
            $arNames = $access->GetNames(array_keys($arDecodedValue));
        }
        CJSCore::Init(['jquery', 'prop_usersgroups']);
        ?>
        <script>
            var propUsersGroups_<?=$arProperty['ID'];?> = new UsersGroupsLookup(
                    'element',
                    <?=$arProperty['IBLOCK_ID'];?>,
                    <?=$_REQUEST['ID'];?>,
                    <?=$arSelected;?>,
                    '<?=CUtil::JSEscape($variable_name)?>',
                    '<?=CUtil::JSEscape($inputId)?>',
                    '<?=CUtil::JSEscape($addId)?>',
                    '<?=CUtil::JSEscape($sSelect)?>',
                    <?=CUtil::PhpToJsObject($arHighLight)?>
                    );
        </script>
        <div id="prop-<?=$arProperty['ID'];?>-view" data-target="prop-<?=$arProperty['ID'];?>-val">
            <?
            foreach ($arDecodedValue as $id => $value)
            {
                echo '<span data-id="val-' . $id . '">' . $arNames[$id]['name'] . '<a href="javascript:void(0);" onclick="UsersGroupsLookup.DeleteRow(this, \'' . $id . '\', \'' . CUtil::JSEscape($variable_name) . '\')" class="access-delete"></a></span>';
            }
            ?>
        </div>
        <input id="prop-<?=$arProperty['ID'];?>-add" type="button" value="Изменить" />
        <input id="prop-<?=$arProperty['ID'];?>-val" type="hidden" name="PROP[<?=$arProperty['ID'];?>][n0]" value="<?=$arSelected;?>" />
        <?
    }
    
    public static function GetPropertyFieldHtmlMulty($arProperty, $arValues, $strHTMLControlName)
	{
		global $APPLICATION;
        
        $htmlResult = '';
        echo '<pre>';
        var_dump($arProperty);
        echo '</pre>';
        echo '<pre>';
        var_dump($arValue);
        echo '</pre>';
        echo '<pre>';
        var_dump($strHTMLControlName);
        echo '</pre>';
        
        $inputId = 'prop-' . $arProperty['ID'] . '-view';
        $addId = 'prop-' . $arProperty['ID'] . '-add';
        $sSelect = '';
        $arHighLight = [];
        $arSelected = json_encode([]);
        CJSCore::Init(['jquery', 'prop_usersgroups']);
        ?>
        <script>
            var propUsersGroups_<?=$arProperty['ID'];?> = new UsersGroupsLookup(
                    'element',
                    <?=$arProperty['IBLOCK_ID'];?>,
                    <?=$_REQUEST['ID'];?>,
                    <?=$arSelected;?>,
                    '<?=CUtil::JSEscape($variable_name)?>',
                    '<?=CUtil::JSEscape($inputId)?>',
                    '<?=CUtil::JSEscape($addId)?>',
                    '<?=CUtil::JSEscape($sSelect)?>',
                    <?=CUtil::PhpToJsObject($arHighLight)?>
                    );
        </script>
        <div id="prop-<?=$arProperty['ID'];?>-view" data-target="prop-<?=$arProperty['ID'];?>-val"></div>
        <input id="prop-<?=$arProperty['ID'];?>-add" type="button" value="Добавить" />
        <input id="prop-<?=$arProperty['ID'];?>-val" type="hidden" name="PROP[<?=$arProperty['ID'];?>][n0]" value="<?=$arSelected;?>" />
        <?
        
        /*IBlockShowRights(
			'element',
			$arProperty['IBLOCK_ID'],
			$ID,
			'',
			'UsersGroups',
			$obRights->GetRightsList(),
			$obRights->GetRights(array("count_overwrited" => true, "parents" => $str_IBLOCK_ELEMENT_SECTION)),
			false,
            ($ID <= 0) || $bCopy
		);*/
        /*?>
        <a href="javascript:void(0)"  id="<?echo htmlspecialcharsbx($href_id)?>" class="bx-action-href"><?echo GetMessage("IBLOCK_AT_PROP_ADD")?></a>
        <?*/
        //$strResult = ob_get_contents();
        //ob_end_clean();
        
        //return $htmlResult;
    }
    
    function ConvertToDB($arProperty, $value)
   {
      return $value;
   }

   function ConvertFromDB($arProperty, $value)
   {
      return $value;
   }
}
