var canvas;
var scene;
var nav;
var navScene;
var navLayer;
var color;
var bubbleContainer;
var moon1;
var speed = .5;
var currBubbles = 6;
var iGuide = false;
var cGuide = false;
var oGuide = false;
var radius;
var currText = "Socially Outward";
var currCNode = 1;
var currLevel = 0;
var navCircles;
var member;
var tester = 0;
var whichPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
//Set to true once page loads bubble web
var alreadySet = false;
var allData = new Array;
var userData;
function init(){
	//bubble web
	canvas = document.getElementById("myCanvas");
	//bubble node tree
	nav = document.getElementById("navCanvas");
	scene = new createjs.Stage(canvas);
	navScene = new createjs.Stage(nav);
	navLayer = new createjs.Container();
	navScene.addChild(navLayer);
	member = $('#user').html();
	member = parseInt(member);
	initNav();
	//fetchUserDataFromDB();
	//fetchAllBubbleData();
	radius = canvas.height*.13;
	bubbleContainer = new createjs.Container();
	scene.addChild(bubbleContainer);
	guideContainer = new createjs.Container();
	scene.addChild(guideContainer);
	createjs.Ticker.useRAF=true;
	createjs.Ticker.setFPS(40);
	createjs.Ticker.addListener(window);
	createjs.Ticker.addEventListener("tick", ticktate);
	
	if(whichPage=="chooseInterests.php")
	{
		bubbleCalc(1,true,true);
	}

	else if(whichPage=="memberprofile.php")
	{
		bubbleCalcMe(member,1,true,true);
	}
};

var initNav = function()
{
	var navLayer1 = new createjs.Shape();
	nav1.navIndex = 0;
	nav1.yCoord = 67;
	nav1.graphics.setStrokeStyle(3);
	nav1.graphics.beginStroke("black").drawCircle(160, nav1.yCoord, 25);
	
	
	var navLayer2 = new createjs.Shape();
	nav2.navIndex = 1;
	nav2.yCoord = 205;
	nav2.graphics.setStrokeStyle(3);
	nav2.graphics.beginStroke("black").drawCircle(160, nav2.yCoord, 25);
	nav2.graphics.beginFill("white").drawCircle(160, nav2.yCoord, 25);
	
	var navLayer3 = new createjs.Shape();
	nav3.navIndex = 2;
	nav3.yCoord = 343;
	nav3.graphics.setStrokeStyle(3);
	nav3.graphics.beginStroke("black").drawCircle(160, nav3.yCoord, 25);
	nav3.graphics.beginFill("white").drawCircle(160, nav3.yCoord, 25);
	
	var navLayer4 = new createjs.Shape();
	nav4.navIndex = 3;
	nav4.yCoord = 481;
	nav4.graphics.setStrokeStyle(3);
	nav4.graphics.beginStroke("black").drawCircle(160, nav4.yCoord, 25);
	nav4.graphics.beginFill("white").drawCircle(160, nav4.yCoord, 25);
	
	var lines = new createjs.Shape();
	lines.graphics.setStrokeStyle(3);
	lines.graphics.moveTo(160,90);
	lines.graphics.beginStroke("black");
	lines.graphics.lineTo(160,506);
	
	navLayer.addChild(lines);
	navLayer.addChild(nav1);
	navLayer.addChild(nav2);
	navLayer.addChild(nav3);
	navLayer.addChild(nav4);
	
	navScene.update();
	navCircles= [nav1,nav2,nav3,nav4];
	//setNav(1,true);
	// if(whichPage=="bubble2.php")
	// {
	// 	setNav(1,true);

	// }

	// else if(whichPage=="memberProfile.php")
	// {
	// 	setNav(1,true);
	// }


};

var setNav = function(interestID)
{
	//updateNavColorAndText("black", "", 0);   

	if(currLevel>0)
	{
	$.ajax('/php/iNodes.php',
		{
			type: 'GET',
			data: {child:interestID},
			cache: false,
			success: function (data) {console.log(allData);},
			error: function () {alert('setNav() Problem');}
 		});
	};

	navScene.update();
	//Upon click above, clear below circles and set current level appropriately according to the index of the circle pressed
};

//Author:Karsten Rabe
//pass color of bubble, name, and which node in tree: updates side nav to match center web.
var updateNavColorAndText = function(color,  nodeName, whichNode){
	navContainer = new createjs.Container();
	var circle = new createjs.Shape();
	var yAxis = 0;
	//Where in tree? Set Y axis num pixels down based on which one.
	if (whichNode == 2){       //1st child
		yAxis = 138;
	}
	else if (whichNode == 3){  //grand-child
		yAxis = 276;
	}
	else if (whichNode == 4){      //great grand-child
		yAxis = 414;
	};
	
	circle.graphics.beginFill(color).drawCircle(160, 67 + yAxis, 25);
	var text = new createjs.Text(nodeName, "20px segoe", "black");
	text.x = 170 - text.getMeasuredWidth();
	//"Me" overlaps bubble otherwise...
	if (text.x > 100){
		text.x -= 17;
	}
	text.y = yAxis + 47;
	text.regX = text.getMeasuredWidth() / 2;
	text.regY = text.getMeasuredLineHeight() / 2;
	text.rotation = 30;
	navLayer.addChild(navContainer);
	navContainer.addChild(circle);
	navContainer.addChild(text);
	navScene.update();
	
};

//Author: karsten Rabe
//Reset nav area
var wipeNav = function(){
	navContainer.removeAllChildren();
	//updateNavColorAndText("black", "", 1);
	//updateNavColorAndText("", "", 2);
	//updateNavColorAndText("", "", 3);
	//updateNavColorAndText("", "", 4);

};


var setNavFinish = function(parentID)
{	
	var c;

	if(currLevel==1)
	{
		c = true;
	}
	else
	{
		c = false;
	}
	if(whichPage=="chooseInterests.php")
	{
		navCircles[currLevel-1].removeAllEventListeners("click");
		navCircles[currLevel-1].addEventListener("click",function(event){navClickHandler(event); bubbleCalc(parentID,c,true); console.log("allData[0][1][1]: " + allData[0][1][1][1]); updateNavColorAndText(color, allData[0][1], currLevel+1);});
	}
	else if(whichPage=="memberprofile.php")
	{
		//console.log("INITIAL:"+initial);
		navCircles[currLevel-1].removeAllEventListeners("click");
		navCircles[currLevel-1].addEventListener("click",function(event){navClickHandler(event); bubbleCalcMe(member,parentID,c,true); console.log("allData[0][1][1]: " + allData[0][1][1]); updateNavColorAndText(color, allData[0][1], currLevel+1);});
	}
	else
	{
		//console.log(whichPage);
	}
	
};

var navClickHandler = function(event)
{
	if(event.target.navIndex < currLevel)
	{
		currLevel = event.target.navIndex;
		for(var i = currLevel;i<navCircles.length;i++)
		{
			if(navCircles[i].hasEventListener("click"))
			{
				navCircles[i].removeAllEventListeners("click");
			};
			if(i!=currLevel)
			{
			  //navCircles[i].graphics.beginFill("white").drawCircle(160,navCircles[i].yCoord,25);
			  //Use Karsten's instead for testing
			  //alert(i);
			  updateNavColorAndText("white", "", i);
			  
			  navScene.update();
			};
		};
	};
};

var ticktate = function()
{
	
	for(var x=0;x<bubbleContainer.getNumChildren();x++)
	{	
	bubbleContainer.getChildAt(x).rotation-= speed;
	}
	bubbleContainer.rotation+= speed;
	scene.update();
};

window.onload=init;

