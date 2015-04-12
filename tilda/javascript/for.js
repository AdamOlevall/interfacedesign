
function drawCircle() {
 	var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

      // begin custom shape
      context.beginPath();
      context.moveTo(100, 100);
      context.bezierCurveTo(125, 75, 75, 50, 80, 100);
      context.bezierCurveTo(60, 80, 50, 100, 70, 120);

      context.bezierCurveTo(60, 80, 50, 100, 70, 120);

  //  context.quadraticCurveTo(50,125,50,100);
  //  context.quadraticCurveTo(50,75,100,100);

//    context.quadraticCurveTo(50,125,80,150);
 //   context.quadraticCurveTo(80,175,100,100);
     // context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      //context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      //context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      //context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      context.closePath();
      context.lineWidth = 5;
      context.strokeStyle = 'blue';
      context.stroke();

}
