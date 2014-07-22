
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
		var newNeigh = $('<div class="profileBox"><div class="boxContent"><div>');
	    newNeigh.data('fId',userID);
	    
	    newNeigh.append('<div class="item"><div class="name">'+intersect['name']+'</div>');
	    
	    if(intersect['intersect'].length!=0)
	    {
		/*
		    for(var interest in intersect['intersect']){
		    	newNeigh.append('<p class="interest">'+intersect['intersect'][interest]+'</p>');
		    }
		    */
		    newNeigh.append('<div class="percent" style="margin-top: -10px;">'+intersect['percent']+'%</div><div class="2"></div><div class="3"></div></div>');
		}
	    container.append(newNeigh);
}