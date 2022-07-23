    //Function getting Currency
function getOnCurrency() {

    //validate currency converting with each variable currency 
    var selectCurrency = document.getElementById('currency_on').value;
    var convertCurrency = document.getElementById('currency_to').value;
    var amountNumber = document.getElementById('amount').value;
    var getEuro;
    var getUs;
    var getCad;
    var getBit;
    var getEth;

    // display currency initials
    var currenEuro = "EUR";
    var currenUsd = "USD";
    var currenCad = "CAD";
    var currenBit = "BTC";
    var currenEth = "ETH";

    // Converting from Euro currency
    if (selectCurrency == "Euro") {

        switch (convertCurrency) {

            case "Euro":
                getEuro = parseInt(amountNumber) * 1;
                document.getElementById('conValue').value = getEuro.toFixed(2) + ' ' + currenEuro + ' (1:1)';
                break;
            case "US":
                getUs = parseInt(amountNumber) * 1.10;
                document.getElementById('conValue').value = getUs.toFixed(2) + ' ' + currenUsd + ' (1.10:1)';


                break;
            case "CAD":
                getCad = parseInt(amountNumber) * 1.40;
                document.getElementById('conValue').value = getCad.toFixed(2) + ' ' + currenCad + ' (1.40:1)';


                break;
            case "Bitcoin":
                getBit = parseInt(amountNumber) * 0.000028;
                document.getElementById('conValue').value = getBit.toFixed(2) + ' ' + currenBit + ' (0.000028:1)';


                break;
            case "Ethereum":
                getEth = parseInt(amountNumber) * 0.00042;
                document.getElementById('conValue').value = getEth.toFixed(2) + ' ' + currenEth + ' (0.00042:1)';
                break;
        }
    }
    // Converting from USD currency
    if (selectCurrency == "US") {

        switch (convertCurrency) {

            case "Euro":
                getEuro = parseInt(amountNumber) * 0.91;
                document.getElementById('conValue').value = getEuro.toFixed(2) + ' ' + currenEuro + ' (0.91:1)';
                break;
            case "US":
                getUs = parseInt(amountNumber) * 1;
                document.getElementById('conValue').value = getUs.toFixed(2) + ' ' + currenUsd + ' (1:1)';


                break;
            case "CAD":
                getCad = parseInt(amountNumber) * 1.28;
                document.getElementById('conValue').value = getCad.toFixed(2) + ' ' + currenCad + ' (1.28:1)';


                break;
            case "Bitcoin":
                getBit = parseInt(amountNumber) * 0.000026;
                document.getElementById('conValue').value = getBit.toFixed(2) + ' ' + currenBit + ' (0.000026:1)';


                break;
            case "Ethereum":
                getEth = parseInt(amountNumber) * 0.00038;
                document.getElementById('conValue').value = getEth.toFixed(2) + ' ' + currenEth + ' (0.00038:1)';
                break;
        }
    }
    // Converting from CAD currency
    if (selectCurrency == "CAD") {

        switch (convertCurrency) {

            case "Euro":
                getEuro = parseInt(amountNumber) * 0.71;
                document.getElementById('conValue').value = getEuro.toFixed(2) + ' ' + currenEuro + ' (0.71:1)';
                break;
            case "US":
                getUs = parseInt(amountNumber) * 0.78;
                document.getElementById('conValue').value = getUs.toFixed(2) + ' ' + currenUsd + ' (0.78:1)';


                break;
            case "CAD":
                getCad = parseInt(amountNumber) * 1;
                document.getElementById('conValue').value = getCad.toFixed(2) + ' ' + currenCad + ' (1:1)';


                break;
            case "Bitcoin":
                getBit = parseInt(amountNumber) * 0.000020;
                document.getElementById('conValue').value = getBit.toFixed(2) + ' ' + currenBit + ' (0.000020:1)';


                break;
            case "Ethereum":
                getEth = parseInt(amountNumber) * 0.00030;
                document.getElementById('conValue').value = getEth.toFixed(2) + ' ' + currenEth + ' (0.00030:1)';
                break;
        }
    }
    // Converting from Bitcoin currency
    if (selectCurrency == "Bitcoin") {

        switch (convertCurrency) {

            case "Euro":
                getEuro = parseInt(amountNumber) * 35713.66;
                document.getElementById('conValue').value = getEuro.toFixed(2) + ' ' + currenEuro + ' (35713.66:1)';
                break;
            case "US":
                getUs = parseInt(amountNumber) * 39168.30;
                document.getElementById('conValue').value = getUs.toFixed(2) + ' ' + currenUsd + ' (39168.30:1)';


                break;
            case "CAD":
                getCad = parseInt(amountNumber) * 49995.98;
                document.getElementById('conValue').value = getCad.toFixed(2) + ' ' + currenCad + ' (49995.98:1)';


                break;
            case "Bitcoin":
                getBit = parseInt(amountNumber) * 1;
                document.getElementById('conValue').value = getBit.toFixed(2) + ' ' + currenBit + ' (1:1)';


                break;
            case "Ethereum":
                getEth = parseInt(amountNumber) * 14.92;
                document.getElementById('conValue').value = getEth.toFixed(2) + ' ' + currenEth + ' (14.92:1)';
                break;
        }
    }
    // Converting from Ethereum currency
    if (selectCurrency == "Ethereum") {


        switch (convertCurrency) {

            case "Euro":
                getEuro = parseInt(amountNumber) * 2393.64;
                document.getElementById('conValue').value = getEuro.toFixed(2) + ' ' + currenEuro + ' (2393.64:1)';
                break;
            case "US":
                getUs = parseInt(amountNumber) * 2625.35;
                document.getElementById('conValue').value = getUs.toFixed(2) + ' ' + currenUsd + ' 2625.35:1)';


                break;
            case "CAD":
                getCad = parseInt(amountNumber) * 3350.98;
                document.getElementById('conValue').value = getCad.toFixed(2) + ' ' + currenCad + ' (3350.98:1)';


                break;
            case "Bitcoin":
                getBit = parseInt(amountNumber) * 0.067;
                document.getElementById('conValue').value = getBit.toFixed(2) + ' ' + currenBit + ' ( 0.067:1)';


                break;
            case "Ethereum":
                getEth = parseInt(amountNumber) * 1;
                document.getElementById('conValue').value = getEth.toFixed(2) + ' ' + currenEth + ' (1:1)';
                break;
        }
    }
}
