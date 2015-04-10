/*var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50); */
var img = new Image();
img.src = 'guldfisk.png';
img.onload = function() {
    draw(this); 
};

/// draw the image
function draw(img) {
     var canvas = document.getElementById('myCanvas');
     var context = canvas.getContext('2d'); 
      var centerX = canvas.width / 1.2;
      var centerY = canvas.height / 3;
      var radius = 70;
      var fillcolor = 'yellow';

///draw the box
      context.rect(0,0,1000,1000);
      context.fillStyle="blue";
      context.fill();


///draw the cloud

      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

/// complete custom shape
      var numb = Math.floor((Math.random() * 10) + 1);
      context.lineWidth = 5;
// choose color for the cloud and fill it
if (numb < 6) {
    context.fillStyle = '#8ED6FF';

  } else {
        context.fillStyle = 'white';
  }
      context.fill();
      context.strokeStyle = '#2ECCFA';
      context.stroke();

      //the fish
    base_image = new Image();
  base_image.src = 'guldfisk.png';
  context.drawImage(base_image, 600, 250, 50, 50);

//base_image.style.left = (base_image.style.left+10)+'px'; // pseudo-property code: Move right by 10px
//setTimeout(doMove,20); // call doMove() in 20 msec

//draw the waves
      context.beginPath();
      context.moveTo(0, 380);
      context.bezierCurveTo(5, 360, 10, 340, 40, 380);
      context.moveTo(40, 380);
      context.bezierCurveTo(45, 360, 50, 340, 80, 380);
      context.moveTo(40, 380);

      context.lineWidth = 5;
      context.fillStyle = 'white';
       context.fill();
      context.strokeStyle = '#8ED6FF';
      context.stroke();


    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = fillcolor;
    context.fill();
   /* context.lineWidth = linewidth;
    context.strokeStyle = strokestyle;
    context.stroke();
     
    context.fillStyle = fontcolor;
    context.textAlign = textalign;
    context.font = fonttype;
     
    context.fillText(filltext, x, y);    */ 
};

// SOLEN
      /*

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'yellow';
      context.fill();
*/
/* var Circle = function(centerX, centerY, radius) {
    this.left = centerX - radius;
    this.top = centerY - radius;
    this.right = centerX + radius;
    this.bottom = centerY + radius;
}; */

          context.beginPath();
      context.moveTo(760, 70);
      context.lineTo(710, 25);
      context.stroke();

         context.beginPath();
      context.moveTo(740, 130);
      context.lineTo(580, 100);
      context.stroke();
     // context.lineWidth = 5;
    //  context.strokeStyle = '#003300';
   //   context.stroke();
} /*
var degrees = 0;

function animation(){

  var elem = document.getElementById('guldfisk_png');
  if(navigator.userAgent.match("Chrome")){
    elem.style.WebkitTransform = "rotate("+degrees+"deg)";
  } else if(navigator.userAgent.match("Firefox")){
    elem.style.MozTransform = "rotate("+degrees+"deg)";
  } else if(navigator.userAgent.match("MSIE")){
    elem.style.msTransform = "rotate("+degrees+"deg)";
  } else if(navigator.userAgent.match("Opera")){
    elem.style.OTransform = "rotate("+degrees+"deg)";
  } else {
    elem.style.transform = "rotate("+degrees+"deg)";
  }
  degrees++;
  
  if(degrees > 359){
    degrees = 1;
  }
}

*/
/*
function makefish() {
 base_image = new Image();
  base_image.src = 'guldfisk.png';
  base_image.onload = function(){
    context.drawImage(base_image, 100, 100);

} */


/*


function makefish() {
 base_image = new Image();
  base_image.src = 'guldfisk.png';
  base_image.onload = function(){
    context.drawImage(base_image, 100, 100);

} */