var wineApp = wineApp || {}
wineApp.testPage = function() {
	
    return {
        init: function() {
            initHuodong();
        }
    }
}()

$(document).ready(function() {
	wineApp.homePage.init();
});
