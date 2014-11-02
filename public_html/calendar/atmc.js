$(function(){
    $('#atmc').click(function(){nextSquare();});
});

$.ajax('interestTree.php',   
            {
                type: 'GET',
                cache: false,
                success: function (data) {createDropDown($.parseJSON(data));},
                error: function () {alert('Error receiving JSON');}
            });