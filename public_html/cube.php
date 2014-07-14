 <?php
if(!isset($_COOKIE['user']))
{
    header('location: index.php');
}

require 'fbconfig.php';
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>cube</title>
    <link href="css/cube.css" rel="stylesheet" type="text/css">
    <link href="css/hexaflip.css" rel="stylesheet" type="text/css">
</head>
<body>

<!-- rotates horizontal -->
<div class="cubeContainer">
    <div id="horz-controls">
        <div><img src="assets/left.png" height="30px" /></div>
        <div><img src="assets/right.png" height="30px" /></div>
    </div>
    <div id="horz-demo"></div>
</div>
 
    <script src="js/hexaflip.js"></script>
    <script src="js/cube.js"></script>
    <script>
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-30392798-1']);
        _gaq.push(['_trackPageview']);
        (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>
</body>
</html>
