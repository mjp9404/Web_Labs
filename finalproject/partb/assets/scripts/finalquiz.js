

//Validate Question list
var QNumber = [];
var QTitle = [];
var QA = [];
var QB = [];
var QC = [];
var QD = [];

var quizQuestion;

var quizAnswerList = [];
var rightAnswer = [];
var quizAnswer;






// Functions LoadXML for finalQuiz
function loadXML() {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "./data/FinalQuiz.xml", true);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var rawXMLData = ajax.responseXML;
			quizQuestion = rawXMLData.getElementsByTagName('question');

			for (let i = 0; i < quizQuestion.length; i++) {
				QNumber.push(quizQuestion[i].getElementsByTagName('qnumber')[0].childNodes[0].nodeValue);
				QTitle.push(quizQuestion[i].getElementsByTagName('qtitle')[0].childNodes[0].nodeValue);
				QA.push(quizQuestion[i].getElementsByTagName('a')[0].childNodes[0].nodeValue);
				QB.push(quizQuestion[i].getElementsByTagName('b')[0].childNodes[0].nodeValue);
				QC.push(quizQuestion[i].getElementsByTagName('c')[0].childNodes[0].nodeValue);
				QD.push(quizQuestion[i].getElementsByTagName('d')[0].childNodes[0].nodeValue);
			}


			quizAnswerList = rawXMLData.getElementsByTagName('finalquiz');

			for (let j = 0; j < quizAnswerList.length; j++) {
				quizAnswer = quizAnswerList[j];

				QQ = quizAnswer.getElementsByTagName('rightanswers')[0].childNodes[0].nodeValue;
				rightAnswer = QQ.split(",");

			}

		}
	}

	ajax.send();
}

// Display Quiz
var results = "";
function findQuiz() {


	results += '<h2>' + 'Question ' + QNumber[0] + '</h2>';
	results += '<h3>' + QTitle[0] + '</h3>';
	results += '<div class = "Question0">';
	results += '<input type = "radio" id = "Q0a" name = "answer0" value = "a">' + QA[0] + '<br>';
	results += '<input type = "radio" id = "Q0b" name = "answer0" value = "b">' + QB[0] + '<br>';
	results += '<input type = "radio" id = "Q0c" name = "answer0" value = "c">' + QC[0] + '<br>';
	results += '<input type = "radio" id = "Q0d" name = "answer0" value = "d">' + QD[0] + '<br>';
	results += '</div>';


	/////////////////////////////////////////////////////////////////////
	results += '<h2>' + 'Question ' + QNumber[1] + '</h2>';
	results += '<h3>' + QTitle[1] + '</h3>';
	results += '<div class = "Question1">';
	results += '<input type = "radio" id = "Q1a" name = "answer1" value = "a">' + QA[1] + '<br>';
	results += '<input type = "radio" id = "Q1b" name = "answer1" value = "b">' + QB[1] + '<br>';
	results += '<input type = "radio" id = "Q1c" name = "answer1" value = "c">' + QC[1] + '<br>';
	results += '<input type = "radio" id = "Q1d" name = "answer1" value = "d">' + QD[1] + '<br>';
	results += '</div>';

	/////////////////////////////////////////////////////////////////////
	results += '<h2>' + 'Question ' + QNumber[2] + '</h2>';
	results += '<h3>' + QTitle[2] + '</h3>';
	results += '<div class = "Question2">';
	results += '<input type = "radio" id = "Q2a" name = "answer2" value = "a">' + QA[2] + '<br>';
	results += '<input type = "radio" id = "Q2b" name = "answer2" value = "b">' + QB[2] + '<br>';
	results += '<input type = "radio" id = "Q2c" name = "answer2" value = "c">' + QC[2] + '<br>';
	results += '<input type = "radio" id = "Q2d" name = "answer2" value = "d">' + QD[2] + '<br>';
	results += '</div>';



	/////////////////////////////////////////////////////////////////////
	results += '<h2>' + 'Question ' + QNumber[3] + '</h2>';
	results += '<h3>' + QTitle[3] + '</h3>';
	results += '<div class = "Question3">';
	results += '<input type = "radio" id = "Q3a" name = "answer3" value = "a">' + QA[3] + '<br>';
	results += '<input type = "radio" id = "Q3b" name = "answer3" value = "b">' + QB[3] + '<br>';
	results += '<input type = "radio" id = "Q3c" name = "answer3" value = "c">' + QC[3] + '<br>';
	results += '<input type = "radio" id = "Q3d" name = "answer3" value = "d">' + QD[3] + '<br>';
	results += '</div>'


	/////////////////////////////////////////////////////////////////////
	results += '<h2>' + 'Question ' + QNumber[4] + '</h2>';
	results += '<h3>' + QTitle[4] + '</h3>';
	results += '<div class = "Question4">';
	results += '<input type = "radio" id = "Q4a" name = "answer4" value = "a">' + QA[4] + '<br>';
	results += '<input type = "radio" id = "Q4b" name = "answer4" value = "b">' + QB[4] + '<br>';
	results += '<input type = "radio" id = "Q4c" name = "answer4" value = "c">' + QC[4] + '<br>';
	results += '<input type = "radio" id = "Q4d" name = "answer4" value = "d">' + QD[4] + '<br>';
	results += '</div>';

	results += '<br>';
	results += '<button onclick="showResult();" id="result" class="hide">Submit</button>';

	/////////////////////////////////////////////////////////////////////
	document.getElementById('search_results').innerHTML = results;
	document.getElementById('result').classList.remove('hide');

}




