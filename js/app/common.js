var wineApp = wineApp || {};
<<<<<<< HEAD

wineApp.common = (function() {
    var buildLayout2Col = function(wrapperSelector, list, itemParse) {
        var wrapper = $('#' + wrapperSelector);
        $.each(list, function(index, obj) {
            var htmla = $('<div class="ui-block-a"><div>');
            var htmlb = $('<div class="ui-block-b"><div>');
            var parseItem = itemParse(obj);
            var html = '<div class="ui-bar ui-bar-a">' + parseItem + '</div>';
            if (index % 2 == 0) {
                htmla.append(html);
                wrapper.append(htmla);
            } else {
                htmlb.append(html);
                wrapper.append(htmlb);
            }
        });
    }
    var buildFooter = function(){
        var footer = $('<div>',{
            "data-role" : "footer",
            "data-theme" : "a",
            "data-position" : "fixed"
        });
        var footerHtml =  
            '<div data-role="navbar">'+
                '<ul>'+
                    '<li><a href="#" data-icon="bars">人气圈</a></li>'+
                    '<li><a href="daren/daren_list.html" rel="external" data-icon="grid">达人极客</a></li>'+
                    '<li><a href="#" data-icon="camera">相机</a></li>'+
                    '<li><a href="#" data-icon="shop">购物车</a></li>'+
                    '<li><a href="#" data-icon="user">我的</a></li>'+
                '</ul>'+
            '</div>';
        footer.append(footerHtml);
        $('[data-role="page"]').append(footer).trigger('create');
    }

    //默认为header加回退按钮和菜单
    var initBackBtnAndMenu = function(){
        var header = $('[data-role="header"]')
            .append(' <a href="#" data-rel="back" class="ui-btn ui-btn-left ui-alt-icon ui-nodisc-icon ui-corner-all ui-btn-icon-notext ui-icon-carat-l">Back</a>')
            .append(' <a href="#" data-rel="" class="ui-btn ui-btn-right ui-alt-icon ui-nodisc-icon ui-corner-all ui-btn-icon-notext ui-icon-bars">Back</a>');
        $('[data-role="page"]').append(header).trigger('create');

    }
    return {
    	buildLayout2Col : buildLayout2Col,
        buildFooter : buildFooter,
        buildHeader : initBackBtnAndMenu
    }
})();

$(document).bind("pagecreate",function(){
    wineApp.common.buildFooter();
    wineApp.common.buildHeader();
});
=======
>>>>>>> origin/master
