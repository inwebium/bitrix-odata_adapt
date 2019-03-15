<?
use Bitrix\Main\Localization\Loc,
	Bitrix\Iblock;

Loc::loadMessages(__FILE__);

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
                    <?=$arProperty['ID'];?>,
                    false
                    );
        </script>
        <div id="prop-<?=$arProperty['ID'];?>-view" data-target="prop-<?=$arProperty['ID'];?>-val" class="property-usersgroups">
            <?
            foreach ($arDecodedValue as $id => $value)
            {
                echo '<span data-id="val-' . $id . '">' . $arNames[$id]['name'] . '<a href="javascript:void(0);" onclick="UsersGroupsLookup.DeleteItem(this, \'' . $id . '\', ' . $objectName . ')" class="access-delete"></a></span>';
            }
            ?>
        </div>
        <input id="prop-<?=$arProperty['ID'];?>-add" type="button" value="Изменить" />
        <input id="prop-<?=$arProperty['ID'];?>-val" type="hidden" name="PROP[<?=$arProperty['ID'];?>][n0]" value="<?=htmlspecialchars($arSelected);?>" />
        <?
    }
    
    public static function GetPropertyFieldHtmlMulty($arProperty, $arValues, $strHTMLControlName)
	{
		global $APPLICATION, $USER;
        
        $objectName = 'UsersGroupsLookup' . $arProperty['ID'];
        $variable_name = 'PROP' . $arProperty['ID'];
        $inputId = 'prop-' . $arProperty['ID'] . '-view';
        $addId = 'prop-' . $arProperty['ID'] . '-add';
        
        $sSelect = '';
        $arHighLight = [];
        
        $arSelected = "{}";
        $arNames = [];
        $arDecodedValue = [];
        
        if (count($arValues) > 0)
        {
            foreach ($arValues as $key => $value)
            {
                $arValue = json_decode($value['VALUE'], true);
                
                foreach ($arValue as $id => $isActive)
                {
                    $arDecodedValue[$id] = $isActive;
                }
            }
            
            $arSelected = json_encode($arDecodedValue);
            
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
                    <?=$arProperty['ID'];?>,
                    true
                    );
        </script>
        <div id="prop-<?=$arProperty['ID'];?>-view" data-target="prop-<?=$arProperty['ID'];?>-values" class="property-usersgroups">
            <?
            foreach ($arDecodedValue as $id => $value)
            {
                echo '<span data-id="val-' . $id . '">' . $arNames[$id]['name'] . '<a href="javascript:void(0);" onclick="UsersGroupsLookup.DeleteItem(this, \'' . $id . '\', ' . $objectName . ')" class="access-delete"></a></span>';
            }
            ?>
        </div>
        <input id="prop-<?=$arProperty['ID'];?>-add" type="button" value="Добавить" />
        <div id="prop-<?=$arProperty['ID'];?>-values">
            <?
            $valuesCounter = 0;
            foreach ($arDecodedValue as $id => $value)
            {
                ?>
                <input type="hidden" name="PROP[<?=$arProperty['ID'];?>][n<?=$valuesCounter;?>]" value="<?=htmlspecialchars(json_encode([$id => $value]));?>" data-valuenum="<?=$valuesCounter;?>" />
                <?
                $valuesCounter++;
            }
            ?>
            <input type="hidden" name="PROP[<?=$arProperty['ID'];?>][n<?=$valuesCounter;?>]" value="{}" data-valuenum="<?=$valuesCounter;?>" />
        </div>
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
