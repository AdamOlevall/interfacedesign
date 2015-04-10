
window.addEventListener("load", eventWindowLoaded, false);



function eventWindowLoaded() {
   // mainFunction();
    mainFunction2();
}

function play_single_sound() {
        document.getElementById('frog').play();
}

function play_single_sound2() {
        document.getElementById('lose').play();
}

function play_single_sound3() {
        document.getElementById('mario').play();
}

function mainFunction2(){
     if (document.getElementById("dropCount").innerHTML <4 ){
    drawBall();
}
    else{
        drawBall2();
    }



    function drawBall(){
         var theCanvas = document.getElementById('circle');
         var ctx = theCanvas.getContext("2d");

          ctx.beginPath();
             ctx.arc(75,55,50,0,2*Math.PI,false);
             ctx.fillStyle = '#FFFFFF';
             ctx.fill();
             ctx.stroke(); 
    }


     function drawBall2(){
         var theCanvas = document.getElementById('circle');
         var ctx = theCanvas.getContext("2d");

function mainFunction() {
   
    if (document.getElementById("dropCount").innerHTML < 9 ){
    drawScreenP();
}
    else{
        drawScreenO();
    }
//Draw part//
          ctx.beginPath();
             ctx.arc(75,55,50,0,2*Math.PI,false);
             ctx.fillStyle = '#000000';
             ctx.fill();
             ctx.stroke(); 
    }
}




window.onload = function() {

    var dropZoneOne = document.querySelector('#e');
   var dropZoneTwo = document.querySelector('#f');
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

         if(elementDropped<5){
          e.target.style.border = "10px dashed #FFFFFF";
       e.target.style.background = "#2DF734" ;   
         
         }
        else{
                e.target.style.border = "10px dashed #FFFFFF";
                e.target.style.background = "#F70F0F" ;   
        }
        return false;
    });

    dropZoneTwo.addEventListener('dragover', function(e) {
        if (e.preventDefault) {
           e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        if(elementDropped<5){
          e.target.style.border = "10px dashed #FFFFFF";
       e.target.style.background = "#F70F0F" ;   
         
         }
        else{
                e.target.style.border = "10px dashed #FFFFFF";
                e.target.style.background = "#2DF734" ;   
        }

}
       return false;
    });
    // Event Listener for when the dragged element enters the drop zone.
    dropZoneOne.addEventListener('dragenter', function(e) {
        this.className = "over";
         if(elementDropped<5){
          e.target.style.border = "10px dashed #FFFFFF";
       e.target.style.background = "#2DF734" ;   
         
         }
        else{
                e.target.style.border = "10px dashed #FFFFFF";
                e.target.style.background = "#F70F0F" ;   
        }
    });
   
   dropZoneTwo.addEventListener('dragenter', function(e) {
        this.className = "over";
        if(elementDropped<5){
          e.target.style.border = "10px dashed #FFFFFF";
       e.target.style.background = "#F70F0F" ;   
         
         }
        else{
                e.target.style.border = "10px dashed #FFFFFF";
                e.target.style.background = "#2DF734" ;   
        }
    });


    // Event Listener for when the dragged element leaves the drop zone.
    dropZoneOne.addEventListener('dragleave', function(e) {
        this.className = "";
        e.target.style.border = "5px dashed #502626";
        e.target.style.background = "#4A7229";
    });

    dropZoneTwo.addEventListener('dragleave', function(e) {
        this.className = "";
        e.target.style.border = "5px dashed #502626";
        e.target.style.background = "#FAC549";
    });


    // Event Listener for when the dragged element dropped in the drop zone.
    dropZoneOne.addEventListener('drop', function(e) {
        if (e.preventDefault) e.preventDefault(); 
    if (e.stopPropagation) e.stopPropagation(); 

        this.className = "";
       
        document.getElementById("dropCount").innerHTML = elementDropped++;
         document.querySelector('#drag-elements').removeChild(elementDragged);
        
         if(elementDropped<6){
           play_single_sound(); 
         
         }
         else{
            play_single_sound2();
         }
         
       
        // Remove the element from the list.
       
       e.target.style.border = "5px dashed #D9D9D9";
       e.target.style.background = "#4A7229";
      
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

         if(elementDropped<6){
           play_single_sound2(); 
         
         }
         else{
            play_single_sound3();
         }


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

