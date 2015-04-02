
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
    drawScreenP();
}
    else{
        drawScreenO();
    }


    function drawScreenP() {
        
        var theCanvas = document.getElementById('circle');

        // Checking that the Canvas is instantiated properly before we try to use it.
        //
        if (theCanvas && theCanvas.getContext) {

            // Painting is done in the 2d context, so we check for that as well, before we use it.
            //
            var ctx = theCanvas.getContext("2d");

            ctx.beginPath();
             ctx.arc(100,100,50,0,2*Math.PI,false);
             ctx.fillStyle = '#DC00BF';
             ctx.fill();
             ctx.stroke();        

        }
    }

    function drawScreenO() {
        
        var theCanvas = document.getElementById('circle');

        // Checking that the Canvas is instantiated properly before we try to use it.
        //
        if (theCanvas && theCanvas.getContext) {

            // Painting is done in the 2d context, so we check for that as well, before we use it.
            //
            var ctx = theCanvas.getContext("2d");

             ctx.beginPath();
             ctx.arc(100,100,50,0,2*Math.PI,true);
             ctx.fillStyle = '#DE881E';
             ctx.fill();
             ctx.stroke();  

        }
    }


}


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}