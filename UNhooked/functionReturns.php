<?php 

function hello($name) {
if($name == 'Stella') {
	return 'Hello, Stella!<br />';
} else {

	return 'Hello, Stranger!<br />';

}

}

$greeting = hello('Mike');

echo $greeting;



function add_up($a, $b) {
	$arr = array(
		$a,
		$b,
		$a + $b,
		);
	return $arr;

}

$value = add_up(2, 4);

print_r($value);

echo "<br/>" . $value[0] . " + " . $value[1] . " = " . $value[2];
?>