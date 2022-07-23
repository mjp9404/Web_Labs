
// Function for choosing Cakes between Sheet cake and Round cake
function chooseCakes() {

	var cakeForm = document.getElementById('cakeType_select').value;

	document.getElementById('SheetType').classList.add('hide');
	document.getElementById('RoundType').classList.add('hide');
	document.getElementById('display').innerHTML = "";

	switch (cakeForm) {
		case "Sheet Cake":
			document.getElementById('SheetType').classList.remove('hide');
			break;
		case "Round Cake":
			document.getElementById('RoundType').classList.remove('hide');
			break;
		default:
			break;
	}
}

// Customer Information
var firstname = document.getElementById('c_fname').value;
var lastname = document.getElementById('c_lname').value;
var address = document.getElementById('c_address').value;
var postalCode = document.getElementById('c_postalCode').value;
var phoneNumber = document.getElementById('c_phone').value;
var email = document.getElementById('c_email').value;


// Function for Sheet Cake
function SheetOrder() {
	// Validate SheetCake types
	var sheetCake = "Sheet Cake";
	var cakeSheetType = document.querySelector('.cake_SheetType input:checked').value;
	var square = document.getElementById('Sheet_Square').value;
	var rectangular = document.getElementById('Sheet_Rectangular').value;
	// Validate layers, default values for size and price
	var SheetLayer = document.getElementById('scake_layer').value;
	var layer = " layer";
	var layers = " layers";
	var lengthofSheet = document.getElementById('sheet_Length').value;
	var widthofSheet = document.getElementById('sheet_Width').value;
	var minimumSize = 900.00;
	var basePrice = 18.00;
	var extraPrice = 0.02;

	// Validate the price of Sheet Cake with sheetType, Length, and Width
	var firstLayer = (lengthofSheet * widthofSheet);
	var SheetcakePrice = ((firstLayer - minimumSize) * extraPrice) + basePrice;
	var priceOfSheet = SheetcakePrice;


	// Select cake Sheet Type
	if (document.querySelector('.cake_SheetType input:checked') == null) {
		return;
	}
	if (cakeSheetType == square) {
		cakeSheetType = "(Square)";
	} else if (cakeSheetType == rectangular) {
		cakeSheetType = "(Rectangular)";
	}


	// Validate the price of Sheet Cake with sheetType, Length, and Width
	if (SheetLayer == 1) {
		priceOfSheet = SheetcakePrice;
		SheetLayer += layer;
	}
	else if (SheetLayer == 2) {
		priceOfSheet = SheetcakePrice + (SheetcakePrice / 2);
		SheetLayer += layers;
	}
	else if (SheetLayer == 3) {
		priceOfSheet = SheetcakePrice * 2;
		SheetLayer += layers;
	}


	// Validate Additional
	if (document.querySelectorAll('.choice input:checked') == null) {
		return;
	}
	var addSelectionInput = document.querySelectorAll('.choice input:checked');
	var adding = [
		["Cream Cheese iciing", 5],
		["Fruit and Almonds topping", 7],
		["Fruit jam filling between layers", 4],
	];

	// Display invoice of submission for Sheet Cake
	var totalPrice = priceOfSheet;
	var invoice = '<h2> Submission </h2>';
	invoice += '<p>' + 'Name: ' + firstname + " " + lastname + '</p>';
	invoice += '<p>' + 'Address: ' + address + '</p>';
	invoice += '<p>' + 'Postal Code: ' + postalCode + '</p>';
	invoice += '<p>' + 'Phone Number: ' + phoneNumber + '</p>';
	invoice += '<p>' + 'Email: ' + email + '</p>';
	invoice += '<h3> Your Order </h3>';
	invoice += '<p>' + sheetCake + ' ' + cakeSheetType + ' ' + '(L)' + lengthofSheet + 'cm ' + '(W)' + widthofSheet + 'cm with ' + SheetLayer + "  $" + priceOfSheet.toFixed(2) + '</p>';

	//loop through all selected Additional inputs
	for (let i = 0; i < addSelectionInput.length; i++) {
		var thisSelecte = addSelectionInput[i];
		var thisIndex = thisSelecte.value;
		var thisAdding = adding[thisIndex];
		var AddingName = thisAdding[0];
		var AddingPrice = adding[thisIndex][1];
		if (AddingName == "Cream Cheese iciing") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "Fruit and Almonds topping") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "Fruit jam filling between layers") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
	}
	invoice += '<p>' + '<b>Total Price: $' + totalPrice.toFixed(2) + '</b>' + '</p>' + '<br>';
	document.getElementById('display').innerHTML = invoice;

}


// Function for Round Cake
function RoundOrder() {

	// Validate RoundCakes
	var baseRoundCake = "Round Cake";
	var RoundLayer = document.getElementById('rcake_layer').value;
	var layer = " layer";
	var layers = " layers";
	var radius = document.getElementById('round_size').value;
	var minimumSize = 707;
	var basePrice = 15;
	var extraPrice = 0.02;
	var firstLayer = ((radius * radius) * 3.14);
	var cakePrice = ((firstLayer - minimumSize) * extraPrice) + basePrice;
	var priceOfRound = cakePrice;

	if (RoundLayer == 1) {
		priceOfRound = cakePrice;
		RoundLayer += layer;
	}
	else if (RoundLayer == 2) {
		priceOfRound = cakePrice + (cakePrice / 2);
		RoundLayer += layers;
	}
	else if (RoundLayer == 3) {
		priceOfRound = cakePrice * 2;
		RoundLayer += layers;
	}


	// Validate Additional
	if (document.querySelectorAll('.choice2 input:checked') == null) {
		return;
	}
	var addSelectionInput = document.querySelectorAll('.choice2 input:checked');
	var adding = [
		["Cream Cheese iciing", 5],
		["Fruit and Almonds topping", 7],
		["Fruit jam filling between layers", 4],
	];
	// Display invoice of submission for Round Cake
	var totalPrice = priceOfRound;
	var invoice = '<h2> Submission </h2>';
	invoice += '<p>' + 'Name: ' + firstname + " " + lastname + '</p>';
	invoice += '<p>' + 'Address: ' + address + '</p>';
	invoice += '<p>' + 'Postal Code: ' + postalCode + '</p>';
	invoice += '<p>' + 'Phone Number: ' + phoneNumber + '</p>';
	invoice += '<p>' + 'Email: ' + email + '</p>';
	invoice += '<h3> Your Order </h3>';
	invoice += '<p>' + baseRoundCake + ' ' + radius + 'cm with ' + RoundLayer + "  $" + priceOfRound.toFixed(2) + '</p>';
	
	//loop through all selected additional inputs
	for (let i = 0; i < addSelectionInput.length; i++) {
		var thisSelecte = addSelectionInput[i];
		var thisIndex = thisSelecte.value;
		var thisAdding = adding[thisIndex];
		var AddingName = thisAdding[0];
		var AddingPrice = adding[thisIndex][1];
		if (AddingName == "Cream Cheese iciing") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "Fruit and Almonds topping") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
		else if (AddingName == "Fruit jam filling between layers") {
			totalPrice += AddingPrice;
			invoice += '<p>' + AddingName + ': $' + AddingPrice + '</p>';
		}
	}
	invoice += '<p>' + '<b>Total Price: $' + totalPrice.toFixed(2) + '</b>' + '</p>' + '<br>';
	document.getElementById('display').innerHTML = invoice;

}







