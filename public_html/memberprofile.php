<?php
if(!isset($_COOKIE['user']))
    {
	header('location: index.php');
    }
require 'fbconfig.php';
?>
<html>
<head>
    <title>My Profile</title>
    
    <!-- Bootstrap 3.1.1. Latest compiled and minified CSS -->
    <link rel='stylesheet' href='http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css'>
    
    <!-- JQuery -->
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
    
    <!-- Bootstrap 3.1.1 Latest compiled and minified JavaScript -->
    <script src='http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js'></script>
    
    <!-- Socially Outward Styles -->
    <link href='css/memberProfile.css' type='text/css' rel='stylesheet'>
    <link href='css/navigationTemplate.css' type='text/css' rel='stylesheet'>
    <link href='css/styles.css' type='text/css' rel='stylesheet'>
    <link href='css/webPosition.css' type='text/css' rel='stylesheet'>
    <link href="css/boxTransition.css" type="text/css" rel="stylesheet"/>
    <link href="css/SO-status.css" type="text/css" rel="stylesheet"/>
    <link href="css/activityFeed.css" type="text/css" rel="stylesheet"/>
    <link href="css/activitySidebar.css" type="text/css" rel="stylesheet">
    <link type="text/css" href="css/bulletinBoxStyle.css" rel="stylesheet" />
    
    <link rel='icon' href='assets/logo.png'>
    
    <script src='http://code.createjs.com/createjs-2013.12.12.min.js'></script>
    <script src='http://code.createjs.com/createjs-2013.02.12.min.js'></script>
    
    <script src='js/bubbles/dbinitialize2.js'></script>
    <script src='js/bubbles/resize.js'></script>
    <script src='js/bubbles/dbbubble.js'></script>
    <script type="text/javascript" src="js/ajaxCacher.js"></script>
    <script src='js/clearInterests.js'></script>
    <script type='text/javascript' src='js/showMenu.js'></script>
    <script src='js/sideMenu.js'></script>
    <script type="text/javascript" src="js/slideBulletinMenu.js"></script>
    <script src="js/modernizr.custom.js"></script>
    
    <!--Size document to browser viewport-->
    <script src="js/windowDimensions.js" type="text/javascript"></script>
</head>
<?php
// flush the buffer
flush();
?>

