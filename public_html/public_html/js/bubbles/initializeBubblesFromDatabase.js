//Author: Karsten Rabe

//variables to get table data and initialize parent bubbles and nav
var parentBubbleData = new Array;
var childBubbleData = new Array;
var grandChildBubbleData = new Array;
var navCircles = new Array;
var whichPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
var bubbleCanvas, navCanvas, bubbleScene, bubbleContainer, navContainer, guideContainer, currLevel, numOfInterests, speed, radius, member, centralNode;

navCanvas = document.getElementById("navCanvas");
navScene = new createjs.Stage(navCanvas);

var init = function(){
	
	//Set up createjs stages
	bubbleCanvas = document.getElementById("myCanvas");
	bubbleScene = new createjs.Stage(bubbleCanvas);
	bubbleContainer = new createjs.Container();
	bubbleScene.addChild(bubbleContainer);
	navContainer = new createjs.Container();
	navScene.addChild(navContainer);
	guideContainer = new createjs.Container();
	bubbleScene.addChild(guideContainer);
	alert("Containers created");
	
	//Draw nav skeleton
	initNav();
	
	//Set up facebook profile specific data
	member = parseInt($('#user').html());
	
	//Initialize bubble canvas geometric variables
	radius = bubbleCanvas.height*.13;
	
	//Set up easel ticker
	createjs.Ticker.useRAF=true;
	createjs.Ticker.setFPS(40);
	createjs.Ticker.addListener(window);
	createjs.Ticker.addEventListener("tick", tickTock); //function tickTock
	
	//Call functions to add initial content to both scenes
	if(whichPage == "chooseInterests.php")
	{
		//function calls here
	}

	else if (whichPage == "memberprofile.php")
	{
		//function calls here
	}	
	
};

var initNav = function()
{
	var nav1 = new createjs.Shape();
	nav1.navIndex = 0;
	nav1.yCoord = 80;
	nav1.xCoord = navPos - 55;
	nav1.graphics.setStrokeStyle(3);
	nav1.graphics.beginStroke("black").drawCircle(nav1.xCoord, nav1.yCoord, 25);
	
	
	var nav2 = new createjs.Shape();
	nav2.navIndex = 1;
	nav2.yCoord = 305;
	nav2.graphics.setStrokeStyle(3);
	nav2.graphics.beginStroke("black").drawCircle(nav1.xCoord, nav2.yCoord, 25);
	nav2.graphics.beginFill("white").drawCircle(nav1.xCoord, nav2.yCoord, 25);
	
	var nav3 = new createjs.Shape();
	nav3.navIndex = 2;
	nav3.yCoord = 545;
	nav3.graphics.setStrokeStyle(3);
	nav3.graphics.beginStroke("black").drawCircle(nav1.xCoord, nav3.yCoord, 25);
	nav3.graphics.beginFill("white").drawCircle(nav1.xCoord, nav3.yCoord, 25);
	
	var nav4 = new createjs.Shape();
	nav4.navIndex = 3;
	nav4.yCoord = 800;
	nav4.graphics.setStrokeStyle(3);
	nav4.graphics.beginStroke("black").drawCircle(nav1.xCoord, nav4.yCoord, 25);
	nav4.graphics.beginFill("white").drawCircle(nav1.xCoord, nav4.yCoord, 25);
	
	var lines = new createjs.Shape();
	lines.graphics.setStrokeStyle(3);
	lines.graphics.moveTo(nav1.xCoord,125);
	lines.graphics.beginStroke("black");
	lines.graphics.lineTo(nav1.xCoord,700);
	
	navContainer.addChild(lines);
	navContainer.addChild(nav1);
	navContainer.addChild(nav2);
	navContainer.addChild(nav3);
	navContainer.addChild(nav4);
	
	navScene.update();
	navCircles= [nav1,nav2,nav3,nav4];

};

var tickTock = function()
{
	
	for(var x=0; x<bubbleContainer.getNumChildren(); x++)
	{	
	bubbleContainer.getChildAt(x).rotation-= speed;
	}
	bubbleContainer.rotation+= speed;
	bubbleScene.update();
};

var getInodeData = function(centralNode){
	$.ajax('../public_html/php/iNodes.php',
	{
		type: 'GET',
		data: {parent:centralNode},
		cache: false,
		success: function (data) {parentBubbleData = data; console.log(parentBubbleData);},
		error: function () {alert('Central node provided does not exist (BC)');}
 	});
};






window.onload = init, getInodeData(1);
