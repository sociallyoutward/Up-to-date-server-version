//Author: Karsten Rabe

//Make body height and width equal to browser viewport

var currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
console.log(currentPage);

$(document).ready(function(){
	fitViewportToScreenSize();
	if (currentPage == "chooseinterests.php" || "memberprofile.php"){
		console.log("canvas size call!");
		fixNavCanvasSize();
	};	
	
});

$(window).resize(function (){
	fitViewportToScreenSize();
	if (currentPage == "chooseinterests.php" || "memberprofile.php"){
		fixNavCanvasSize();
	};	
	
});

var winHeight;
var winWidth;
var navCanvasHeight;
var navCanvasWidth;
var navPos = 300;
var bubbleWidth;


var fitViewportToScreenSize = function (){
	
	winHeight = $(window).height() + "px";
    winWidth = $(window).width() + "px";
    $("body").css("height", winHeight);
    $("body").css("width", winWidth);

};

var fixNavCanvasSize = function(){
	navCanvasHeight = $(window).height() * .88 + "px";
	navCanvasWidth = $(window).width() * .27 + "px";
	$("#navCanvas").attr({
		height: navCanvasHeight,
		width: navCanvasWidth
	});
	navScene.update();
	
};

var getWindowWidth = function(){
    navPos = $("#navCanvas").width();	
    return navPos;
};

var bubbleCanvasPos = function(){
	bubbleWidth = $("#myCanvas").attr("width");
};

