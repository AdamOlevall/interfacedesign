
window.addEventListener("load", eventWindowLoaded, false);


function eventWindowLoaded() {
   // mainFunction();
    mainFunction2();
   
}

function play_single_sound() {
        document.getElementById('frog').play();
}

function play_single_sound2() {
        document.getElementById('lose').play();
}

function play_single_sound3() {
        document.getElementById('mario').play();
}

function play_single_sound4() {
        document.getElementById('synth').play();
} 


var x =  Math.floor((Math.random() * 6) + 1);
var y = x+1;
var z = x-2;

    console.log(x);     
    console.log(y);  
        console.log(z);  

function mainFunction2(){
     
    drawBall();
    drawBall2();
    drawBall3();
    drawBall5();
    drawBall6();
    drawBall7();

   if ((document.getElementById("dropCount").innerHTML > z) && (document.getElementById("dropCount").innerHTML >= 0)){
        drawBall4();
    }



       function drawBall(){

var canvas = document.getElementById('circle');
     var   ctx = canvas.getContext("2d");

var W = 200,
 H = 250;


canvas.height = H; canvas.width = W;



var ball = {},
        gravity = 0.1,
        bounceFactor = 0.98;


ball = {
    x: W/2,
    y: 50,
    
    radius: 40,
    color: "#D037C3",
    
    // Velocity components
    vx: 0,
    vy: 1,
    
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
    
    // Now, lets make the ball move by adding the velocity vectors to its position
    ball.y += ball.vy;
    
    // Lets add some acceleration
    ball.vy += gravity;
    //Perfect! Now, lets make it rebound when it touches the floor
    if(ball.y + ball.radius > H) {
        // First, reposition the ball on top of the floor and then bounce it!
        ball.y = H - ball.radius;
        ball.vy *= -bounceFactor;
        
}
}


setInterval(update, 1000/60);



} 
    
       function drawBall2(){

     var canvas = document.getElementById('circle2');
     var   ctx = canvas.getContext("2d");



var W = 200,
 H = 250;

canvas.height = H; canvas.width = W;



var ball = {},
        gravity = 0.1,
        bounceFactor = 0.98;




ball = {
    x: W/2,
    y: 50,
    
    radius: 40,
    color: "#8D2DE1",
    
    vx: 0,
    vy: 1,
    
    draw: function() {
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
};

function update() {
    clearCanvas();
    ball.draw();
    
    
    // Now, lets make the ball move by adding the velocity vectors to its position
    ball.y += ball.vy;
    // Ohh! The ball is moving!
    // Lets add some acceleration
    ball.vy += gravity;
    //Perfect! Now, lets make it rebound when it touches the floor
    if(ball.y + ball.radius > H) {
        // First, reposition the ball on top of the floor and then bounce it!
        ball.y = H - ball.radius;
        ball.vy *= -bounceFactor;
}
   }   



function clearCanvas() {
    ctx.clearRect(0, 0, W, H);
}
// Now, the animation time!
// in setInterval, 1000/x depicts x fps! So, in this casse, we are aiming for 60fps for smoother animations.
setInterval(update, 1000/60);
//setInterval(update2, 1000/60);

// This completes the tutorial here. Try experimenting with different values to get a better understanding.

// Also, try playing with the x-component of velocity ;)


}

      function drawBall3(){

var canvas = document.getElementById('circle3');
     var   ctx = canvas.getContext("2d");

var W = 200,
 H = 250;


canvas.height = H; canvas.width = W;



var ball = {},
        gravity = 0.1,
        bounceFactor = 0.98;


ball = {
    x: W/2,
    y: 50,
    
    radius: 40,
    color: "#40E2EB",
    
    // Velocity components
    vx: 0,
    vy: 1,
    
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
    
    // Now, lets make the ball move by adding the velocity vectors to its position
    ball.y += ball.vy;
    
    // Lets add some acceleration
    ball.vy += gravity;
    //Perfect! Now, lets make it rebound when it touches the floor
    if(ball.y + ball.radius > H) {
        // First, reposition the ball on top of the floor and then bounce it!
        ball.y = H - ball.radius;
        ball.vy *= -bounceFactor;
        
}
}


setInterval(update, 1000/60);



} 


      function drawBall4(){

var canvas = document.getElementById('circle4');
     var   ctx = canvas.getContext("2d");

var W = 200,
 H = 250;


canvas.height = H; canvas.width = W;



var ball = {},
        gravity = 0.1,
        bounceFactor = 0.98;


ball = {
    x: W/2,
    y: 50,
    
    radius: 40,
    color: "#5CFA07",
    
    // Velocity components
    vx: 0,
    vy: 1,
    
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
    
    // Now, lets make the ball move by adding the velocity vectors to its position
    ball.y += ball.vy;
    
    // Lets add some acceleration
    ball.vy += gravity;
    //Perfect! Now, lets make it rebound when it touches the floor
    if(ball.y + ball.radius > H) {
        // First, reposition the ball on top of the floor and then bounce it!
        ball.y = H - ball.radius;
        ball.vy *= -bounceFactor;
        
}
}


setInterval(update, 1000/60);



} 


      function drawBall5(){

var canvas = document.getElementById('circle5');
     var   ctx = canvas.getContext("2d");

var W = 200,
 H = 250;


canvas.height = H; canvas.width = W;



var ball = {},
        gravity = 0.1,
        bounceFactor = 0.98;


ball = {
    x: W/2,
    y: 50,
    
    radius: 40,
    color: "#FF7C00",
    
    // Velocity components
    vx: 0,
    vy: 1,
    
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
    
    // Now, lets make the ball move by adding the velocity vectors to its position
    ball.y += ball.vy;
    
    // Lets add some acceleration
    ball.vy += gravity;
    //Perfect! Now, lets make it rebound when it touches the floor
    if(ball.y + ball.radius > H) {
        // First, reposition the ball on top of the floor and then bounce it!
        ball.y = H - ball.radius;
        ball.vy *= -bounceFactor;
        
}
}


setInterval(update, 1000/60);



} 


      function drawBall6(){

var canvas = document.getElementById('circle6');
     var   ctx = canvas.getContext("2d");

var W = 200,
 H = 250;


canvas.height = H; canvas.width = W;



var ball = {},
        gravity = 0.1,
        bounceFactor = 0.98;


ball = {
    x: W/2,
    y: 50,
    
    radius: 40,
    color: "#FFEB00",
    
    // Velocity components
    vx: 0,
    vy: 1,
    
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
    
    // Now, lets make the ball move by adding the velocity vectors to its position
    ball.y += ball.vy;
    
    // Lets add some acceleration
    ball.vy += gravity;
    //Perfect! Now, lets make it rebound when it touches the floor
    if(ball.y + ball.radius > H) {
        // First, reposition the ball on top of the floor and then bounce it!
        ball.y = H - ball.radius;
        ball.vy *= -bounceFactor;
        
}
}


setInterval(update, 1000/60);



} 


      function drawBall7(){

var canvas = document.getElementById('circle7');
     var   ctx = canvas.getContext("2d");

var W = 200,
 H = 250;


canvas.height = H; canvas.width = W;



var ball = {},
        gravity = 0.1,
        bounceFactor = 0.98;


ball = {
    x: W/2,
    y: 50,
    
    radius: 40,
    color: "#FA1707",
    
    // Velocity components
    vx: 0,
    vy: 1,
    
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
    
    // Now, lets make the ball move by adding the velocity vectors to its position
    ball.y += ball.vy;
    
    // Lets add some acceleration
    ball.vy += gravity;
    //Perfect! Now, lets make it rebound when it touches the floor
    if(ball.y + ball.radius > H) {
        // First, reposition the ball on top of the floor and then bounce it!
        ball.y = H - ball.radius;
        ball.vy *= -bounceFactor;
        
}
}


setInterval(update, 1000/60);



} 


     
} 

   /*  
function drawBall(){

var canvas = document.getElementById('circle');
   var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#FF3333';
            ctx.stroke();
}

   function drawBall2(){

var canvas = document.getElementById('circle');
   var ctx = canvas.getContext("2d");
ctx.beginPath();
            ctx.arc(50, 50, 30, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'lightGreen';
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#FF3333';
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#FF3333';
            ctx.stroke();
}*/


window.onload = function() {

    var dropZoneOne = document.querySelector('#e');
   var dropZoneTwo = document.querySelector('#f');
    var dragElements = document.querySelectorAll('#drag-elements li');
    var elementDragged = null;
    var elementDropped =1;

    for (var i = 0; i < dragElements.length; i++) {

        // Event Listener for when the drag interaction starts.
        dragElements[i].addEventListener('dragstart', function(e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', this.innerHTML);
            elementDragged = this;
        });

        // Event Listener for when the drag interaction finishes.
        dragElements[i].addEventListener('dragend', function(e) {
            elementDragged = null;
         
        });
    };

    // Event Listener for when the dragged element is over the drop zone.
    dropZoneOne.addEventListener('dragover', function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

         if(elementDropped<x){
          e.target.style.border = "10px dashed #FFFFFF";
       e.target.style.background = "#2DF734" ;   
         
         }
        else{
                e.target.style.border = "10px dashed #FFFFFF";
                e.target.style.background = "#F70F0F" ;   
        }
        return false;
    });

    dropZoneTwo.addEventListener('dragover', function(e) {
        if (e.preventDefault) {
           e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        if(elementDropped<x){
          e.target.style.border = "10px dashed #FFFFFF";
       e.target.style.background = "#F70F0F" ;   
         
         }
        else{
                e.target.style.border = "10px dashed #FFFFFF";
                e.target.style.background = "#2DF734" ;   
        }

       return false;
    });
    // Event Listener for when the dragged element enters the drop zone.
    dropZoneOne.addEventListener('dragenter', function(e) {
        this.className = "over";
         if(elementDropped<x){
          e.target.style.border = "10px dashed #FFFFFF";
       e.target.style.background = "#2DF734" ;   
         
         }
        else{
                e.target.style.border = "10px dashed #FFFFFF";
                e.target.style.background = "#F70F0F" ;   
        }
    });
   
   dropZoneTwo.addEventListener('dragenter', function(e) {
        this.className = "over";
        if(elementDropped<x){
          e.target.style.border = "10px dashed #FFFFFF";
       e.target.style.background = "#F70F0F" ;   
         
         }
        else{
                e.target.style.border = "10px dashed #FFFFFF";
                e.target.style.background = "#2DF734" ;   
        }
    });


    // Event Listener for when the dragged element leaves the drop zone.
    dropZoneOne.addEventListener('dragleave', function(e) {
        this.className = "";
        e.target.style.border = "5px dashed #FFFFFF";
        e.target.style.background = "rgba(0, 255, 0, 0.3)";
    });

    dropZoneTwo.addEventListener('dragleave', function(e) {
        this.className = "";
        e.target.style.border = "5px dashed #FFFFFF";
        e.target.style.background = "rgba(255, 255, 0, 0.3)";
    });


    // Event Listener for when the dragged element dropped in the drop zone.
    dropZoneOne.addEventListener('drop', function(e) {
        if (e.preventDefault) e.preventDefault(); 
    if (e.stopPropagation) e.stopPropagation(); 

        this.className = "";
           
        document.getElementById("dropCount").innerHTML = elementDropped++;
         document.querySelector('#drag-elements').removeChild(elementDragged);
        
         if(elementDropped<y){
           play_single_sound(); 
         
         }
         else{
            play_single_sound2();
         }
         
       
        // Remove the element from the list.
       
       e.target.style.border = "5px dashed #FFFFFF";
       e.target.style.background = "rgba(0, 255, 0, 0.3)";
      
        //elementDragged = null;
        mainFunction2();
        if (elementDropped >x){
            alert("You lost");
              location.reload();
        }
        return false;
    });

    dropZoneTwo.addEventListener('drop', function(e) {
        if (e.preventDefault) e.preventDefault(); 
    if (e.stopPropagation) e.stopPropagation(); 

        this.className = "";
       
        document.getElementById("dropCount").innerHTML = elementDropped++;
        //mainFunction();
       
        // Remove the element from the list.
        document.querySelector('#drag-elements').removeChild(elementDragged);
        //elementDragged = null;
        mainFunction2();

         if(elementDropped<y){
           play_single_sound2(); 
         
         }
         else{
            play_single_sound3();
         }


        if (elementDropped <x){
            alert("You lost");
              location.reload();
        }
         else{
            alert("You win");
              location.reload();
        }
        return false;
    });




    
    
};

