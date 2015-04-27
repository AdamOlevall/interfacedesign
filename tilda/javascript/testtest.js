

function resizeCanvas() {
  canvas.width  = $(window).width() * 0.3;
  canvas.height = $(window).width() * 0.5;
}


function heart(xoff, yoff) {
    var canvas = document.getElementById("canvasHeart");

    var ctx = canvas.getContext('2d');
    
canvas.width  = $(window).width() * 0.3;
canvas.height = $(window).width() * 0.5;

window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('orientationchange', resizeCanvas, false);
resizeCanvas();






    ctx.clearRect(0,0,500,200);
    ctx.beginPath();
 
  ctx.moveTo(38 + xoff, 41 + yoff);
  ctx.bezierCurveTo(21 + xoff, -17 + yoff, -8 + xoff, 17 + yoff, 6 + xoff, 51 + yoff);
  ctx.bezierCurveTo(29 + xoff, 108 + yoff, 35 + xoff, 109 + yoff, 39 + xoff, 109 + yoff);
  ctx.bezierCurveTo(45 + xoff, 109 + yoff, 49 + xoff, 106 + yoff, 77 + xoff, 47 + yoff);
  ctx.bezierCurveTo(92 + xoff, 15 + yoff, 65 + xoff, -13 + yoff, 40 + xoff, 42 + yoff); 


    ctx.closePath();

    //custom heart
    ctx.lineWidth = 2;
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.strokeStyle = 'black';

  ctx.stroke();

    xoff+=0.7;
    var loopTimer = setTimeout('heart('+xoff+','+yoff+'), 100');

  if(xoff > 300){
    clearTimeout(loopTimer);
    heart(0,0);
    }
}   

/*
function flower() {


  var c = document.getElementById("canvas");

    var ctx = c.getContext("2d");
    var flowerImg = new Image();
    flowerImg.src = "images/flower.png";

    
    flowerImg.onload = function() {
        ctx.drawImage(flowerImg, 5, 5);
    };
}

function snake(xoff, yoff) {
    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,1200,300);
    ctx.beginPath();
 
  ctx.moveTo(38 + xoff, 41 + yoff);
  ctx.bezierCurveTo(21 + xoff, -17 + yoff, -8 + xoff, 17 + yoff, 6 + xoff, 51 + yoff);
  ctx.bezierCurveTo(29 + xoff, 108 + yoff, 35 + xoff, 109 + yoff, 39 + xoff, 109 + yoff);
  ctx.bezierCurveTo(45 + xoff, 109 + yoff, 49 + xoff, 106 + yoff, 77 + xoff, 47 + yoff);
  ctx.bezierCurveTo(92 + xoff, 15 + yoff, 65 + xoff, -13 + yoff, 40 + xoff, 42 + yoff); 


    ctx.closePath();

    //custom heart
    ctx.lineWidth = 2;
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.strokeStyle = 'black';

  ctx.stroke();

    xoff+=0.7;
    var loopTimer = setTimeout('heart('+xoff+','+yoff+'), 100');

  if(xoff > 1200){
    clearTimeout(loopTimer);
    flower(0,0);
    }
} 

*/



