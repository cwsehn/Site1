var html = '';


function colorPick () {
	return Math.floor(Math.random() * 256);	
}

function randomRGB () {
	var rgbVal = "rgb(";
	rgbVal += colorPick() + ",";
	rgbVal += colorPick() + ",";
	rgbVal += colorPick() + ")";
	return rgbVal;
}

for ( var i = 0; i < 256; i++) {
	html += '<div style="background-color:' + randomRGB() + '"></div>';
}

document.write(html);
