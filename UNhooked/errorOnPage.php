<?php
// Report simple running errors
error_reporting(E_ALL);
// Make sure they're on screen
ini_set('display_errors', 1);
// HTML formatted errors
ini_set("html_errors", 1);


//example error in code....line 14 - $errors should be $error_levels
$error_levels = array("E_ALL", "E_NOTICE", "E_WARNING", "E_ERROR",
                      "E_STRICT", "E_DEPRECATED", "E_PARSE");

foreach ($errors as $error){
  echo $error."<br />";
  
}

$test=3;

if ($test>1) {

 trigger_error("Value must be buh or below");

}