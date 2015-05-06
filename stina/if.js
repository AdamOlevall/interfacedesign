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
   
///draw the box
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
/*
         context.beginPath();
      context.moveTo(100, 80);
      context.bezierCurveTo(60, 100, 60, 150, 160, 150);
      context.bezierCurveTo(180, 180, 250, 180, 170, 150);
      context.bezierCurveTo(350, 150, 350, 120, 320, 100);
      context.bezierCurveTo(360, 40, 300, 30, 270, 50);
      context.bezierCurveTo(250, 5, 180, 20, 180, 50);
      context.bezierCurveTo(130, 5, 80, 20, 100, 80);

*/
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
      //the fish
    base_image = new Image();
  base_image.src = 'guldfisk.png';
  context.drawImage(base_image, 600, 250, 50, 50);

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
}

function cloudColorBlue(randomNumber) {
var nummer = randomNumber;
if (nummer < 6) {
 play_single_sound3();
  alert("Very good");

}
else {
   play_single_sound2(); 
  alert("Wrong");

}

}
function cloudColorWhite(randomNumber) {
var nummer = randomNumber;
if (nummer < 6) {
 play_single_sound2(); 
 alert("Wrong");

}
else {
  play_single_sound3();
  alert("Very Good");

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

window.onload = function () {
  var dragElements = document.getElementById('#drag-elements li');
  // var dragElements = document.querySelectorAll('#drag-elements li');
    var elementDragged = null;
   var draggable = document.getElementById(".mike");

    draggable.addEventListener('dragstart', dragStart, false);
    draggable.addEventListener('dragend'  , dragEnd  , false);

    var droptarget = document.getElementById(".helicopter");

    droptarget.addEventListener('dragenter', dragEnter  , false);
    droptarget.addEventListener('dragover' , dragOver   , false);
    droptarget.addEventListener('dragleave', dragLeave  , false);
    droptarget.addEventListener('drop'     , drop       , false);


    /* Draggable event handlers */
    function dragStart(event) {
    }

    function dragEnd(event) {

    }

    /* Drop target event handlers */
    function dragEnter(event) {
    
    }

    function dragOver(event) {
        event.preventDefault();
        return false;
    }

    function dragLeave(event) {
    }

    function drop(event) {
       // event.preventDefault();
    dragElements.removeChild(elementDragged);
        //document.getElementById(".mike").groda.css.visibility = hidden;
        return false;
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