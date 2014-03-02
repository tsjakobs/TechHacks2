chrome.cookies.getAll({ 'domain': 'reddit.com','session': true }, function(cookies) {
	var i=0;
	for(;i<cookies.length+1;i++){
		if (i<cookies.length&&cookies[i].name.substring(0,3)=="ext"){
			val = cookies[i].value;
			name = cookies[i].name.substring(3);
			document.write("<a href="+name+">"+val+"</a>");
			document.write("<br>");
			document.write("<br>");
		}
		else
			open();
	}
});
function open(){
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
}