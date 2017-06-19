<?php

function hello($arr) {

	if(is_array($arr)){
		foreach($arr as $name) {
			echo "Hello, $name! How are you? <br />\n";
		}
	} else {
		echo 'Hello, friends!';
	}
	
	//echo "Hello, $name!  How's it going?";
}


$names = array(
	'Stella',
	'Bleu',
	'Kitty',
	'Sweetie',
);

hello($names);

function defArg($name = 'friend', $time = Null) {

	if($time){
		echo "Hello, $name! Good $time. <br />";
	} else {
		echo "Hello, $name! <br />";
	}
}

defArg();
defArg('Stella', 'morning');


function get_info($name, $title = Null){
	if($title) {
		echo "$name has arrived, they are with us as a $title!<br />";
	} else {
		echo "$name has arrived.  Welcome!<br />";
	}
}

get_info('Stella');
get_info('Blue', 'Kitty');



?>