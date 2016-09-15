var RFR = RFR || {};


window.addEventListener("load", function(){ 
  RFR.init();
});


RFR.init = function() {
	this.domElementsSetup();
  	this.addEventListener();
};


RFR.domElementsSetup = function(){
  this.message  = document.getElementById("message");
  this.button   = document.getElementById("button");
  this.startGame   = document.getElementById("startGame");

};

RFR.ageVerification = function(){
	var age = alert("Please enter your age?");

	if(age < 13)
	{
		this.button.disabled=true;
		this.message="you are not old enough to play this game";
	}else{
		this.playGame();

	}	

};

RFR.addEventListener = function(){
	this.button.addEventListener("click", function(event){
		console.log(button);
	});
};