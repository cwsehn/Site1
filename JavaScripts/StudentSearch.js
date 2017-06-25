function print(message, id){
  output = document.getElementById(id);
  output.innerHTML = message;
}


var HTML = "";
var search = "";

while (search.toLowerCase() != "q")  {
  search = prompt("Who you lookin' for?...type 'q' to end search...");  

  for (var i = 0; i < students.length; i++) {
      var student = students[i];
    
      if (search.toLowerCase() === student.name.toLowerCase()) {  
        HTML += "<h2>Student: " + student.name + "</h2><ul>"; 
        for (var property in student) {     
          HTML += "<li>" + property + ": " + student[property] + "</li>"; 
        }
        HTML += "</ul>";
        print(HTML, "output");
        search = "q";
      }   
  }
}  



