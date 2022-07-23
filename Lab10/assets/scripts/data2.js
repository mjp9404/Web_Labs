var jobCenterData;


function loadData(){
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "https://data.cityofnewyork.us/resource/9d9t-bmk7.json", true);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			jobCenterData = JSON.parse(ajax.responseText);
		}
	}
	ajax.send();
}

function jobCenterSearch() {
	var searchParameter = document.getElementById('search_parameter').value;
	var search = document.getElementById('search').value;
	var results = "";

	if (search != null && search != "") {

		results += '<tr><th>Facility name</th><th>Street Address</th><th>City Name</th><th>Zip Code</th><th>Contact Number</th><th>Location of Map</th></tr>';

		jobCenterData.forEach(jobCenterSign => {

			if (jobCenterSign[searchParameter] != undefined && jobCenterSign[searchParameter].toUpperCase().startsWith(search.toUpperCase())) {

				results += '<tr>';
				results += '<td>' + '<b>'+jobCenterSign.facility_name +'</b>'+ '</td>';
				results += '<td>' + '<b>'+jobCenterSign.street_address +'</b>'+ '</td>';
				results += '<td>' + '<b>'+jobCenterSign.city +'</b>'+ '</td>';
				results += '<td>' + '<b>'+jobCenterSign.zip_code +'</b>'+ '</td>';
				results += '<td>' + '<b>'+jobCenterSign.phone_number_s +'</b>'+ '</td>';
				results += '<td>' + '<b>'+jobCenterSign.latitude +'(Lat)'+ ' '+ jobCenterSign.longitude+'(Lng)' +'</b>'+ '</td>';
				results += '</tr>';

			}
		}); 
	}

	document.getElementById('search_results').innerHTML = results;
}