<body>
    <div class='container'>
	<nav class='navbar navbar-default navbar-fixed-top' role='navigation'>
	    <div class='container-fluid'>
	      <!-- Brand and toggle get grouped for better mobile display -->
	      <div class='navbar-header'>
		<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
		  <span class='sr-only'>Toggle navigation</span>
		  <span><img src='assets/toggle_down.png' height='15px'</span>
		</button>
		<a class='navbar-brand' href='memberprofile.php'><img src='assets/brand.png' height='60px' /></a>
	      </div>
		
	      <!-- Collect the nav links, forms, and other content for toggling -->
	      <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
		<ul class='nav navbar-nav'>
		  <li><a href='calendar/events.php'>Events</a></li>
		  <li><a href='neighbors.php'>Neighbors</a></li>
		  <li><a href='community.php'>Community</a></li>
		  <li>
		    <div id="bulletinBox">
		  		<div id="topBox">
			    	<p id="appendTarget"style="color:white;">Bulletin Board <img src="../assets/right_arrow.png" height="12px" width="12px"></p>
			    </div>	
			    <div id="bottomBox">
			        <p id="firstOne"><a href="../feed/bulletin.php">&nbsp;Updates</a></p>
			        <p id="secondOne"><a href="../feed/bulletin.php">Promotions</a></p>
			        <p id="thirdOne"><a href="../feed/bulletin.php">Events</a></p>
			    </div>
		    </div>
		  </li>
		</ul>
		<p class='navbar-text navbar-right hidden-sm hidden-xs'>explore your community</p>
	      </div><!-- /.navbar-collapse -->
	    </div><!-- /.container-fluid -->
	</nav>
	
	<div class='row'>
	    
	    <!--Absolute Position on Md/Lg Screen-->
	    <div id='absolute' class='hidden-xs'>
		<div class='col-xs=2'>
		    <img src='assets/toggle_empty.png' height='30px'/>
		</div>
		<div class='col-xs-10'>
		    <div id='sideNav side-Navigation' class='sNav'>
			<div id='sNav-inner'>
			<p id='name' class='pushover'><?php echo $fbfullname; ?></p>
			<img id='profpic' class='spaceUnder pushover' src='https://graph.facebook.com/<?php echo $user; ?>/picture?height=350&width=350'>
			<ul class='po'>
			    <li class='spaceUnder'><a href='memberprofile.php'>Home</a></li>
			    <li class='spaceUnder'><a href='messages.php'>Messages</a></li>
			    <li class='spaceUnder'><a href='settings.php'>Settings</a></li>
			    <li class='spaceUnder'><a href='chooseInterests.php'>Choose Interests</a></li>
			    <li class='spaceUnder'><a href='<?php echo $logoutUrl; ?>'>Logout</a></li>
			</ul>
		    </div>
		    </div>
		</div>
	    </div><!-- end toggleSide -->
	    
	    <!--Toggle Nav on Sm/Xs Screen-->
	    <div id='toggleSide' class='hidden-sm hidden-md hidden-lg'>
		<div class='col-xs=2'>
		    <img src='assets/toggle_right.png' height='30px'/>
		</div>
		<div class='col-xs-10'>
		    <div id='sideNav side-Navigation' class='sNav'>
			<div id='sNav-inner'>
			<p id='name' class='pushover'><?php echo $fbfullname; ?></p>
			<img id='profpic' class='spaceUnder pushover' src='https://graph.facebook.com/<?php echo $user; ?>/picture?height=350&width=350'>
			<ul class='po'>
			    <li class='spaceUnder'><a href='memberprofile.php'>Home</a></li>
			    <li class='spaceUnder'><a href='messages.php'>Messages</a></li>
			    <li class='spaceUnder'><a href='settings.php'>Settings</a></li>
			    <li class='spaceUnder'><a href='chooseInterests.php'>Choose Interests</a></li>
			    <li class='spaceUnder'><a href='<?php echo $logoutUrl; ?>'>Logout</a></li>
			</ul>
		    </div>
		    </div>
		</div>
	    </div><!-- end toggleSide -->
	    
	    <div id='content' class='row'>
		<div id="bl-main" class="bl-main">
		    <section>
			<div class="bl-box">
			    <h2 class="bl-icon bl-icon-about">Interest Web</h2>
			    <img src="assets/web-icon.png">
			</div>
			<div class="bl-content">
			    <h2>Interest Web</h2>
			    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
				<div id='can'>
				    <canvas width='460px' height='500px' id='myCanvas'></canvas>
				</div>
			    </div>
			    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
				    <div id="navCanvasWrapper" style="position:absolute; top:0px;">
				    	<canvas width='230px' height='580px' id='navCanvas'></canvas>
				    </div>  
			    </div>
			</div>
			<span class="bl-icon bl-icon-close"><img src="assets/closeWindow.png" /></span>
		    </section>
		    <section id="bl-work-section">
			<div class="bl-box">
			    <h2 class="bl-icon bl-icon-works">Socially Outward Status</h2>
			    <img src="assets/vs-icon.png">
			</div>
			<div class="bl-content">
			    <h2>Socially Outward Status</h2>
			    <div id="vs">VS.</div>
			    <div class="SO-user">
				<p><?php echo $fbfullname; ?>
				<br><img src='https://graph.facebook.com/<?php echo $user; ?>/picture?height=117&width=117'></p>
			    </div>
			    <div class="SO-choose">
				community or friend
			    </div>
			<span class="bl-icon bl-icon-close"><img src="assets/closeWindow.png" /></span>
		    </section>
		    <section>
			<div class="bl-box">
			    <h2 class="bl-icon bl-icon-blog">Recent Activity</h2>
			    <img src="assets/feed-icon.png">
			</div>
			<div class="bl-content overflow-scroll">
			    <div class="row">
				<div class="col-md-9">
				    <h2>What's the 411 in Chapel Hill?</h2>
				    <div class="activityBox">
					<div class="activityIcon"><img src="assets/event-small.png" style="width: 50px;" /> </div>
					<div class="activityFeed">
					    <p>What
					    <br>Who
					    <br>When</p>
					</div>
				    </div>
				    <div class="activityBox">
					<div class="activityIcon">picture</div>
					<div class="activityFeed">
					    <p>What
					    <br>Who
					    <br>When</p>
					</div>
				    </div>
				    <div class="activityBox">
					<div class="activityIcon">picture</div>
					<div class="activityFeed">
					    <p>What
					    <br>Who
					    <br>When</p>
					</div>
				    </div>
				    <div class="activityBox">
					<div class="activityIcon">picture</div>
					<div class="activityFeed">
					    <p>What
					    <br>Who
					    <br>When</p>
					</div>
				    </div>
				    <div class="activityBox">
					<div class="activityIcon">picture</div>
					<div class="activityFeed">
					    <p>What
					    <br>Who
					    <br>When</p>
					</div>
				    </div>
				</div>
				<div class="col-md-3">
				    <div class="activity-sidebar">
					<button class="btn">web</button>
					<button class="btn">event</button>
					<button class="btn">message</button>
				    </div>
				</div>
			    </div>
			    
			</div>
			<span class="bl-icon bl-icon-close"><img src="assets/closeWindow.png" /></span>
		    </section>
		    <section>
			<div class="bl-box">
			    <h2 class="bl-icon bl-icon-contact">What's Hot Nearby</h2>
			    <img src="assets/explore-icon.png">
			</div>
			<div class="bl-content">
			    <h2>What's Hot Nearby</h2>
			    <hr>
			    <h3><b>Promotion 1</b></h3>
			    <p>Promotion from business feed</p>
			    <hr>
			    <h3><b>Activity 1</b></h3>
			    <p>Local activity</p>
			    <hr>
			    <h3><b>Activity 2</b></h3>
			    <p>Local activity</p>
			</div>
			<span class="bl-icon bl-icon-close"><img src="assets/closeWindow.png" /></span>
		    </section>
		</div>
	    </div> <!-- end #content -->
	    
	    <div id='user' hidden='false'><?php  print_r($_COOKIE['user']); ?></div>
	    
	</div><!-- end .row -->
    </div><!-- end .container-->

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="js/boxTransition.js"></script>
    <script>
	$(function() {
	    Boxlayout.init();
	});
    </script>

</body>
</html>