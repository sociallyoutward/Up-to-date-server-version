
<html>
<head>
    <title>Neighbors</title>
    
    <!-- Bootstrap 3.1.1. Latest compiled and minified CSS -->
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    
    <!-- JQuery -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    
    <!-- Bootstrap 3.1.1 Latest compiled and minified JavaScript -->
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    
    <!-- Socially Outward Styles -->
    <link href="css/memberProfile.css" type="text/css" rel="stylesheet">
    <link href="css/navigationTemplate.css" type="text/css" rel="stylesheet">
    <link href="css/neighbors.css" type="text/css" rel="stylesheet">
    <link href="css/styles.css" type="text/css" rel="stylesheet">
    <link href="css/cube.css" rel="stylesheet" type="text/css">
    <link href="css/hexaflip.css" rel="stylesheet" type="text/css">
    <link rel="icon" href="assets/logo.png">
    
    <script src=" http://code.createjs.com/createjs-2013.02.12.min.js"></script>
    <script type="text/javascript" src='js/showMenu.js'></script>
    <script src="http://code.createjs.com/createjs-2013.02.12.min.js"></script>
    <script src="/js/bubbles/dbinitialize2.js"></script>
    <script src="/js/bubbles/resize.js"></script>
    <script src="/js/bubbles/dbbubble.js"></script>
    <script src="/js/clearInterests.js"></script>
    <script src="/js/sideMenu.js"></script>
    <script src="feed/tabs.js"></script>
</head>

<body>
    <div class="container">
	<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	    <div class="container-fluid">
	      <!-- Brand and toggle get grouped for better mobile display -->
	      <div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		  <span class="sr-only">Toggle navigation</span>
		  <span><img src="assets/toggle_down.png" height="15px"</span>
		</button>
		<a class="navbar-brand" href="memberprofile.php"><img src="assets/brand.png" height="45px" /></a>
	      </div>
		
	      <!-- Collect the nav links, forms, and other content for toggling -->
	      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul class="nav navbar-nav">
		  <li><a href="calendar/events.php">Events</a></li>
		  <li><a href="neighbors.php">Neighbors</a></li>
		  <li><a href="community.php">Community</a></li>
		  <li class="dropdown">
		    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Bulletin Board <b class="caret"></b></a>
		    <ul class="dropdown-menu">
		      <li><a href="feed/bulletin.php">Updates</a></li>
		      <li class="divider"></li>
		      <li><a href="#">Promotions</a></li>
		      <li class="divider"></li>
		      <li><a href="#">Events</a></li>
		    </ul>
		  </li>
		</ul>
		<p class="navbar-text navbar-right hidden-sm hidden-xs">changing social media</p>
	      </div><!-- /.navbar-collapse -->
	    </div><!-- /.container-fluid -->
	</nav>
	
	<div class="row">
	    <div id="toggleSide">
		<div class="col-xs=2">
		    <img src="assets/toggle_right.png" height="30px"/>
		</div>
		<div class="col-xs-10">
		    <div id="sideNav side-Navigation" class="sNav">
			<div id='sNav-inner'>
			<p id='name' class='pushover'><?php echo $fbfullname; ?></p>
			<img id='profpic' class='spaceUnder pushover' src="https://graph.facebook.com/<?php echo $user; ?>/picture?height=350&width=350">
			<ul class='po'>
			    <li class='spaceUnder'><a href='memberprofile.php'>Home</a></li>
			    <li class='spaceUnder'><a href='#'>Messages</a></li>
			    <li class='spaceUnder'><a href='#'>Settings</a></li>
			    <li class='spaceUnder'><a href='chooseInterests.php'>Choose Interests</a></li>
			    <li class='spaceUnder'><a href="<?php echo $logoutUrl; ?>">Logout</a></li>
			</ul>
		    </div>
		    </div>
		</div>
	    </div><!-- end toggleSide -->
	    
	    <div id='content' class="row">
		<div class="row">
		    <div id='user' hidden='true'><?php  print_r($_COOKIE['user']); ?></div>
		    
		    <!-- Nav tabs -->
		<ul class="nav nav-tabs">
		  <li class="active" id="tab1"><a href="#type1" data-toggle="tab">All</a></li>
		  <li id="tab2"><a href="#type2" data-toggle="tab">Friends</a></li>
		  <li id="tab3"><a href="#type3" data-toggle="tab">Neighbors</a></li>
		</ul>

		<!-- Tab panes -->
		<div class="tab-content">
		  <div class="tab-pane active" id="type1">
		  </div>
		  <div class="tab-pane" id="type2"></div>
		  <div class="tab-pane" id="type3"></div>
		</div>
	    </div><!-- end #content and end .row-->
	    
	    
		    <div class="profileBox">
		        <div class="boxContent">
			    <div id="horz-controls">
				<div><img src="assets/left.png" height="30px" /></div>
				<div><img src="assets/right.png" height="30px" /></div>
			    </div>
			    <div id="horz-demo"></div>
			</div>
			<div class="boxFooterFriend">
			    <div id='container'></div>
			</div>
		    </div>
		    <div class="profileBox">
		        <div class="boxContent">
			</div>
			<div class="boxFooterNeighbor">
			    <i class="fa fa-compass"></i> Friend Name
			    <div class="pull-right">?? %</div>
			</div>
		    </div>
		    <div class="profileBox">
		        <div class="boxContent">
			</div>
			<div class="boxFooterFriend">
			    <i class="fa fa-child"></i> Friend Name
			    <div class="pull-right">?? %</div>
			</div>
		    </div>
		    <div class="profileBox">
		        <div class="boxContent">
			</div>
			<div class="boxFooterNeighbor">
			    <i class="fa fa-compass"></i> Neighbor Name
			    <div class="pull-right">?? %</div>
			</div>
		    </div>
		    <div class="profileBox">
		        <div class="boxContent">
			</div>
			<div class="boxFooterFriend">
			    <i class="fa fa-child"></i> Friend Name
			    <div class="pull-right">?? %</div>
			</div>
		    </div>
		</div>
                <div class="buttons">
                </div>
	    </div><!-- end #content and end .row-->
	    
	    <div id='user' hidden='true'><?php  print_r($_COOKIE['user']); ?></div>
	    
	    <script src="js/hexaflip.js"></script>
	    <script src="js/cube.js"></script>
	    <script src="js/interestMatch.js"></script>
	    
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
	    
	</div><!-- end .row -->
    </div><!-- end .container-->


</body>
</html>