    function UsersGroupsLookup(entity_type, iblock_id, id, arSelected, variable_name, inputId, href_id, sSelect, arHighLight, objectName, isMultiple)
    {
        this.entity_type = entity_type;
        this.iblock_id = iblock_id;
        this.id = id;
        this.arSelected = arSelected;
        this.variable_name = variable_name;
        this.inputId = inputId;
        this.href_id = href_id;
        this.sSelect = sSelect;
        this.arHighLight = arHighLight;
        this.objectName = objectName;
        this.isMultiple = isMultiple;

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
        var viewInput = BX(this.inputId);

        var _obSelected = JSON.parse(JSON.stringify(obSelected));
        for(var provider in _obSelected)
        {
            if (_obSelected.hasOwnProperty(provider))
            {
                for(var id in _obSelected[provider])
                {
                    if (_obSelected[provider].hasOwnProperty(id))
                    {
                        if (!this.isMultiple && Object.keys(this.arSelected).length > 0)
                        {
                            BX.Access.ClearSelection();
                            
                            viewInput.innerHTML = '';
                            
                            this.arSelected = {};
                            this.arSelected[id] = true;
                            
                            var selectedVal = {};
                            selectedVal[provider] = {};
                            selectedVal[provider][id] = {};
                            selectedVal[provider][id]['id'] = id;
                            selectedVal[provider][id]['name'] = _obSelected[provider][id].name;
                            selectedVal[provider][id]['provider'] = provider;
                            
                            BX.Access.AddSelection(selectedVal);
                        }
                        

                        
                        viewInput.innerHTML += '<span data-id="val-' + id + '">' + 
                                _obSelected[provider][id].name + 
                                '<a id="delete-row-for-' + this.objectName + 
                                '" href="javascript:void(0);" onclick="UsersGroupsLookup.DeleteItem(this, \'' + id + '\', ' + this.objectName + ');"' + 
                                '" class="access-delete"></a>' +
                                '</span>';
                    }
                }
            }
        }
        this.UpdateValue();
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

    UsersGroupsLookup.DeleteItem = function(element, code, propObject)
    {
        var container = BX.findParent(element, {'data-id': 'val-' + code});
        BX.remove(container);
        BX.Access.DeleteSelected(code, propObject.variable_name);
        propObject.UpdateValue();
        BX.onCustomEvent('onAdminTabsChange');
    };
    
    UsersGroupsLookup.prototype.UpdateValue = function()
    {
        BX.Access.SetSelected(this.arSelected, this.variable_name);
        var viewInput = BX(this.inputId);
        var targetInput = BX(viewInput.getAttribute("data-target"));
        targetInput.value = JSON.stringify(this.arSelected);
    };