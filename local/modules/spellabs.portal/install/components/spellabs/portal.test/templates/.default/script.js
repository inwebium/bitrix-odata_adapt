BX.ready(function(){
    BX.bind(BX('js-test_call-component'), 'click', function() {
        sl.call(BX('js-input-iblock_id-component').value);
    });
});