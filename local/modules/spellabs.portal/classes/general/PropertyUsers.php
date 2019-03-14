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

        echo '<pre>';
        var_dump($arValue);
        echo '</pre>';
        
        $objectName = 'UsersGroupsLookup' . $arProperty['ID'];
        $variable_name = 'PROP' . $arProperty['ID'];
        $inputId = 'prop-' . $arProperty['ID'] . '-view';
        $addId = 'prop-' . $arProperty['ID'] . '-add';
        
        $sSelect = '';
        $arHighLight = [];
        
        $arSelected = "{}";
        $arNames = [];
        $arDecodedValue = [];
        
        if (!empty($arValue['VALUE']))
        {
            $arSelected = $arValue['VALUE'];
            
            $arDecodedValue = json_decode($arValue['VALUE'], true);
            
            $access = new CAccess();
            $arNames = $access->GetNames(array_keys($arDecodedValue));
        }
        CJSCore::Init(['jquery', 'access', 'prop_usersgroups']);
        
        $elementId = $_REQUEST['ID'];
        ?>
        <script>
            var <?=$objectName;?> = new UsersGroupsLookup(
                    'element',
                    <?=$arProperty['IBLOCK_ID'];?>,
                    <?=$elementId;?>,
                    <?=$arSelected;?>,
                    '<?=CUtil::JSEscape($variable_name)?>',
                    '<?=CUtil::JSEscape($inputId)?>',
                    '<?=CUtil::JSEscape($addId)?>',
                    '<?=CUtil::JSEscape($sSelect)?>',
                    <?=CUtil::PhpToJsObject($arHighLight)?>,
                    '<?=CUtil::JSEscape($objectName)?>',
                    false
                    );
        </script>
        <div id="prop-<?=$arProperty['ID'];?>-view" data-target="prop-<?=$arProperty['ID'];?>-val">
            <?
            foreach ($arDecodedValue as $id => $value)
            {
                echo '<span data-id="val-' . $id . '">' . $arNames[$id]['name'] . '<a href="javascript:void(0);" onclick="UsersGroupsLookup.DeleteItem(this, \'' . $id . '\', ' . $objectName . ')" class="access-delete"></a></span>';
            }
            ?>
        </div>
        <input id="prop-<?=$arProperty['ID'];?>-add" type="button" value="Изменить" />
        <input id="prop-<?=$arProperty['ID'];?>-val" type="hidden" name="PROP[<?=$arProperty['ID'];?>][n0]" value="<?=$arSelected;?>" />
        <?
    }
    
    public static function GetPropertyFieldHtmlMulty($arProperty, $arValues, $strHTMLControlName)
	{
		global $APPLICATION, $USER;
        
        $htmlResult = '';

        echo '<pre>';
        var_dump($arValue);
        echo '</pre>';
        
        $objectName = 'UsersGroupsLookup' . $arProperty['ID'];
        $variable_name = 'PROP' . $arProperty['ID'];
        $inputId = 'prop-' . $arProperty['ID'] . '-view';
        $addId = 'prop-' . $arProperty['ID'] . '-add';
        
        $sSelect = '';
        $arHighLight = [];
        
        $arSelected = "{}";
        $arNames = [];
        $arDecodedValue = [];
        
        if (!empty($arValue['VALUE']))
        {
            $arSelected = $arValue['VALUE'];
            
            $arDecodedValue = json_decode($arValue['VALUE'], true);
            
            $access = new CAccess();
            $arNames = $access->GetNames(array_keys($arDecodedValue));
        }
        CJSCore::Init(['jquery', 'access', 'prop_usersgroups']);
        
        $elementId = $_REQUEST['ID'];
        ?>
        <script>
            var <?=$objectName;?> = new UsersGroupsLookup(
                    'element',
                    <?=$arProperty['IBLOCK_ID'];?>,
                    <?=$elementId;?>,
                    <?=$arSelected;?>,
                    '<?=CUtil::JSEscape($variable_name)?>',
                    '<?=CUtil::JSEscape($inputId)?>',
                    '<?=CUtil::JSEscape($addId)?>',
                    '<?=CUtil::JSEscape($sSelect)?>',
                    <?=CUtil::PhpToJsObject($arHighLight)?>,
                    '<?=CUtil::JSEscape($objectName)?>',
                    true
                    );
        </script>
        <div id="prop-<?=$arProperty['ID'];?>-view" data-target="prop-<?=$arProperty['ID'];?>-val">
            <?
            $counter = 0;
            foreach ($arDecodedValue as $id => $value)
            {
                echo '<span data-id="val-' . $id . '">' . $arNames[$id]['name'] . '<a href="javascript:void(0);" onclick="UsersGroupsLookup.DeleteItem(this, \'' . $id . '\', ' . $objectName . ')" class="access-delete"></a></span>';
                echo '<input id="prop--val" type="hidden" name="PROP[][]" value="" />';
                $counter++;
            }
            ?>
        </div>
        <input id="prop-<?=$arProperty['ID'];?>-add" type="button" value="Изменить" />
        <input id="prop-<?=$arProperty['ID'];?>-val" type="hidden" name="PROP[<?=$arProperty['ID'];?>][n0]" value="<?=$arSelected;?>" />
        <?
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
