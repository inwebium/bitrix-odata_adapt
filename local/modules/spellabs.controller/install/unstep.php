<?
if (!check_bitrix_sessid())
{
    return;
}

echo CAdminMessage::ShowNote(GetMessage("MODULE_UNINSTALL_OK"));
