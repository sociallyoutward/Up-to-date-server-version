$(function(){
	//add datetimepicker to input fields
	$('#startDate').datetimepicker({timeFormat: "hh:mm tt"});
	$('#endDate').datetimepicker({timeFormat: "hh:mm tt"});


	$('#submitEvent').click(function(){
		var eventName = $('#eventName').val();
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
		startDate = new Date(startDate).toLocalISOString().slice(0, 19).replace('T', ' ');
		endDate = new Date(endDate).toLocalISOString().slice(0, 19).replace('T', ' ');
		console.log(startDate);
		console.log(endDate);

		// $.ajax('addEvent.php',
		// {
		// 	type: 'POST',
		// 	data: {name:eventName, start:startDate, end:endDate},
		// 	cache: true,
		// 	success: function (data) {$('#refreshCal').trigger("click"); $('#myModal').modal('hide'); }, //dismiss modal
		// 	error: function () {alert("Add failed");}
 	// 	});
		}

	})


});

Date.prototype.toLocalISOString = function(){
// ISO 8601
var d = this
, pad = function (n){return n<10 ? '0'+n : n}
, tz = d.getTimezoneOffset() //mins
, tzs = (tz>0?"-":"+") + pad(parseInt(tz/60))
if (tz%60 != 0)
tzs += pad(tz%60)
if (tz === 0) // Zulu time == UTC
tzs = 'Z'
return d.getFullYear()+'-'
+ pad(d.getMonth()+1)+'-'
+ pad(d.getDate())+'T'
+ pad(d.getHours())+':'
+ pad(d.getMinutes())+':'
+ pad(d.getSeconds()) + tzs
}