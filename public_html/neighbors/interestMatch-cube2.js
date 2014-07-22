
/*
$.getScript("cube.js", function(){
   console.log("cube.js loaded.");
});

$.getScript("hexaflip.js", function(){
   console.log("hexaflip.js loaded.");
});
*/

$(function(){
	var curUser = $('#user').html();

	$.ajax('getUsers.php',
    	{
    		type: 'GET',
    		data:{curUser:curUser},
			cache: false,
			success: function (data) {createDivs(JSON.parse(data));},
			error: function (e) {console.log(e);}
     	});

	
});

var createDivs = function(intersect){

	console.log(intersect);
	for(var user in intersect)
	{
		generateNeighbor(user,intersect[user]);
	}
}

var generateNeighbor = function(userID,intersect){

		var container = $('#container');
		var newNeigh = $('<div class="profileBox"><div class="boxContent"><div class="cubeContainer"><div id="horz-controls"><div><img src="../assets/left.png" height="30px" /></div><div><img src="../assets/right.png" height="30px" /></div></div><div id="horz-demo"></div></div></div></div>');
	    newNeigh.data('fId',userID);
	    
	    newNeigh.append('<div class="item"><div class="name">'+intersect['name']+'</div>');
	    
	    if(intersect['intersect'].length!=0)
	    {
		/*
		    for(var interest in intersect['intersect']){
		    	newNeigh.append('<p class="interest">'+intersect['intersect'][interest]+'</p>');
		    }
		    */
		    newNeigh.append('<div class="percent" style="margin-top: -10px;">'+intersect['percent']+'%</div></div>');
		}
	    container.append(newNeigh);
}