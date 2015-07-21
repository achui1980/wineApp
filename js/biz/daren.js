var wineApp = wineApp || {}
wineApp.daren = function() {
    var initDarenList = function() {
        wineApp.ajax.post('demo/test.json', {}, onSuccess);
    }
    var onSuccess = function(data) {
        wineApp.common.buildLayout2Col('daren-list', data.owl, function(val) {
            return val.item;
        });
    }
    return {
        initDarenList: initDarenList
    }
}();

$(document).ready(function() {
    wineApp.daren.initDarenList();
});
