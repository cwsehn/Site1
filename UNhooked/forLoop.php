<?php
echo "<h2>Pre-Ideration....</h2><br />";
$currentYear = date('Y');
$year = $currentYear - 100;

for ($year = $currentYear - 100; ++$year <= $currentYear;) {
  echo $year . "\n";
}


echo "<h2>Post-Ideration....</h2><br />";
$currentYear = date('Y');
$year = $currentYear - 100;

for ($year = $currentYear - 100; $year <= $currentYear; $year++) {
  echo $year . "\n";

}

echo "<h2>Cleaner Code and 1 less variable...same result...</h2><br />";

for ($year = date('Y') - 100; $year <= date('Y'); $year++) {
  echo $year . "\n";

}

for ($i = 1; $i < 101; $i++) {
  echo $i . "\n";
}

?>