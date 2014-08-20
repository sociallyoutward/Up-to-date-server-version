var numItems;

//Block UI until user data loaded
$(window).load(function() { 
    $.blockUI({ css: { 
	        border: 'none', 
	        padding: '15px', 
	        backgroundColor: '#000', 
	        '-webkit-border-radius': '10px', 
	        '-moz-border-radius': '10px', 
	        opacity: .5, 
	        color: '#fff' 
        }, message: '<h1>Loading content...</h1>' 
    }); 
        getUserData(36);
        setTimeout($.unblockUI, 3000); 
}); 
      
//Ajax request to get all data
var getUserData = function(member){
$.ajax('/php/getAllUserData.php',
	{
		type: 'GET',
		data: {member:member}, 
		cache: false,
		success: function (data) {console.log("Success: data = " + data);},
		error: function () {console.log("Data fetch failed");}
	});
};

//Need to count items

//Update status bar