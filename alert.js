chrome.browserAction.onClicked.addListener(function(tab){
	var havePermission = true;
	var curSite = 'reddit.com';
	
	chrome.notifications.create(
		'new alert!',{
		type:'basic',
		iconUrl:'reddit alien.jpg',
		title:"New Content on the Thread",
		message:"The thread on "+curSite+" has new content." 
		},
		
		function(){
			
			if(havePermission){
				notification.show();
				notification.addListener(function(tab){
				});
			}
		}
	);
});



