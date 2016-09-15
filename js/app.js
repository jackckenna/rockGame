var RFR = RFR || {};


window.addEventListener("load", function(){ 
  RFR.init();
});


RPS.init = function() {
	this.domElementsSetup();
  	this.addEventListener();
};


RFR.domElementsSetup = function(){
  this.message  = document.getElementById("message");
  this.button     = document.getElementById("button");

}

RPS.addEventListener = function(){
	this.button.addEventListener("click", function(event){
	console.log(this.button);
	});
};