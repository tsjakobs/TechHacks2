time = setDate();
var val = "tmp";


chrome.alarms.create("Time",{"when":Date.now(),"periodInMinutes":1});
chrome.alarms.onAlarm.addListener(function getCookies(){
	time = setDate();
	var update = "Failed";
	chrome.cookies.getAll({ 'domain': 'reddit.com','session': true }, function(cookies) {
		var i=0;
		for(;i<cookies.length+1;i++){
			if (i<cookies.length&&cookies[i].name.substring(0,3)=="ext"){
				val = cookies[i].value;
				url = cookies[i].name.substring(3);
				checkData(url+".xml");
			}
		}
	});
});
function setDate(){
	var m_names = new Array("January", "February", "March", 
		"April", "May", "June", "July", "August", "September", 
		"October", "November", "December");
	var mydate = new Date();
	var curr_date = mydate.getDate();
	if(curr_date<10) curr_date = "0"+curr_date;
	var curr_month = mydate.getMonth()+1;
	if(curr_month<10) curr_month = "0"+curr_month;
	var curr_year = mydate.getFullYear();
	var mydatestr = '' + curr_year  + '-' +
	curr_month + '-' + 
	curr_date+ 'T' +
	mydate.getUTCHours() + ':' +
	mydate.getMinutes() + ':' + 
	mydate.getSeconds();
	time = mydatestr;
}
function notify(val){
	var havePermission = true;
	var curSite = 'reddit.com';
	
	chrome.notifications.create(
		'new alert!',{
		type:'basic',
		iconUrl:'reddit alien.jpg',
		title:"New Content on the Thread",
		message:"The thread on "+val+" has new content.", 
		},
		
		function(){}
	);
}
function checkData(url){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.addEventListener('load',function(){
	  if(xhr.status === 200){
	  	XML = xhr.responseXML.getElementsByTagName("item");
	  	for(i=1;i<XML.length;i++){
	  		post = time<XML[i].getElementsByTagName("date")[0].innerHTML;
	  		 
			if(time<XML[i].getElementsByTagName("date")[0].innerHTML)
				notify(val);
	  	}
	  }
	},false);
	xhr.send();
}