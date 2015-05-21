


var clicks = 0;
var x =  Math.floor((Math.random() * 9) + 1);
var y = x-1;
var z = x-2;
var p=  x+1;

function play_single_sound() {
        document.getElementById('frog').play();
}

function play_single_sound2() {
        document.getElementById('lose').play();
}

function play_single_sound3() {
        document.getElementById('mario').play();
}

function play_single_sound4() {
        document.getElementById('synth').play();
} 



function myCounter(){
     
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    mainFunction();

     if (clicks >x){
    minFunk();
}

     if(clicks<p){
           play_single_sound(); 
         
         }
         else{
            play_single_sound2();
         }
 
}


function myFinish(){

if(clicks > y){
    minFunk2();
    play_single_sound3();

}
else {
   minFunk();
   play_single_sound2();
}
}




window.addEventListener("load", eventWindowLoaded, false);


function eventWindowLoaded() {
    mainFunction();
}

function mainFunction() {
   
    if (document.getElementById("clicks").innerHTML < x ){
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


function minFunk() {
  $('#failureMessage').show();
}

function minFunk2() {
    var $p = $('#heej2');
    $p.css('visibility', 'visible');
}


$("#heej").click(function(){
   location.reload();
});


$("#heej2").click(function(){
  document.location.href = 'while.html';
});

