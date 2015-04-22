function draw() {
  var canvas = document.getElementById('balloon');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);

      ctx.strokeStyle = '#FFFFFF';

    ctx.stroke();
  }
}
/*
function redirectFor() {

  document.getElementById('body').innerHTML='<object type="text/html" data="for.html" ></object>';
       document.getElementById('body').src = "../for.html";

    }
*//*
  document.getElementById("myButton").onclick = function () {
        location.href = "www.youtube.com";
    };*/