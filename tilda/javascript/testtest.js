var timeoutID;
var timeout;


function resizeCanvas() {
  canvas.width  = $(window).width() * 0.40;
  canvas.height = $(window).width() * 0.1;
}


function heart(xoff, yoff) {
    var canvas = document.getElementById("canvasHeart");

    var ctx = canvas.getContext('2d');
  
canvas.width  = $(window).width() * 0.40;
canvas.height = $(window).width() * 0.1;

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

  if(xoff > 600){
    clearTimeout(loopTimer);
    heart(0,0);
    }
}   

function help() {

  var canvas = document.getElementById("tutorial");
  var ctx = canvas.getContext('2d');
  canvas.width  = $(window).width() * 0.7; 
  canvas.height = $(window).width() *0.32;
  var bubble = new Image();
    
  bubble.onload = function() {
    ctx.drawImage(bubble, 0, 40);
  };
  bubble.src = "images/speechbubble.png";
   if (window.localStorage.getItem("backColor") == 'white'){
  switch_style ('white');
  }
  else {
  switch_style ('black');
      } 
}

function tutorial() {

  var canvas = document.getElementById("tutorial");
  var ctx = canvas.getContext('2d');
  canvas.width  = $(window).width() * 0.7;
  canvas.height = $(window).width() *0.32;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  var bubble1 = new Image();
  
  bubble1.onload = function() {
    ctx.drawImage(bubble1, 0, 40);
  };
  bubble1.src = "images/bubble1.png";

  //timeoutID = window.setInterval(arrows, 1000);

   clearInterval(timeoutID);

  document.onkeydown = checkKey;
}
/*
function arrows() {

  var canvas = document.getElementById("tutorial");
  var ctx = canvas.getContext('2d');
  canvas.width  = $(window).width() * 0.25;
  canvas.height = $(window).width() *0.2;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  var bubble1 = new Image();
 
  bubble1.onload = function() {
    ctx.drawImage(bubble1, 100, 100);
  };
  bubble1.src = "images/arrows.png";

  ctx.font="15px Monaco";
  ctx.fillText("Press an arrow on the keyboard!",40,230);
  
  clearInterval(timeoutID);

  document.onkeydown = checkKey;
}
*/

function checkKey(e) {
    document.onkeydown = null;
    e = e || window.event;
  
    if (e.keyCode == '38' || e.keyCode == '40' || e.keyCode == '39' || e.keyCode == '37') {
        console.log("igen");
   
   //paint red arrows
      var canvas = document.getElementById("tutorial");
      var ctx = canvas.getContext('2d');
      canvas.width  = $(window).width() * 0.7;
      canvas.height = $(window).width() *0.32;
      ctx.clearRect(0,0,canvas.width,canvas.height);
 
      var flowerX = flower.x + 340;
      var flowerY = flower.y  - 20;


      var redArrow = new Image();
      var flowerBubble = new Image();
 
      redArrow.onload = function() {
        ctx.drawImage(redArrow, flowerX, flowerY);
      };
      redArrow.src = "images/redarrow.png";

     flowerBubble.onload = function() {
        ctx.drawImage(flowerBubble, 0, 40);
      };
      flowerBubble.src = "images/flowerBubble.png";



      timeout = window.setInterval(stopTimer, 2000);
    }


  }

  function stopTimer() {

      //paint yellow arrow
      var canvas = document.getElementById("tutorial");
      var ctx = canvas.getContext('2d');
      canvas.width  = $(window).width() * 0.7;
      canvas.height = $(window).width() *0.32;
      ctx.clearRect(0,0,canvas.width,canvas.height);

      var basketX = basket.x + 340;
      var basketY = basket.y  + 0;

      var yellowArrow = new Image();
 
        yellowArrow.onload = function() {
        ctx.drawImage(yellowArrow, basketX, basketY);
      };
      yellowArrow.src = "images/yellowarrow.png";

      var basketBubble = new Image();
 
        basketBubble.onload = function() {
        ctx.drawImage(basketBubble, 0, 40);
      };
      basketBubble.src = "images/basketBubble.png";

      clearInterval(timeout);
      timeout = window.setInterval(gotit, 2000);
  }

  function gotit() {
      var canvas = document.getElementById("tutorial");
      var ctx = canvas.getContext('2d');
      canvas.width  = $(window).width() * 0.7;
      canvas.height = $(window).width() *0.32;
      ctx.clearRect(0,0,canvas.width,canvas.height);

      var doneBubble = new Image();
 
      doneBubble.onload = function() {
      ctx.drawImage(doneBubble, 0, 40);
      };
      doneBubble.src = "images/doneBubble.png";

      clearInterval(timeout);


  }

var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;

function switch_style ( css_title )
{

  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
   i < link_tag.length ; i++ ) {

    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
 
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
 
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}


