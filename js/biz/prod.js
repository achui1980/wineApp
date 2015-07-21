var wineApp = wineApp || {}
wineApp.prod = function() {

    var initProdList = function() {
    var param = $.url('?name');
    console.log(param);
        wineApp.ajax.post('demo/test.json', {}, onSuccess);
    }
    var onSuccess = function(data) {
        wineApp.common.buildLayout2Col('prod-list', data.owl, function(val) {
            return val.item;
        });
    }
    return {
        initProdList: initProdList
    }
}()

$(document).ready(function() {
    wineApp.prod.initProdList();
});
