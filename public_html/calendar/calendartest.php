<?php

include "../dbconfig.php";


$sql   = 'SELECT * FROM Event';
    
$out = array();
$result = $connection->query($sql);


while($row = $result->fetch_assoc()){
    $out[] = array(
        'id' => $row['id'],
        'title' => $row['title'],
        'url' => 'extension of ' . $row['id'],
        'start' => strtotime($row['start']) . '000'
    );
}

echo json_encode(array('success' => 1, 'result' => $out));
exit;