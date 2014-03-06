function notify_me(){
	var havePermission = true;
	var curSite = 'reddit.com';
	
	notification = chrome.notifications.create(
		'new alert!',{
		type:'basic',
		iconUrl:'reddit alien.jpg',
		title:"New Content on the Thread",
		message:"The thread on "+curSite+" has new content." 
		},
		
		function(){
		}
	);
	notification.show();
}



