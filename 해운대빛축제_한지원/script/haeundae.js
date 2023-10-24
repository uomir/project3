$(document).ready(function(){
//popup
$("#notice ul li:first").click(function(){
    $("#pop").show();
});
$(".close").click(function(){
    $("#pop").hide();
});

})