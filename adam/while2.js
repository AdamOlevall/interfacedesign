


var clicks = 0;
var x =  Math.floor((Math.random() * 9) + 1);
var y = x-1;
var z = x-2;
function myCounter(){

    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    mainFunction();
   if (clicks > x){
    minFunk();
}

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

function play_single_sound4() {
        document.getElementById('synth').play();
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
if (window.localStorage.getItem("backColor") == 'white'){
  switch_style ('white');
  }
  else {
  switch_style ('black');
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
    var $p = $('#heej');
    $p.css('visibility', 'visible');
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


