//Author: Karsten Rabe

//Gets all bubble data from database

var allData;

var getAllData = function() {
	$.ajax('/php/iNodes.php',
	    {
		    type: 'GET',
		    data: {parent:1},
		    cache: false,
		    success: function (data) {allData = data; alert(allData);},
		    error: function () {alert('Error: Could not find data.');}
 	    }
 	);
}; 	

$(document).ready(function(){
	alert("begin");
	getAllData();
});
