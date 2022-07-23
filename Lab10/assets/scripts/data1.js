var militaryData;

function loadData() {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "https://data.cityofnewyork.us/resource/rf3p-853x.json", true);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			militaryData = JSON.parse(ajax.responseText);
		}
	}
	ajax.send();
}

function militarySearch() {
	var searchParameter = document.getElementById('search_parameter').value;
	var search = document.getElementById('search').value;
	var results = "";

	if (search != null && search != "") {

		results += '<tr><th>Code number</th><th>Agency Description</th><th>Officer Name</th><th>Contact Number</th><th>email</th></tr>';

		militaryData.forEach(militarySign => {

			if (militarySign[searchParameter] != undefined && militarySign[searchParameter].toUpperCase().startsWith(search.toUpperCase())) {

				results += '<tr>';
				results += '<td>' + '<b>'+militarySign.agency_code+'</b>' + '</td>';
				results += '<td>' + '<b>'+militarySign.agency_description+'</b>' + '</td>';
				results += '<td>' + '<b>'+militarySign.military_liaison_officer+'</b>' + '</td>';
				results += '<td>' + '<b>'+militarySign.phone+'</b>' + '</td>';
				results += '<td>' + '<b>'+militarySign.email+'</b>' + '</td>';
				results += '</tr>';

			} 
		}); 
	} 
	document.getElementById('search_results').innerHTML = results;
}
