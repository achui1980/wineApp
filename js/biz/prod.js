var wineApp = wineApp || {}
wineApp.prod = function() {
    var initProdList = function() {
        wineApp.ajax.post('demo/test.json', {}, function(data) {
            var pageList = $('#prod-list');
            $.each(data.owl, function(index, val) {
                var htmla = $('<div class="ui-block-a"><div>');
                var htmlb = $('<div class="ui-block-b"><div>');
                var html = '<div class="ui-bar ui-bar-a">'+val.item+'</div>';
                if (index % 2 == 0) {
                	htmla.append(html);
                	pageList.append(htmla);
                } else {
                	htmlb.append(html); 
                	pageList.append(htmlb);
                }
            });

        })
    }
    return {
        initProdList: initProdList
    }
}()

$(document).ready(function() {
    wineApp.prod.initProdList();
});
