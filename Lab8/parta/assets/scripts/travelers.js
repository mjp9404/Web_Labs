
initialize();
initialize2();
initialize3();

// Functions for the first caption of the lists
function initialize(){
	var travel1 = document.getElementById('travel1');
	travel1.addEventListener('mouseover', loadContent);
	travel1.addEventListener('mouseout', removeContent);
}

function loadContent(){

	var ajax = new XMLHttpRequest();

	ajax.open('GET', './data/travelcontent.html', true);

	ajax.onreadystatechange = function() {
		if( ajax.readyState == 4 && ajax.status == 200 ){
			var rawData = ajax.responseText;
			document.getElementById('caption1').innerHTML = rawData;
		}
	}
	ajax.send();

}
function removeContent(){
	document.getElementById('caption1').innerHTML = '';
	

}

// Functions for the second caption of the lists
function initialize2(){
	var travel2 = document.getElementById('travel2');
	travel2.addEventListener('mouseover', loadContent2);
	travel2.addEventListener('mouseout', removeContent2);
}

function loadContent2(){

	var ajax = new XMLHttpRequest();

	ajax.open('GET', './data/travelcontent2.html', true);

	ajax.onreadystatechange = function() {
		if( ajax.readyState == 4 && ajax.status == 200 ){
			var rawData = ajax.responseText;
			document.getElementById('caption2').innerHTML = rawData;
		}
	}
	ajax.send();
}
function removeContent2(){
	document.getElementById('caption2').innerHTML = '';
	

}
// Functions for the third caption of the lists
function initialize3(){
	var travel3 = document.getElementById('travel3');
	travel3.addEventListener('mouseover', loadContent3);
	travel3.addEventListener('mouseout', removeContent3);
}

function loadContent3(){

	var ajax = new XMLHttpRequest();

	ajax.open('GET', './data/travelcontent3.html', true);

	ajax.onreadystatechange = function() {
		if( ajax.readyState == 4 && ajax.status == 200 ){
			var rawData = ajax.responseText;
			document.getElementById('caption3').innerHTML = rawData;
		}
	}
	ajax.send();
}

function removeContent3(){
	document.getElementById('caption3').innerHTML = '';
	

}