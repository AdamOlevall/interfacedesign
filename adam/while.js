
var clicks = 0;

function myCounter(){

    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    mainFunction();
   if (clicks > 9){
    alert("You lost!!");
 location.reload();
}

}


function myFinish(){

if(clicks > 8){
    alert("You won!!");
        location.reload();
}
else {
    alert("You lost!!");
 location.reload();
}
}




window.addEventListener("load", eventWindowLoaded, false);


function eventWindowLoaded() {
    mainFunction();
}

function mainFunction() {
   
    if (clicks < 9 ){
    drawScreenG();
}
    else{
        drawScreenB();
    }


    function drawScreenG() {
        
        var theCanvas = document.getElementById('circle');

        // Checking that the Canvas is instantiated properly before we try to use it.
        //
        if (theCanvas && theCanvas.getContext) {

            // Painting is done in the 2d context, so we check for that as well, before we use it.
            //
            var ctx = theCanvas.getContext("2d");

            ctx.beginPath();
             ctx.arc(100,100,50,0,2*Math.PI,false);
             ctx.fillStyle = 'lightGreen';
             ctx.fill();
             ctx.stroke();        

        }
    }

    function drawScreenB() {
        
        var theCanvas = document.getElementById('circle');

        // Checking that the Canvas is instantiated properly before we try to use it.
        //
        if (theCanvas && theCanvas.getContext) {

            // Painting is done in the 2d context, so we check for that as well, before we use it.
            //
            var ctx = theCanvas.getContext("2d");

             ctx.beginPath();
             ctx.arc(100,100,50,0,2*Math.PI,false);
             ctx.fillStyle = 'lightBlue';
             ctx.fill();
             ctx.stroke();  

        }
    }


}
