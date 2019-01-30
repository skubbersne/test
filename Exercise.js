function insertText(){
	document.getElementById("newContent").innerHTML = "Some new text: <br> HELLO <br>";
}

function goWiki(){
	window.open("https://en.wikipedia.org/wiki/Bluetooth","_system");
}

function openBrowser(url) {
   //var url = 'https://cordova.apache.org';
   var target = '_blank';
   var options = "location = yes"
   var ref = cordova.InAppBrowser.open(url, target, options);
}
function calculate(){
	var t = widthBox.value;
	//read from the textBoxs
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lenghtBox").value;
    var h = document.getElementById("heightBox").value;
	//convert to Float
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	var result = w*l*h;
	//show result in div
	document.getElementById("result").innerHTML = result;
}
function multiplication(){
	//read from texBox
	document.getElementById("mult-tb").innerHTML ="";
	var f = document.getElementById("factor").value;
	if(f=="") alert("Put in a number");
	for(var i=1;i<=10;i++){
		 var res=f*i;
		 //show result in div
		document.getElementById("mult-tb").innerHTML += res+"<br/>";
	}
}





function retur(){
	window.location.href = "index.html";
}	
	