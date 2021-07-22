var num=0
$("#increase-5").on("click", function(){
	num+=5
	$("#score").text(num)
})

//var num=0
$("#decrease-5").on("click", function(){
	num-=5
	$("#score").text(num)
})

$("#submit-custom-score").on("click", function (){
	var num=$("#custom-score").val()
	$("#score").text(num)

})

//when("#score"=num){
//$("#decrease-5").on("click", function(){
//	num-=5
//	$("#score").text(num)
//})



