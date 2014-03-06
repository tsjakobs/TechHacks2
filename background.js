document.write("Test");
chrome.alarms.create("Time",{"when":Date.now(),"periodInMinutes":1});
chrome.alarms.onAlarm.addListener(function notify(){
	
	chrome.cookies.getAll({ 'domain': 'reddit.com','session': true }, function(cookies) {
		var i=0;
		for(;i<cookies.length+1;i++){
			if (i<cookies.length&&cookies[i].name.substring(0,3)=="ext"){
				val = cookies[i].value;
				url = cookies[i].name.substring(3);
				update = checkData(url+".xml");
				if(udpate) notify(val);
			}
		}
	});
}
);
function notify(val){
	var havePermission = true;
	var curSite = 'reddit.com';
	
	chrome.notifications.create(
		'new alert!',{
		type:'basic',
		iconUrl:'reddit alien.jpg',
		title:"New Content on the Thread",
		message:"The thread on "+val+" has new content." 
		},
		
		function(){}
	);
}
function checkData(url){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.addEventListener('load',function(){
	  if(xhr.status === 200){
	  	XML = xhr.responseXML.getElementByTagName("item");
	  	for(i=1;i<XML.length-1;i++){
	      update = Date()<xhr.responseXML.getElementsByTagName("item")[i].getElementsByTagName("date")[0].innerHTML;
	      if(update) return update;
	  	}
	  }
	},false);
	xhr.send();
}