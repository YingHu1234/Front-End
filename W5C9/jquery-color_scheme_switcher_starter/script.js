$(document).ready(function(){

	$('#grayButton').click(switchGray);
	$("#whiteButton").click(switchWhite);
	$("#orangeButton").click(switchOrange);
	
	function switchGray(){
		$("body").css("background","gray");
    $("body").css("color","white");
    
	}
	function switchWhite(){
		$("body").css("background","white");
      $("body").css("color","black");
	}
	function switchOrange(){
		$("body").css("background","orange");
     $("body").css("color","gray");
	}

});