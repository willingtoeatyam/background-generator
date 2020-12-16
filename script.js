var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");
var direction = "right";


function applyGradient(){
	body.style.background = "linear-gradient(to "
	+direction
	+", " 
	+color1.value
	+", " 
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";";
}


function toggleDirection(){
	if(direction == "right"){
		direction = "bottom";
		applyGradient();
	} else if (direction=="bottom"){
		direction = "right";		
		applyGradient();
	}
}

color1.addEventListener("input", applyGradient);

color2.addEventListener("input", applyGradient);

button.addEventListener("click", toggleDirection)	;