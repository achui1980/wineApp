var wineApp = wineApp || {}
wineApp.homePage = function() {
	//初始化活动信息
    var initHuodong = function() {
        var owlDemo = $('#owl-demo');
        var img = '<div class="item"><img src="images/slides/tree.jpg" alt="GTA V"></div>'
        owlDemo.append(img);
        //初始化图片轮播
        $("#owl-demo").owlCarousel({
            navigation: false, // Show next and prev buttons
            autoPlay: 3000,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
        });
    }

    return {
        init: function() {
            initHuodong();
        }
    }
}()

$(document).ready(function() {
	wineApp.homePage.init();
});
