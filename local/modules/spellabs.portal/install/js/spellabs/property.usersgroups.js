    function UsersGroupsLookup(entity_type, iblock_id, id, arSelected, variable_name, table_id, href_id, sSelect, arHighLight)
    {
        this.entity_type = entity_type;
        this.iblock_id = iblock_id;
        this.id = id;
        this.arSelected = arSelected;
        this.variable_name = variable_name;
        this.table_id = table_id;
        this.href_id = href_id;
        this.sSelect = sSelect;
        this.arHighLight = arHighLight;

        BX.ready(BX.delegate(this.Init, this));
    }

    UsersGroupsLookup.prototype.Init = function()
    {
        BX.bind(BX(this.href_id), 'click', BX.delegate(this.Add, this));
        var heading = BX(this.variable_name + '_heading');

        if(heading)
        {
            BX.bind(heading, 'dblclick', BX.delegate(this.ShowInfo, this));
        }
        BX.Access.Init(this.arHighLight);
        BX.Access.SetSelected(this.arSelected, this.variable_name);
    };

    UsersGroupsLookup.prototype.Add = function()
    {
        BX.Access.ShowForm({callback: BX.delegate(this.InsertElements, this), bind: this.variable_name});
    };

    UsersGroupsLookup.prototype.InsertElements = function(obSelected)
    {
        var tbl = BX(this.table_id);
        var targetInput = BX(tbl.getAttribute("data-target"));
        
        console.log(tbl.getAttribute("data-target"));
        
        for(var provider in obSelected)
        {
            if (obSelected.hasOwnProperty(provider))
            {
                for(var id in obSelected[provider])
                {
                    if (obSelected[provider].hasOwnProperty(id))
                    {
                        console.log(BX.Access.GetProviderName(provider));
                        console.log(obSelected[provider][id].name);
                        console.log(id);
                        
                        var inputValue = {};
                        inputValue[id] = true;
                        
                        targetInput.value = JSON.stringify(inputValue);
                        tbl.innerHTML = obSelected[provider][id].name + '<a href="javascript:void(0);" onclick="UsersGroupsLookup.DeleteRow(this, \''+id+'\', \''+this.variable_name+'\')" class="access-delete"></a>';
                    }
                }
            }
        }
        
        
        
        /*for(var provider in obSelected)
        {
            if (obSelected.hasOwnProperty(provider))
            {
                for(var id in obSelected[provider])
                {
                    if (obSelected[provider].hasOwnProperty(id))
                    {
                        var cnt = tbl.rows.length;
                        var row = tbl.insertRow(cnt-1);
                        row.vAlign = 'top';
                        row.insertCell(-1);
                        row.insertCell(-1);
                        row.cells[0].align = 'right';
                        row.cells[0].style.textAlign = 'right';
                        row.cells[0].style.verticalAlign = 'middle';
                        row.cells[0].innerHTML = BX.Access.GetProviderName(provider)+' '+obSelected[provider][id].name+':'+'<input type="hidden" name="'+this.variable_name+'[][RIGHT_ID]" value=""><input type="hidden" name="'+this.variable_name+'[][GROUP_CODE]" value="'+id+'">';
                        row.cells[1].align = 'left';
                        row.cells[1].innerHTML = this.sSelect + ' ' + '<a href="javascript:void(0);" onclick="UsersGroupsLookup.DeleteRow(this, \''+id+'\', \''+this.variable_name+'\')" class="access-delete"></a><span title="'+BX.message('langApplyTitle')+'" id="overwrite_'+id+'"></span>';

                        var parents = BX.findChildren(tbl, {'class' : this.variable_name + '_row_for_' + id}, true);
                        if(parents)
                        for(var i = 0; i < parents.length; i++)
                            parents[i].className += ' iblock-strike-out';
                    }
                }
            }
        }*/

        /*if(parseInt(this.id) > 0)
        {
            BX.ajax.loadJSON(
                '/bitrix/admin/iblock_edit.php'+
                '?ajax=y'+
                '&sessid='+BX.bitrix_sessid()+
                '&entity_type='+this.entity_type+
                '&iblock_id='+this.iblock_id+
                '&id='+this.id,
                {added: obSelected},
                function(result)
                {
                    if(result)
                    {
                        for(var id in result)
                        {
                            var s = parseInt(result[id][0]);
                            var e = parseInt(result[id][1]);
                            var mess = '';
                            if(s > 0 && e > 0)
                                mess = BX.message('langApply1Title');
                            else if (s > 0)
                                mess = BX.message('langApply2Title');
                            else if (e > 0)
                                mess = BX.message('langApply3Title');

                            if(mess)
                                BX('overwrite_'+id).innerHTML = '<br><input type="checkbox" name="'+this.variable_name+'[][DO_CLEAN]" value="Y" checked="checked" disabled="disabled">'+mess+' ('+(s+e)+')';
                        }
                    }
                }
            );
        }*/

        BX.onCustomEvent('onAdminTabsChange');
    };

    UsersGroupsLookup.prototype.ShowInfo = function()
    {
        var entity_type = this.entity_type;
        var iblock_id = this.iblock_id;
        var id = this.id;

        var btnOK = new BX.CWindowButton({
            'title': 'Query',
            'action': function()
            {
                var _user_id = BX('prompt_user_id');
                BX('info_result').innerHTML = '';
                BX.showWait();
                BX.ajax.loadJSON(
                    '/bitrix/admin/iblock_edit.php'+
                    '?ajax=y'+
                    '&sessid='+BX.bitrix_sessid()+
                    '&entity_type='+entity_type+
                    '&iblock_id='+iblock_id+
                    '&id='+id,
                    {info: _user_id.value},
                    function(result)
                    {
                        if(result)
                        {
                            for(var id in result)
                            {
                                BX('info_result').innerHTML += '<span style="display:inline-block;width:200px;height:15px;">' + id + '</span>';
                            }
                        }
                        BX.closeWait();
                    }
                );
            }
        });

        if (null == this.iblock_info_obDialog)
        {
            this.iblock_info_obDialog = new BX.CDialog({
                content: '<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td width="50%" align="right">User ID:</td><td width="50%" align="left"><input type="text" size="6" id="prompt_user_id" value=""></td></tr><tr><td colspan="2" id="info_result"></td></tr></table>',
                buttons: [btnOK, BX.CDialog.btnCancel],
                width: 420,
                height: 200
            });
        }

        this.iblock_info_obDialog.Show();

        var inp = BX('prompt_user_id');
        inp.focus();
        inp.select();
    };

    UsersGroupsLookup.DeleteRow = function(ob, id, variable_name)
    {
        var row = BX.findParent(ob, {'tag':'tr'});
        var tbl = BX.findParent(row, {'tag':'table'});
        var parents = BX.findChildren(tbl, {'class' : variable_name + '_row_for_' + id + ' iblock-strike-out'}, true);
        if(parents)
        for(var i = 0; i < parents.length; i++)
            parents[i].className = variable_name + '_row_for_' + id;
        row.parentNode.removeChild(row);
        BX.onCustomEvent('onAdminTabsChange');
        BX.Access.DeleteSelected(id, variable_name);
    };