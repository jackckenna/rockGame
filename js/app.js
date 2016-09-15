var RFR = RFR || {};


window.addEventListener("load", function(){ 
  RFR.init();
});


RFR.init = function() {
	this.domElementsSetup();
  	this.addEventListener();
  	this.ageVerification(); 
};

RFR.domElementsSetup = function(){
  this.message  = document.getElementById("message");
  this.button   = document.getElementById("button");
  this.startGame   = document.getElementById("startGame");
  this.options   = document.getElementById("options");
  this.input   = document.getElementById("input");


};

RFR.addEventListener = function(){
	this.button.addEventListener("click", function(event){
		console.log(button);
	});
};



RFR.ageVerification = function(){
	var age = prompt("Please enter your age?");

	if(age < 13)
	{
		this.button.disabled=true;
		return this.message.innerText = "you are not old enough to play this game";
	}else{
		this.message.innerText = "You're in the GYM... RUN  The Rock is coming for you, where do you want to hide?";
		return this.gym();
	}	

};


RFR.gym = function(){
	this.options.innerText = "Streets, Alley, Car"
	var choice = this.input.value;
	this.message.innerText = "You're in the Rock's teritory now.. Where are you going to go?"
	
	switch(choice){
		case "streets":
			return this.streets();
			break;
		case "alley":
			return this.alley();
			break;
		case "car":
			return this.car();
			break;		
	}

}

RFR.streets = function(){

	this.options.innerText = "blah"

}

RFR.alley = function(){

}

RFR.car = function(){

}

RFR.park = function(){

}

RFR.sewers = function(){

}

RFR.highway = function(){

}

RFR.cableCart = function(){

}

RFR.resivour = function(){

}

RFR.highwayJump = function(){

}

RFR.mountain = function(){

}

RFR.mountainFoot = function(){

}
