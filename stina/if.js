/*var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");*/
//ctx.font = "30px Arial";
//ctx.fillText("Hello World",10,50); 
//var img = new Image();
function play_single_sound() {
        document.getElementById('frog').play();
}

function play_single_sound2() {
        document.getElementById('lose').play();
}

function play_single_sound3() {
        document.getElementById('mario').play();
}



//img.src = 'guldfisk.png';
/*img.onload = function() {
    draw(this); 
}; */
/// draw the image

var randomNumber = Math.floor((Math.random() * 10) + 1);

function draw(randomNumber) {
     var canvas = document.getElementById('myCanvas');
     var context = canvas.getContext('2d'); 
    // var numb = Math.floor((Math.random() * 10) + 1);
     setInterval(animation, 30);

      context.rect(0,0,100,100);
      context.fillStyle="rgba(0, 0, 0, 0)";
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
      var numb = randomNumber;
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
    /*  //the fish
    base_image = new Image();
    base_image.src = 'guldfisk.png';
    context.drawImage(base_image, 600, 250, 50, 50);
*/
//base_image.style.left = (base_image.style.left+10)+'px'; // pseudo-property code: Move right by 10px
//setTimeout(doMove,20); // call doMove() in 20 msec

//draw the waves
  /*    context.beginPath();
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
*/

// DRAW SUN
     /*  var centerX = canvas.width / 1.2;
      var centerY = canvas.height / 3;
      var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
     context.fillStyle = 'yellow';
      context.fill();

          context.beginPath();
      context.moveTo(760, 70);
      context.lineTo(710, 25);
      context.stroke();

         context.beginPath();
      context.moveTo(740, 130);
      context.lineTo(580, 100);
      context.stroke(); */
     // context.lineWidth = 5;
    //  context.strokeStyle = '#003300';
   //   context.stroke();
   //return numb;
//alert("hej");


  if (window.localStorage.getItem("backColor") == 'white'){
  switch_style ('white');
  }
  else {
  switch_style ('black');
      } 
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



function cloudColorBlue(randomNumber) {
var nummer = randomNumber;
if (nummer < 6) {
 play_single_sound3();
 alert("JA");
  //   $('#successMessage').show();

}
else {
   play_single_sound2(); 
    alert("NEJ");
  //$('#failureMessage').show();

}

}
function cloudColorWhite(randomNumber) {
var nummer = randomNumber;
if (nummer < 6) {
 play_single_sound2();
  alert("NEJ"); 
 //$('#failureMessage').show();

}
else {
  play_single_sound3();
   alert("JA");
    // $('#successMessage').show();

}
}
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

/*
   if ( event.target.className == "helicopter" ) {
       document.getElementById("helicopter").style.fontSize = "larger";
      }
function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

var cols = document.querySelectorAll('.column');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
});
/*
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
*/