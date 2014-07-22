//File Author: Karsten Rabe

//Make body height and width equal to browser viewport

var currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

$(document).ready(function(){
	fitViewportToScreenSize();
	fixNavCanvasSize();
	console.log("Current page: " + currentPage);
	if (currentPage == "memberprofile.php") {
		canvasUpForVisibility();
	}
	
});

$(window).resize(function (){
	fitViewportToScreenSize();
	fixNavCanvasSize();
	
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
    console.log("Window size: " + winHeight + " by " + winWidth);

};

//Make correct canvas positioning based on which page, and size of viewport
var fixNavCanvasSize = function(){
	
    navCanvasHeight = $(window).height() * .80 + "px";
	navCanvasWidth = $(window).width() * .27 + "px";
	$("#navCanvas").attr({
		height: navCanvasHeight,
		width: navCanvasWidth,
    });
	navScene.update();
    console.log("navCanvasHeight: " + navCanvasHeight + ". navCanvasWidth: " + navCanvasWidth);
	
};

var canvasUpForVisibility = function (){
	$("#navCanvasWrapper").css({
		top: "-75px"
	});
	navScene.update();
	console.log("canvas wrapper moved up...");
};


var getWindowWidth = function(){
    navPos = $("#navCanvas").width();	
    return navPos;
};

var bubbleCanvasPos = function(){
	bubbleWidth = $("#myCanvas").attr("width");
};

