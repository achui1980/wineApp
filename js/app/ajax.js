var wineApp = wineApp || {};
wineApp.ajax = (function(){
    function doAjax(url, method, params, successCallback, failCallback) {
        var fullUrl = wineApp.CONFIG.CONSTANTS.PROTOCOL 
                + wineApp.CONFIG.CONSTANTS.HOST + ':' 
                + wineApp.CONFIG.CONSTANTS.PORT + '/' 
                + wineApp.CONFIG.CONSTANTS.APP + '/' 
                + url;
        console.log(fullUrl);
        $.ajax({
                url: fullUrl,
                type: method,
                //dataType: 'json',
                data: params,
            })
            .done(successCallback)
            .fail(failCallback);
    }

    var doGet = function(url, successCallback, failCallback) {
        doAjax(url, 'get', {}, successCallback, failCallback);
    };

    var doPost = function(url, params, successCallback, failCallback) {
        doAjax(url, 'post', params, successCallback, failCallback);
    }; 

    var doPut = function(url, params, successCallback, failCallback) {
     	doAjax(url, 'put', params, successCallback, failCallback);
 	};

 	var doDel = function(url, params, successCallback, failCallback) {
     	doAjax(url, 'delete', params, successCallback, failCallback);
 	};

 	return {
 		get : doGet,
 		post: doPost,
 		put: doPut,
 		del: doDel
 	}

})();
