$(document).ready(function(){
var myIndex=0;
	changepic();

	function changepic(){
		var x=document.getElementsByClassName(" pic");
		for(i=0;i<x.length; i++){
			x[i].style.display="none";
		}myIndex++;
	if(myIndex>x.length) {myIndex = 1}  
	x[myIndex-1].style.display="block";
	setTimeout(changepic,8000);
  }

});







































