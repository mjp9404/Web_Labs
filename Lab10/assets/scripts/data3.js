var schoolData;

function loadData(){
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "https://data.cityofnewyork.us/resource/23z9-6uk9.json", true);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			schoolData = JSON.parse(ajax.responseText);
		}
	}
	ajax.send();
}

function schoolSearch() {
	var searchParameter = document.getElementById('search_parameter').value;
	var search = document.getElementById('search').value;
	var results = "";

	if (search != null && search != "") {
		results += '<tr><th>School name</th><th>City Name</th><th>Post code</th><th>Contact Number</th><th>Location</th></tr>';
		schoolData.forEach(schoolSign => {

			if (schoolSign[searchParameter] != undefined && schoolSign[searchParameter].toUpperCase().startsWith(search.toUpperCase())) {

				results += '<tr>';
				results += '<td>' +'<b>'+ schoolSign.school_name +'</b>'+ '</td>';
				results += '<td>' +'<b>'+ schoolSign.city+'</b>'+ '</td>';
				results += '<td>' +'<b>'+ schoolSign.postcode +'</b>'+ '</td>';
				results += '<td>' +'<b>'+ schoolSign.phone_number+' '+schoolSign.fax_number +'</b>'+ '</td>';
				results += '<td>' +'<b>'+ schoolSign.location +'</b>'+ '</td>';
				results += '</tr>';
			} 
		}); 
	} 
	document.getElementById('search_results').innerHTML = results;
}