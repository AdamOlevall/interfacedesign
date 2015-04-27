// Now some basic canvas stuff. Here we'll make a variable for the canvas and then initialize its 2d context for drawing
var count = 0;
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded(){
	startball();
}


function startball(){

var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");


// Now setting the width and height of the canvas
var W = 350,
	H = 200;

// Applying these to the canvas element
canvas.height = H; canvas.width = W;

// First of all we'll create a ball object which will contain all the methods and variables specific to the ball.
// Lets define some variables first

var ball = {},
		gravity = 0.0,
		bounceFactor = 0.0;

// The ball object
// It will contain the following details
// 1) Its x and y position
// 2) Radius and color
// 3) Velocity vectors
// 4) the method to draw or paint it on the canvas

ball = {
	
	x: 15,
	y: 185,
	
	radius: 15,
	color: "black",
	
	// Velocity components
	vx: 0.4,
	//	vy: 0.4,
	
	draw: function() {
		
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
};


function clearCanvas() {
	ctx.clearRect(0, 0, W, H);
}



function update() {
	clearCanvas();
	ball.draw();
	
	if(ball.x > (W-10)){
		youLost();
	}else{
		ball.x += ball.vx;
	}
}

setInterval(update, 1000/60);


}	



function flipit(el, check) {
		flipCount();
		if(count>1){
			location.reload();
			alert("to many flipps");
		}
		else{
        if(check == true){
        el.children[1].style.webkitTransform = "perspective(600px) rotateY(-180deg)";
		el.children[0].style.webkitTransform = "perspective(600px) rotateY(0deg)";
        el.children[1].style.transition = "all .5s linear 0s";
        el.children[0].style.transition = "all .5s linear 0s";
        el.children[1].style.transform = "perspective(600px) rotateY(-180deg)";
        el.children[0].style.transform = "perspective(600px) rotateY(0deg)";
        el.children[1].style.webkitTransition = "all .5s linear 0s";
        el.children[0].style.webkitTransition = "all .5s linear 0s";
        
        }
        if(check == false){
        el.children[1].style.webkitTransform = "perspective(600px) rotateY(0deg)";
        el.children[0].style.webkitTransform = "perspective(600px) rotateY(180deg)";
        el.children[1].style.transition = "all .5s linear 0s";
        el.children[0].style.transition = "all .5s linear 0s";
        el.children[1].style.transform = "perspective(600px) rotateY(0deg)";
        el.children[0].style.transform = "perspective(600px) rotateY(180deg)";
        el.children[1].style.webkitTransition = "all .5s linear 0s";
        el.children[0].style.webkitTransition = "all .5s linear 0s";
		}

	}
		

}
function flipCount(){

	count += 1;

}


function youLost(){
	location.reload();
	alert("Lost");
	
}


   