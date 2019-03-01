;(function(){

    sl = {
        call: function(data)
        {
            var post = {};
            post['data'] = data;
            post['ajax'] = 'Y';

            node = BX('js-container-test');

            if (!!node)
            {
                BX.ajax.post(
                    '/portal/js_call_target.php',
                    post,
                    function (response)
                    {
                        node.innerHTML = response;
                    }
                );

            }
        }
    };
})();

BX.ready(function(){
    BX.bind(BX('js-test_call'), 'click', function() {
        sl.call(BX('js-input-iblock_id').value);
    });
});