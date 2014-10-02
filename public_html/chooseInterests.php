<?php
require 'permissionChecks.php';
require 'getLogout.php';
?>
<html>
<head>
    <title>Choose Interests</title>
    
    <?php readfile('linkedfiles.php') ?>
    <script src="http://code.createjs.com/createjs-2013.02.12.min.js"></script>
    <script src="js/bubbles/dbinitialize2.js"></script>
    <script src="js/bubbles/resize.js"></script>
    <script src="js/bubbles/dbbubble.js"></script>
    <script src="js/clearInterests.js"></script>
    <script src="js/sideMenu.js"></script>
    <script type="text/javascript" src="js/slideBulletinMenu.js"></script>
    <script type="text/javascript" src="js/ajaxCacher.js"></script>

</head>
<?php
// flush the buffer
flush();
?>
<body>
    <?php include 'nav.php' ?>
	    
	    <div id='content' class='row'>
		<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
		    <div id='can'>
			<canvas width='460px' height='500px' id='myCanvas'></canvas>
		    </div>
		</div>
		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
			<canvas width='230px' height='580px' id='navCanvas'></canvas>
		</div><!-- end #content and end .row-->
	    
	    <div id='user' hidden='true'><?php  print_r($_COOKIE['user']); ?></div>
	    
	</div><!-- end .row -->
    </div><!-- end .container-->

</body>
</html>