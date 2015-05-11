

var seconds = 24;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0 && clicks != 9) {
        
        $('#failureMessage').show();
        $('#canvasLoose').show();
        $('#mainen').hide();
        $('#header').hide();

    } else if(seconds == 0 && clicks ==9){
        
        $('#successMessage').show();
        $('#canvasWin').show();
        $('#clicks').hide();
        $('#mainen').hide();
        $('#header').hide();
    }else {
        seconds--;
    }
}


function startGame(){

    $('#startMessage').hide();
    var countdownTimer = setInterval('secondPassed()', 1000);
}


function help(){
   // canvasDrawHelp();
    canvasDrawHelp1();
   // $('#canvasHelp').show();
    $('#canvasHelp1').show();
    $('#helpMessage').show(); 
    $('#mainen').hide();
    $('#header').hide();
    $('#startMessage').hide();
    //Här ska en ok knapp visas -> back to start
}

function canvasDrawHelp1(){
    var c = document.getElementById("canvasHelp1");
    var ctx = c.getContext("2d");
  
}

/*
function canvasDrawHelp(){
    var c = document.getElementById("canvasHelp");
    var ctx = c.getContext("2d");
  

}
*/






function canvasDrawLoose(){
    var c = document.getElementById("canvasLoose");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.strokeStyle="gray";
    ctx.rect(20,20,90,120);
    ctx.stroke();
}

function canvasDrawWin(){
    var c = document.getElementById("canvasWin");
    var ctx = c.getContext("2d");
   
}

var clicks = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var image = ev.dataTransfer.getData("text");
    if(ev.target.id == document.getElementById(image).getAttribute('data-div')){
        //alert("ok");
        clicks +=1;

       
        
        document.getElementById("clicks").innerHTML = clicks;
        ev.target.appendChild(document.getElementById(image))
        checkWin();
        }
    else{
        //alert("wrong");
    }
}

function checkWin(){
    if (clicks==9){
        seconds = 0;
        $('#mainen').hide(); 
        $('#canvasWin').show();
        $('#successMessage').show();
        $('#header').hide();
        $('#clicks').hide();
    }
}








   

