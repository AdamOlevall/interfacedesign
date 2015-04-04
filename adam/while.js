
window.addEventListener("load", eventWindowLoaded, false);


function eventWindowLoaded() {
    mainFunction();
}

function mainFunction() {
   
    if (document.getElementById("dropCount").innerHTML < 9 ){
    drawScreenP();
}
    else{
        drawScreenO();
    }
//Draw part//

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