//Display results for final Quiz
function showResult() {
	var display = "";
	var grade = 0;
	var sfirstName = document.getElementById('s_fname').value;
	var slastName = document.getElementById('s_lname').value;
	var sStudentNumber = document.getElementById('s_number').value;
	var sEmail = document.getElementById('s_email').value;

	document.getElementById('display').classList.remove('hide');

	const group0 = document.querySelectorAll(".Question0");
	group0.forEach(group => {
		const select0 = group.querySelector('.Question0 input:checked');

		if(select0.value == rightAnswer[0]){
			grade++;
		}
		else if (select0.value != rightAnswer[0]){
			grade += 0;
		}
	
	});

	const group1 = document.querySelectorAll(".Question1");
	group1.forEach(group => {
		const select1 = group.querySelector('.Question1 input:checked');

		if(select1.value == rightAnswer[1]){
			grade++;
		}
		else if (select1.value != rightAnswer[1]){
			grade += 0;
		}
	
	});


	const group2 = document.querySelectorAll(".Question2");
	group2.forEach(group => {
		const select2 = group.querySelector('.Question2 input:checked');
		if(select2.value == rightAnswer[2]){
			grade++;
		}
		else if (select2.value != rightAnswer[2]){
			grade += 0;
		}
	
	});



	const group3 = document.querySelectorAll(".Question3");
	group3.forEach(group => {
		const select3 = group.querySelector('.Question3 input:checked');
		if(select3.value == rightAnswer[3]){
			grade++;
		}
		else if (select3.value != rightAnswer[3]){
			grade += 0;
		}
		
	});


	const group4 = document.querySelectorAll(".Question4");
	group4.forEach(group => {
		const select4 = group.querySelector('.Question4 input:checked');
		if(select4.value == rightAnswer[4]){
			grade++;
		}
		else if (select4.value != rightAnswer[4]){
			grade += 0;
		}

	});


	display += '<tr><th>Name</th><th>Student Number</th><th>Student Email</th><th>Grade</th><tr>';
	display += '<tr>';
	display += '<td>' + '<b>' + sfirstName + ' ' + slastName + '</b>' + '</td>';
	display += '<td>' + '<b>' + sStudentNumber + '</b>' + '</td>';
	display += '<td>' + '<b>' + sEmail + '</b>' + '</td>';
	display += '<td>' + '<b>' + 'Grade ' + grade + '/5' + '</b>' + '</td>';
	display += '</tr>';



	document.getElementById('display').innerHTML = display;
}