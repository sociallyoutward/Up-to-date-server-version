$(function(){
	//add datetimepicker to input fields
	$('#startDate').datetimepicker({timeFormat: "hh:mm tt"});
	$('#endDate').datetimepicker({timeFormat: "hh:mm tt"});
	

	$('#submitEvent').click(function(){
		$('#calendar').view('year');
		var eventName = $('#eventName').val();
		console.log(eventName);
		var startDate = $('#startDate').val();
		var endDate = $('#endDate').val();
		//validate event entry form
		if(eventName=="")
		{
			alert("Please enter an event name");
		}
		else if(!Date.parse(startDate))
		{
			alert("Please select valid start date");
		}
		else if(!Date.parse(endDate))
		{
			alert("Please select valid end date");
		}
		else if(startDate>=endDate)
		{
			alert("Please select an end date that is after the start date (time included)")
		}
		else
		{
		startDate = new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');
		endDate = new Date(endDate).toISOString().slice(0, 19).replace('T', ' ');

		$.ajax('addEvent.php',
		{
			type: 'POST',
			data: {name:eventName, start:startDate, end:endDate},
			cache: true,
			success: function (data) {$('#myModal').modal('hide'); }, //dismiss modal
			error: function () {alert("Add failed");}
 		});
		}

	})


});

