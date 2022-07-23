// Function for choosing search type
function chooseSearchType() {

    var searchForm = document.getElementById('search_Type').value;

    document.getElementById('search_id').classList.add('hide');
    document.getElementById('search_name').classList.add('hide');
    document.getElementById('search_phone').classList.add('hide');
    document.getElementById('display').innerHTML = "";

    switch (searchForm) {
        case "searchId":
            document.getElementById('search_id').classList.remove('hide');
            break;
        case "searchName":
            document.getElementById('search_name').classList.remove('hide');
            break;
        case "searchPhone":
            document.getElementById('search_phone').classList.remove('hide');
            break;
        default:
            break;
    }
}

var clientList;

// Function for Loadin JSON
function loadJSON() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "/data/ClientData.json", true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var rawJsonData = ajax.responseText;
            clientList = JSON.parse(rawJsonData);
        }
    }
    ajax.send();

}

// Function for finding Client's ID
function findClientById() {
    var search = document.getElementById('c_id').value;
    var results = "";
    if (search != null && search != "") {

        results += "<tr><th>ID</th><th>Name</th><th>Address</th><th>PostalCode</th><th>Phone</th><th>Type</th></tr>";

        clientList.forEach(client => {

            if (client.id == search) {
                results += "<tr>";
                results += "<td>" + client.id + "</td>";
                results += "<td>" + client.firstName + client.lastName + "</td>";
                results += "<td>" + client.address + "</td>";
                results += "<td>" + client.postalCode + "</td>";
                results += "<td>" + client.phone + "</td>";
                results += "<td>" + client.type + "</td>";
                results += "</tr>";

            }
        });

        document.getElementById('display').innerHTML = results;
    }
}

// Function for finding Client's Name
function findClientByName() {
    var search = document.getElementById('c_lname').value;
    var results = "";
    if (search != null && search != "") {

        results += "<tr><th> ID </th><th> Name </th><th> Address </th><th> PostalCode </th><th> Phone </th><th> Type </th></tr>";

        clientList.forEach(client => {

            if (client.lastName.toUpperCase().startsWith(search.toUpperCase())) {
                results += "<tr>";
                results += "<td>" + client.id + "</td>";
                results += "<td>" + client.firstName + " " + client.lastName + "</td>";
                results += "<td>" + client.address + "</td>";
                results += "<td>" + client.postalCode + "</td>";
                results += "<td>" + client.phone + "</td>";
                results += "<td>" + client.type + "</td>";
                results += "</tr>";
            }
        });

        document.getElementById('display').innerHTML = results;
    }
}

// Function for message to notify
function message1() {
    var messageBox = document.getElementById('message1');
    messageBox.textContent = "(Fill in '-')";
}
// Function for finding Client's Phone Number
function findClientByPhone() {
    var search = document.getElementById('c_phone').value;
    var results = "";
    if (search != null && search != "") {

        results += "<tr><th>ID</th><th>Name</th><th>Address</th><th>PostalCode</th><th>Phone</th><th>Type</th></tr>";

        clientList.forEach(client => {

            if (client.phone == search) {
                results += "<tr>";
                results += "<td>" + client.id + "</td>";
                results += "<td>" + client.firstName + client.lastName + "</td>";
                results += "<td>" + client.address + "</td>";
                results += "<td>" + client.postalCode + "</td>";
                results += "<td>" + client.phone + "</td>";
                results += "<td>" + client.type + "</td>";
                results += "</tr>";

            }
        });
        document.getElementById('display').innerHTML = results;
    }
}