

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
    canvasDrawHelp();
    $('#canvasHelp').show();
    $('#helpMessage').show(); //-> something wrong
    $('#mainen').hide();
    $('#header').hide();
    $('#startMessage').hide();
    //Här ska en ok knapp visas -> back to start
}


function canvasDrawHelp(){
    var c = document.getElementById("canvasHelp");
    var ctx = c.getContext("2d");
    //Square One
    ctx.beginPath();
    ctx.lineWidth="3";
    ctx.strokeStyle="gray";
    ctx.rect(20,20,90,120);
    var img2 = document.getElementById("drag1");
    ctx.drawImage(img2,20,20,30,40);
     var img3 = document.getElementById("drag2");
    ctx.drawImage(img3,50,20,30,40);
     var img4 = document.getElementById("drag3");
    ctx.drawImage(img4,80,20,30,40);
    var img5 = document.getElementById("drag4");
    ctx.drawImage(img5,20,60,30,40);
    var img6 = document.getElementById("drag5");
    ctx.drawImage(img6,50,60,30,40);
    var img7 = document.getElementById("drag6");
    ctx.drawImage(img7,80,60,30,40);
     var img8 = document.getElementById("drag7");
    ctx.drawImage(img8,20,100,30,40);
    var img9 = document.getElementById("drag8");
    ctx.drawImage(img9,50,100,30,40);
    var img10 = document.getElementById("drag9");
    ctx.drawImage(img10,80,100,30,40);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.rect(80,100,30,40);
    ctx.stroke();

    //Square two
    ctx.beginPath();
    ctx.lineWidth="3";
    ctx.strokeStyle="gray";
    ctx.rect(195,20,90,120);
    var img1 = document.getElementById("theFrog");
    ctx.drawImage(img1,195,20,90,120);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.rect(225,60,30,40);
    ctx.stroke();
   
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(110, 120);
    ctx.lineTo(225, 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(225, 80);
    ctx.lineTo(210, 75);
    ctx.stroke();

   ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(225, 80);
    ctx.lineTo(215, 90);
    ctx.stroke();



    }

function canvasDrawLoose(){
    var c = document.getElementById("canvasLoose");
    var ctx = c.getContext("2d");
    
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






   

