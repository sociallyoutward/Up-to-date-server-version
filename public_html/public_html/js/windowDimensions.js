//Author: Karsten Rabe

//Make body height and width equal to browser viewport

$(document).ready(function(){
	fitViewportToScreenSize();
	fixNavCanvasSize();
	
});

$(window).resize(function (){
	fitViewportToScreenSize();
	fixNavCanvasSize();
	
});

var winHeight;
var winWidth;
var navCanvasHeight;
var navCanvasWidth;
var navPos;


var fitViewportToScreenSize = function (){
	
	winHeight = $(window).height() + "px";
    winWidth = $(window).width() + "px";
    $("body").css("height", winHeight);
    $("body").css("width", winWidth);

};

var fixNavCanvasSize = function(){
	navCanvasHeight = $(window).height() * .95 + "px";
	navCanvasWidth = $(window).width() * .18 + "px";
	$("#navCanvas").attr({
		height: navCanvasHeight,
		width: navCanvasWidth
	});
	navScene.update();
	
};

var getWindowWidth = function(){
    navPos = $(window).width();	
    return navPos;
};



