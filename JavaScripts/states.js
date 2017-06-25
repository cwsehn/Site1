// updated using an array of object literals...

function print(message, id) {
	var output = document.getElementById(id);
	output.innerHTML = message;
}

var js = "js";


var states = [
	{state: "Alabama", capitol: "Montgomery"},
	{state: "Alaska", captiol: "Juneau"},
	{state: "Arkansas", capitol: "Little Rock"},
	{state: "Georgia", capitol: "Atlanta"},
	{state: "Massachussetts", capitol: "Boston"},
	{state: "Maine", capitol: "Augusta"},
	{state: "Connecticut", capitol: "Hartford"},
	{state: "Vermont", capitol: "Montpelier"},
	{state: "New Hampshire", capitol: "Concord"},
	{state: "New Jersey", capitol: "Trenton"},
	{state: "New York", capitol: "Albany"},
	{state: "North Carolina", capitol: "Raleigh"},
	{state: "South Carolina", capitol: "Columbia"},
	{state: "Virginia", capitol: "Richmond"},
	{state: "Maryland", capitol: "Annapolis"},
	{state: "Pennsylvania", capitol: "Harrisburg"},
	{state: "Rhode Island", capitol: "Providence"},
	{state: "Florida", capitol: "Tallahassee"},
	{state: "Mississippi", capitol: "Jackson"},
	{state: "Louisiana", capitol: "Baton Rouge"},
	{state: "Texas", capitol: "Austin"},
	{state: "Tennessee", capitol: "Nashville"},
	{state: "Kentucky", capitol: "Frankfort"},
	{state: "West Virginia", capitol: "Charleston"},
	{state: "Ohio", capitol: "Columbus"},
	{state: "Indiana", capitol: "Indianapolis"},
	{state: "Iowa", capitol: "Des Moines"},
	{state: "Missouri", capitol: "Jefferson City"},
	{state: "Wisconsin", capitol: "Madison"},
	{state: "Minnesota", capitol: "Saint Paul"},
	{state: "North Dakota", capitol: "Bismarck"},
	{state: "South Dakota", capitol: "Pierre"},
	{state: "Montana", capitol: "Helena"},
	{state: "Washington", capitol: "Olympia"},
	{state: "Oregon", capitol: "Salem"},
	{state: "California", capitol: "Sacramento"},
	{state: "Arizona", capitol: "Phoenix"},
	{state: "New Mexico", capitol: "Santa Fe"},
	{state: "Nevada", capitol: "Carson City"},
	{state: "Colorado", capitol: "Denver"},
	{state: "Oklahoma", capitol: "Oklahoma City"},
	{state: "Nebraska", capitol: "Lincoln"},
	{state: "Kansas", capitol: "Topeka"},
	{state: "Utah", capitol: "Salt Lake City"},
	{state: "Wyoming", capitol: "Cheyenne"},
	{state: "Idaho", capitol: "Boise"},
	{state: "Michigan", capitol: "Lansing"},
	{state: "Hawaii", capitol: "Honolulu"},
	{state: "Illinois", capitol: "Springfield"},
	{state: "Delaware", capitol: "Dover"}
];


var HTML = "<p>";
HTML += states[7].state;
HTML += "</p>";

print(HTML, js);





