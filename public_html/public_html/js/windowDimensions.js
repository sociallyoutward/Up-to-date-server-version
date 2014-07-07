//Author: Karsten Rabe

//Make body height and width equal to browser viewport

$(document).ready(function(){
	fitViewportToScreenSize();
});

$(window).resize(function (){
	fitViewportToScreenSize();
});

var winHeight;
var winWidth;


var fitViewportToScreenSize = function (){
	
	winHeight = $(window).height() + "px";
    winWidth = $(window).width() + "px";
    $("body").css("height", winHeight);
    $("body").css("width", winWidth);

};