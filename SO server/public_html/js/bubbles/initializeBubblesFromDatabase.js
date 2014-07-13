//Author: Karsten Rabe

//variables to get table data and initialize parent bubbles and nav
var allData = new Array;
var navCircles = new Array;
var whichPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
var bubbleStage, bubbleLayer, navStage, skeletonLayer, navBubbleLayer, guideContainer, currLevel, numOfInterests, speed, radius, member, centralNode;
var testText = "testing", testColor = "red", textColor = "black";


var testStages = function () {
	var firstBubble = new bubble(testText, testColor, 350, 225, 1, 1);
	alert(firstBubble);
};

var init = function () {

//Set up easelJS stages
bubbleStage = new createjs.Stage(document.getElementById("myCanvas"));
navStage = new createjs.Stage(document.getElementById("navCanvas"));

//Make 2 different layers for navStage, one rotating bubbleLayer
skeletonLayer = new createjs.Container();
navBubbleLayer = new createjs.Container();
navStage.addChild(skeletonLayer, navBubbleLayer);

bubbleLayer = new createjs.Container();
bubbleStage.addChild(bubbleLayer);
	
	//Draw nav skeleton
	constructNavSkeleton();
	testStages();
	
	//Set up facebook profile specific data
	member = parseInt($('#user').html());
	
	//Initialize bubble canvas geometric variables
	radius = bubbleStage.height*.13;
	
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

var constructNavSkeleton = function()
{
	var nav1 = new createjs.Shape();
	nav1.navIndex = 0;
	nav1.yCoord = 77;
	nav1.xCoord = 300;
	nav1.graphics.setStrokeStyle(3);
	nav1.graphics.beginStroke("black").drawCircle(nav1.xCoord, nav1.yCoord, 25);
	
	
	var nav2 = new createjs.Shape();
	nav2.navIndex = 1;
	nav2.yCoord = 225;
	nav2.graphics.setStrokeStyle(3);
	nav2.graphics.beginStroke("black").drawCircle(nav1.xCoord, nav2.yCoord, 25);
	nav2.graphics.beginFill("white").drawCircle(nav1.xCoord, nav2.yCoord, 25);
	
	var nav3 = new createjs.Shape();
	nav3.navIndex = 2;
	nav3.yCoord = 373;
	nav3.graphics.setStrokeStyle(3);
	nav3.graphics.beginStroke("black").drawCircle(nav1.xCoord, nav3.yCoord, 25);
	nav3.graphics.beginFill("white").drawCircle(nav1.xCoord, nav3.yCoord, 25);
	
	var nav4 = new createjs.Shape();
	nav4.navIndex = 3;
	nav4.yCoord = 521;
	nav4.graphics.setStrokeStyle(3);
	nav4.graphics.beginStroke("black").drawCircle(nav1.xCoord, nav4.yCoord, 25);
	nav4.graphics.beginFill("white").drawCircle(nav1.xCoord, nav4.yCoord, 25);
	
	var lines = new createjs.Shape();
	lines.graphics.setStrokeStyle(3);
	lines.graphics.moveTo(nav1.xCoord,100);
	lines.graphics.beginStroke("black");
	lines.graphics.lineTo(nav1.xCoord,546);
	
	skeletonLayer.addChild(lines, nav1, nav2, nav3, nav4);
	navCircles= [nav1,nav2,nav3,nav4];
	navStage.update();

};

var tickTock = function()
{
	
	for(var x=0; x<bubbleLayer.getNumChildren(); x++)
	{	
	bubbleLayer.getChildAt(x).rotation-= speed;
	}
	bubbleLayer.rotation+= speed;
	bubbleStage.update();
};

//Author: Karsten Rabe
//Simple iNode getter function
var getData = function(centralNode){
	$.ajax('../public_html/php/iNodes.php',
	{
		type: 'GET',
		data: {parent:centralNode},
		cache: false,
		success: function (data) {allData[centralNode] = data; console.log("alldata[centralNode] = " + allData[centralNode] + ". alldata[0][0][1] = " + allData[0][0][1]); bubbleContainer.mouseEnabled = true;},
		error: function() {alert("getData didn't work");}
	});
};






window.onload = init, getData(1);
