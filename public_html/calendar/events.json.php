<?php

include "../dbconfig.php";

$from = $_REQUEST['from']/1000;
$to = $_REQUEST['to']/1000;
//$sql   = "SELECT * FROM Event where `start` BETWEEN '$from' and '$to'";

//echo $connection->real_escape_string(date('Y-m-d', $from)); //make the sql call w/ from and to
$startDate = $connection->real_escape_string(date('Y-m-d', $from));
$endDate = $connection->real_escape_string(date('Y-m-d', $to));


$sql   = "SELECT * FROM Event WHERE `start` BETWEEN '$startDate' and '$endDate'";
$out = array();
$result = $connection->query($sql);


while($row = $result->fetch_assoc()){
    $out[] = array(
        'id' => $row['id'],
        'title' => $row['title'],
        'url' => 'extension of ' . $row['id'],
        'class' =>'event-success',
        'start' => strtotime($row['start']) . '000',
        'end' => strtotime($row['end']) . '000'
    );
}

echo json_encode(array('success' => 1, 'result' => $out));
exit;