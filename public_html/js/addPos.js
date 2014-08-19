function computePlusPosition(){
	var myCanvas = $( "#myCanvas" );
    var position = myCanvas.position();
    var paragraph = $("#para");
	paragraph.text( "left position: " + position.left + ", top position: " + position.top );
	
	
	var canvasWidth = $("#myCanvas").width();
	var canvasHeight = $("#myCanvas").height();
	
	$('#plusDiv').css("left", position.left + canvasWidth - 199);      //69 + 130 because parent div is left positioned ?????
	$('#plusDiv').css("top", position.top + canvasHeight - 60);
};

$(window).resize(function(){
	computePlusPosition();
	console.log("Resized!");
});

function makePlusVisible(){
	console.log("Fire visibility");
	$("#plusDiv").css("visibility", "visible");
	$("#plusDiv").css("z-index", "50");
};

function makePlusInvisible(){
	console.log("Fire invisibility");
	$("#plusDiv").css("visibility", "hidden");
	$("#plusDiv").css("z-index", "0");
};

function bindClickEvent(){                               //Bind click event to #can for testing, change later
	$("#tester1").click(function(){
		console.log("Text clicked...");
		if ($("#plusDiv").css("visibility") == "hidden"){
			makePlusVisible();
		}
		else{
			makePlusInvisible();
		};	
	});
};

$(window).load(function(){
	console.log("Doc loaded...");
	computePlusPosition();
	bindClickEvent();
	expansionHandler();
	console.log("Height: " + $("#plusDiv img").height() + " Width: " + $("#plusDiv img").width());
});

function expansionHandler() {
	$("#plusDiv").click(function(event){
		if ($("#plusDiv").css("visibility") == "visible"){
			console.log(event.target.nodeName + ' is indeed visible!!!');
	        $("#plusDiv img").first().fadeTo("slow", 0.0, function(){
	        	console.log("Animation complete, removing img");
	        	$("#plusDiv img").first().remove();
	        });
	        $(".corner").css("display", "inline");
	        expandDiv();
		}
		else{
			console.log(event.target.nodeName + " is not visible");
		};
	});
};

function expandDiv() {
    $("#plusDiv").css("position", "absolute");
	$("#plusDiv").animate({
		height: "500px",
		top: "80"
	}, 800, function() {
		// Animation complete.
		$("#plusDiv").animate({
			width: "500px"
		}, 800, function() {
		   //Animation complete
		});
	});
};


