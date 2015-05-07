

// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//canvas.width = 512;
//canvas.height = 480;
canvas.width  = $(window).width() * 0.35;
canvas.height = $(window).width() * 0.33;

window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('orientationchange', resizeCanvas, false);
resizeCanvas();

function resizeCanvas() {
    canvas.width  = $(window).width() * 0.35;
	canvas.height = $(window).width() * 0.33;
}




//document.body.appendChild(canvas);

// Background image
/*var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";
*/



// flower image
var flowerReady = false;
var flowerImage = new Image();
flowerImage.onload = function () {
	flowerReady = true;
};
flowerImage.src = "images/flower.png";

// bakset image
var basketReady = false;
var basketImage = new Image();
basketImage.onload = function () {
	basketReady = true;
};
basketImage.src = "images/basketGame.png";

// Game objects
var flower = {
	speed: canvas.width/2.5
	//200 // movement in pixels per second
};
var basket = {};
var flowersCollected = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a basket
var reset = function () {
	flower.x = canvas.width / 2;
	flower.y = canvas.height / 2;

	// Throw the basket somewhere on the screen randomly
	basket.x = canvas.width*0.15 + (Math.random() * (canvas.width - canvas.width*0.3));
	basket.y = canvas.height*0.15 + (Math.random() * (canvas.height - canvas.height*0.3));
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		flower.y -= flower.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		flower.y += flower.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		flower.x -= flower.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		flower.x += flower.speed * modifier;
	}

	// Are they touching?
	if (
		flower.x <= (basket.x + 32)
		&& basket.x <= (flower.x + 32)
		&& flower.y <= (basket.y + 32)
		&& basket.y <= (flower.y + 32)
	) {
		++flowersCollected;
		reset();
	}
};

// Draw everything
var render = function () {
	/*if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}*/

	


    ctx.clearRect(0,0,canvas.width,canvas.height);

	if (flowerReady) {
		ctx.drawImage(flowerImage, flower.x, flower.y, canvas.width*0.07, canvas.height*0.07);
	}

	if (basketReady) {
		ctx.drawImage(basketImage, basket.x, basket.y, canvas.width*0.15, canvas.height*0.15);
	}


	// Score
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = getFont();
	//"15px Monaco";

	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Flowers in the basket: " + flowersCollected, 15, 15);



};

function getFont() {
    var ratio = 15 / 502;
    var size = canvas.width * ratio;
    
    return (size|0) + 'px Monaco';
}

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
	

		requestAnimationFrame(main);

	
	// Request to do this again ASAP
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();


function done() {
	var canvas = document.getElementById("tutorial");
  	var ctx = canvas.getContext('2d');
  	canvas.width  = $(window).width() * 0.7; 
  	canvas.height = $(window).width() *0.33;
  	 ctx.clearRect(0,0,canvas.width,canvas.height);


	if(flowersCollected == 10) {
	console.log("you won!");

  	var winBubble = new Image();    
  	winBubble.onload = function() {
    ctx.drawImage(winBubble, 0, 40);
  	};
  	winBubble.src = "images/winBubble.png";
  	flowersCollected = 0;

  	

	}
	else {
		var againBubble = new Image();    
  		againBubble.onload = function() {
    	ctx.drawImage(againBubble, 0, 40);
  		};
  		againBubble.src = "images/againBubble.png";
  		flowersCollected = 0;
	}
}



