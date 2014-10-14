<?php


include "../dbconfig.php";

$name = $_POST['name'];
$start = $_POST['start'];
$end = $_POST['end'];

$query = "INSERT INTO Event (title,start,end) VALUES ('$name','$start','$end')";

$connection ->query($query);

if($connection === false) {
  trigger_error('Wrong SQL: ' . $query . ' Error: ' . $connection->error, E_USER_ERROR);
}