<?php
include "../dbconfig.php";

$id = $_GET['id'];

$sql = "SELECT * FROM Event WHERE id='$id'";
$result = $connection->query($sql);
$row = $result->fetch_assoc();

echo $row['id'];
echo '</br>';
echo $row['title'];
echo '</br>';
echo $row['start'];
echo '</br>';
echo $row['end'];
echo '</br>';
echo $row['description'];
echo '</br>';
echo $row['pubpriv'];
echo '</br>';
echo $row['primaryInterest'];
echo '</br>';

?>
<html>
	<head>
	</head>
	<body>
		<button id="atmc">Add To My Calendar</button>
	</body>

</html>
