function test(){
	var count=0;
	var url;
	var title;
	chrome.tabs.executeScript({
		"code": "document.getElementById('shortlink-text').value;"
	}, function(selection){
		chrome.tabs.executeScript({
			"code": "document.title;"
		}, function(result){
				url = selection[0];
				title = result[0].substring(0,result[0].lastIndexOf(':')-1);
				chrome.cookies.set({"url": "http://www.reddit.com","domain":"reddit.com","name":"ext"+url,"value":""+title});
			}
		);
	});
}
// Create a parent item and two children.
var showForPages = ["*://www.reddit.com/*"];
var add = chrome.contextMenus.create({"title": "Add to watchlist", "documentUrlPatterns":showForPages, "onclick":test});