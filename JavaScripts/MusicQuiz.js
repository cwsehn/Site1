

function print( message, id ) {
	var output = document.getElementById(id);
	output.innerHTML = message;
}

function listEm( arr ) {
	var html = "<ol style='list-style-type: I;'>Questions...";

	for (var i = 0; i < arr.length; i++) {
		html += "<li>" + arr[i][0] + "</li>";
	}
	html += "</ol>";
	print(html, questionsID);
}

//clear();
alert("Let's test your musical knowledge.....press OK to begin....");
var HTML = "";
var quizID = "quiz";
var questionsID = "questions";
var correct = [];
var wrong = [];

var qList = [
	["How many keys are on a standard size piano?", "88"],
	["How many strings are on a contrabass?", "4"],
	["How many unique pitches are in a major triad?", "3"],
	["What is # called in musical terms?", "sharp"],
	["Which instrumental 'family' does the clarinet belong to?", "woodwind"]
];



for (var i = 0; i < qList.length; i++) {
	answer = prompt(qList[i][0]);
	if (answer.toUpperCase() === "Q") {
		break;
	} else if (answer.toLowerCase() == qList[i][1]) {
		correct.push([i, answer]);
	} else {
		wrong.push([i, answer]);
	}
}

HTML += "<h1 style='text-align:center'>Correct Answers:</h1>";
HTML += "<h2 style='text-align:center'>You had a total of  ";
HTML += correct.length + " Correct Answers...</h2>";
while (correct.length > 0) {
	var goodAnswer = correct.shift(); // return first item in correct array....[0, "88"]
	var qKey = goodAnswer[0];
	HTML += "<p style='text-align:center'>";
	HTML += qList[qKey][0] + " your answer was correct: " + goodAnswer[1];
	HTML += "</p>";
}

HTML += "<h1 style='text-align:center'>Wrong Answers:</h1>";
HTML += "<h2 style='text-align:center'>You answered  ";
HTML += wrong.length + " incorrectly...</h2>";
while (wrong.length > 0) {
	var wrongAnswer = wrong.shift(); // return first item in wrong array....[0, "44"]
	var qKey = wrongAnswer[0];
	HTML += "<p style='text-align:center'>";
	HTML += qList[qKey][0] + " you said: " + wrongAnswer[1] + "</p>";
	HTML += "<p style='text-align:center'>";
	HTML += "The correct answer is: " + qList[qKey][1];
	HTML += "</p>";
}


print(HTML, quizID);
listEm(qList);






