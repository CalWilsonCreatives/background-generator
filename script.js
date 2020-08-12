var css = document.querySelector("h3");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var body = document.getElementById("Gradient");
var button = document.querySelector("button");



function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function changecolour () {
	body.style.background = "linear-gradient(to right, " +
	colour1.value
	+" , "
	+ colour2.value
	+" )";
	
	css.textContent = body.style.background + ";";

	
}

function randomize () {

if(body.style.background !== button.style.backgroundImage) {
	body.style.background = button.style.backgroundImage;
	css.textContent = body.style.background + ";";
}

else {
	var randomColour1 = random_rgba();
	var randomColour2 = random_rgba();

	body.style.background = "linear-gradient(to right, " +
	randomColour1
	+" , "
	+ randomColour2
	+" )";

	css.textContent = body.style.background + ";";
	button.style.backgroundImage = body.style.background;
}



}

function buttonbackgroundrandomizer () {

	var randomColour1 = getRandomRgb();
	var randomColour2 = getRandomRgb();

	button.style.backgroundImage = "linear-gradient(to right, " +
	randomColour1
	+" , "
	+ randomColour2
	+" )";
	
}


colour1.addEventListener("input" , changecolour);

colour2.addEventListener("input" , changecolour);

button.addEventListener("click", randomize);

button.addEventListener("mouseenter", buttonbackgroundrandomizer);