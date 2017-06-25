var pageList = [];
var HTML = "<ul>";
var menu = "menu";
var homePage = ["Home", "http://example1.dev"];
var capitolQuiz = ["Quiz1", "http://example1.dev/CapQuiz.html"];
var certificationPage = ["Certified", "certificationPage.html"];
var colorsPage = ["Colors", "colors.html"];
var musicPage = ["Music", "musicPage.html"];
var picturePage = ["Pics", "picturePage.html"];
var quotesPage = ["Quotes", "quotes.html"];
var statesPage = ["States", "states.html"];
var studentSearch = ["JS Search", "studentSearch.html"];

pageList.push(homePage,
 capitolQuiz,
  certificationPage,
   colorsPage,
    musicPage,
     picturePage,
      quotesPage,
       statesPage,
       studentSearch);

function print(html, id) {
	var output = document.getElementById(id);
	output.innerHTML = html;
}

function layout() {
	for (var i = 0; i < pageList.length; i++) {
	
		HTML += "<li id='stylable'><a href=' " + pageList[i][1];
		HTML += " '> " + pageList[i][0];
		HTML += "</a></li>";
	}
	HTML += "</ul>";
	print(HTML, menu);
}

layout();


