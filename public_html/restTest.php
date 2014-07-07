<?php
if(!isset($_COOKIE['user']))
{
header( 'Location: http://www.sociallyoutward.com' ) ;
}
?>

<html> <head>
<title>member REST Test</title>

<!--Size document to browser viewport-->
    <script src="js/windowDimensions.js" type="text/javascript"></script>
</head>

<body>
<h1>member REST Test</h1>

<div><p>Create</p>
<form action="php/iNodes.php" method="POST">
<span>name:</span><input type="text" name="name">
<span>parent:</span><input type="text" name="parent">
<input type="submit">
</form>
</div>
</body> 
</html>