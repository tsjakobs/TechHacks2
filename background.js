chrome.alarms.create("Time",{"when":Date.now(),"periodInMinutes":1});
chrome.alarms.onAlarm.addListener(function notify(){
	var havePermission = true;
	var curSite = 'reddit.com';
	
	chrome.notifications.create(
		'new alert!',{
		type:'basic',
		iconUrl:'reddit alien.jpg',
		title:"New Content on the Thread",
		message:"The thread on "+curSite+" has new content." 
		},
		
		function(){}
	);
}
);
