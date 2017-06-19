// For the Crown Quiz game...

var correct = 0;
var Q1 = prompt("What is the Capitol of Minnesota?");
var Q2 = prompt("What is the Capitol of Wisconsin?");
var Q3 = prompt("What is the Capitol of New York?");
var Q4 = prompt("What is the Captitol of Florida?");
var Q5 = prompt("What is the Capitol of Texas?");

if (Q1.toUpperCase() === "SAINT PAUL" || Q1.toUpperCase() === "ST. PAUL" || Q1.toUpperCase() === "ST PAUL"){ 
  correct += 1;
}
if (Q2.toUpperCase() === "MADISON") {
    correct += 1; 
}
if (Q3.toUpperCase() === "ALBANY") {
    correct += 1; 
}
if (Q4.toUpperCase() === "TALLAHASSEE") {
    correct += 1;
}
if (Q5.toUpperCase() === "AUSTIN") {
    correct += 1; 
}

if (correct === 5) {
    alert("You win the GOLD CROWN!!!!....You are most knowledgeable and Praiseworthy!!....");
}
else if (correct > 2) {
    alert("Congratulations!  You win the silver crown....with a little practice, it could turn to gold...");
}
else if (correct === 1) {
    alert("One right out of Five....Wear your new Bronze Crown to the library...AND HIT THE BOOKS!!!");
}
else {
  alert("Whoa Dude....where are you from?....obviously not the USA.....better luck next quiz....");
}

var answers = document.write("<h3>Answer Key:</h3></br><p>The Capitol of Minnesota is St. Paul....You answered " + Q1);
answers += document.write("</br>The Capitol of Wisconsin is Madison....You answered " + Q2);
answers += document.write("</br>The Capitol of New York is Albany....You answered " + Q3);
answers += document.write("</br>The Capitol of Florida is Tallahassee....You answered " + Q4);
answers += document.write("</br>The Capitol of Texas is Austin....You answered " + Q5 + "</p>");