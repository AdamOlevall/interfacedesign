

var seconds = 24;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0 && clicks != 9) {
        play_loose();
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
    play_frog();
    var countdownTimer = setInterval('secondPassed()', 1000);
   if (window.localStorage.getItem("backColor") == 'white'){
  switch_style ('white');
  }
  else {
  switch_style ('black');
      } 
}


function help(){
  
    play_frog();
    canvasDrawHelp1();
    $('#canvasHelp1').show();
    $('#helpMessage').show(); 
    $('#mainen').hide();
    $('#header').hide();
    $('#startMessage').hide();
}

function canvasDrawHelp1(){
    var c = document.getElementById("canvasHelp1");
    var ctx = c.getContext("2d");
  
}

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
        play_win();
        $('#mainen').hide(); 
        $('#canvasWin').show();
        $('#successMessage').show();
        $('#header').hide();
        $('#clicks').hide();
    }
}




function play_loose() {
        document.getElementById('lose').play();
}

function play_win() {
        document.getElementById('mario').play();
}

function play_frog() {
        document.getElementById('frog').play();
}

























var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;

function switch_style ( css_title )
{

  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
   i < link_tag.length ; i++ ) {

    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
 
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
 
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}





   

