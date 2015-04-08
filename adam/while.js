
window.addEventListener("load", eventWindowLoaded, false);


function eventWindowLoaded() {
    mainFunction();
    mainFunction2();
}



function mainFunction2(){
     if (document.getElementById("dropCount").innerHTML <4 ){
    drawBall();
}
    else{
        drawBall2();
    }



    function drawBall(){
         var theCanvas6 = document.getElementById('circle6');
         var ctx6 = theCanvas6.getContext("2d");

          ctx6.beginPath();
             ctx6.arc(75,55,50,0,2*Math.PI,false);
             ctx6.fillStyle = '#FFFFFF';
             ctx6.fill();
             ctx6.stroke(); 
    }


     function drawBall2(){
         var theCanvas6 = document.getElementById('circle6');
         var ctx6 = theCanvas6.getContext("2d");

          ctx6.beginPath();
             ctx6.arc(75,55,50,0,2*Math.PI,false);
             ctx6.fillStyle = '#000000';
             ctx6.fill();
             ctx6.stroke(); 
    }
}

function mainFunction() {
   
    if (document.getElementById("dropCount").innerHTML <5 ){
    drawScreenP();
}
    else{
        drawScreenO();
    }
//Draw part//

    function drawScreenP() {
        
        var theCanvas = document.getElementById('circle');
        var theCanvas2 = document.getElementById('circle2');
        var theCanvas3 = document.getElementById('circle3');
        var theCanvas4 = document.getElementById('circle4');
        var theCanvas5 = document.getElementById('circle5');

        // Checking that the Canvas is instantiated properly before we try to use it.
        //
        if (theCanvas && theCanvas.getContext) {

            // Painting is done in the 2d context, so we check for that as well, before we use it.
            //
            var ctx = theCanvas.getContext("2d");
            var ctx2 = theCanvas2.getContext("2d");
            var ctx3 = theCanvas3.getContext("2d");
            var ctx4 = theCanvas4.getContext("2d");
            var ctx5 = theCanvas5.getContext("2d");

            ctx.beginPath();
             ctx.arc(75,55,50,0,2*Math.PI,false);
             ctx.fillStyle = '#FFFFFF';
             ctx.fill();
             ctx.stroke();  

           ctx2.beginPath();
             ctx2.arc(75,55,50,0,2*Math.PI,false);
             ctx2.fillStyle = '#FFFFFF';
             ctx2.fill();
             ctx2.stroke(); 

             ctx3.beginPath();
             ctx3.arc(75,55,50,0,2*Math.PI,false);
             ctx3.fillStyle = '#FFFFFF';
             ctx3.fill();
             ctx3.stroke(); 

             ctx4.beginPath();
             ctx4.arc(75,55,50,0,2*Math.PI,false);
             ctx4.fillStyle = '#FFFFFF';
             ctx4.fill();
             ctx4.stroke(); 

             ctx5.beginPath();
             ctx5.arc(75,55,50,0,2*Math.PI,false);
             ctx5.fillStyle = '#FFFFFF';
             ctx5.fill();
             ctx5.stroke();       

        }
    }

    function drawScreenO() {
        
        var theCanvas = document.getElementById('circle');
        var theCanvas2 = document.getElementById('circle2');
        var theCanvas3 = document.getElementById('circle3');
        var theCanvas4 = document.getElementById('circle4');
        var theCanvas5 = document.getElementById('circle5');

        // Checking that the Canvas is instantiated properly before we try to use it.
        //
        if (theCanvas && theCanvas.getContext) {

            // Painting is done in the 2d context, so we check for that as well, before we use it.
            //
            var ctx = theCanvas.getContext("2d");
            var ctx2 = theCanvas2.getContext("2d");
            var ctx3 = theCanvas3.getContext("2d");
            var ctx4 = theCanvas4.getContext("2d");
            var ctx5 = theCanvas5.getContext("2d");

             ctx.beginPath();
             ctx.arc(100,100,50,0,2*Math.PI,true);
             ctx.fillStyle = '#DE881E';
             ctx.fill();
             ctx.stroke();  

            ctx2.beginPath();
             ctx2.arc(200,200,50,0,2*Math.PI,false);
             ctx2.fillStyle = '#DE881E';
             ctx2.fill();
             ctx2.stroke(); 

             ctx3.beginPath();
             ctx3.arc(300,300,50,0,2*Math.PI,false);
             ctx3.fillStyle = '#DE881E';
             ctx3.fill();
             ctx3.stroke(); 

             ctx4.beginPath();
             ctx4.arc(400,400,50,0,2*Math.PI,false);
             ctx4.fillStyle = '#DE881E';
             ctx4.fill();
             ctx4.stroke(); 

             ctx5.beginPath();
             ctx5.arc(500,500,50,0,2*Math.PI,false);
             ctx5.fillStyle = '#DE881E';
             ctx5.fill();
             ctx5.stroke();

        }
    }

}



window.onload = function() {

    var dropZoneOne = document.querySelector('#drop-target-one');
    var dropZoneTwo = document.querySelector('#drop-target-two');
    var dragElements = document.querySelectorAll('#drag-elements li');
    var elementDragged = null;
    var elementDropped =1;

    for (var i = 0; i < dragElements.length; i++) {

        // Event Listener for when the drag interaction starts.
        dragElements[i].addEventListener('dragstart', function(e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', this.innerHTML);
            elementDragged = this;
        });

        // Event Listener for when the drag interaction finishes.
        dragElements[i].addEventListener('dragend', function(e) {
            elementDragged = null;
        });
    };

    // Event Listener for when the dragged element is over the drop zone.
    dropZoneOne.addEventListener('dragover', function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    });

dropZoneTwo.addEventListener('dragover', function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    });
    // Event Listener for when the dragged element enters the drop zone.
    dropZoneOne.addEventListener('dragenter', function(e) {
        this.className = "over";
    });
    dropZoneTwo.addEventListener('dragenter', function(e) {
        this.className = "over";
    });


    // Event Listener for when the dragged element leaves the drop zone.
    dropZoneOne.addEventListener('dragleave', function(e) {
        this.className = "";
    });

    dropZoneTwo.addEventListener('dragleave', function(e) {
        this.className = "";
    });


    // Event Listener for when the dragged element dropped in the drop zone.
    dropZoneOne.addEventListener('drop', function(e) {
        if (e.preventDefault) e.preventDefault(); 
    if (e.stopPropagation) e.stopPropagation(); 

        this.className = "";
       
        document.getElementById("dropCount").innerHTML = elementDropped++;
        //mainFunction();
       
        // Remove the element from the list.
        document.querySelector('#drag-elements').removeChild(elementDragged);

        //elementDragged = null;
        mainFunction2();
        if (elementDropped >5){
            alert("You lost");
              location.reload();
        }
        return false;
    });

    dropZoneTwo.addEventListener('drop', function(e) {
        if (e.preventDefault) e.preventDefault(); 
    if (e.stopPropagation) e.stopPropagation(); 

        this.className = "";
        
        document.getElementById("dropCount").innerHTML = elementDropped++;
        //mainFunction();
       
        // Remove the element from the list.
        document.querySelector('#drag-elements').removeChild(elementDragged);
        //elementDragged = null;
        mainFunction2();
        if (elementDropped <5){
            alert("You lost");
              location.reload();
        }
         else{
            alert("You win");
              location.reload();
        }
        return false;
    });




    
    
};

