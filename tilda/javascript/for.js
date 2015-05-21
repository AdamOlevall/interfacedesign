/*$(document).ready( function(){
    //Get the canvas &
    context var c = $('#flower');
    var ct = c.get(0).getContext('2d');
    var container = $(c).parent();

    //Run function when browser resizes
    $(window).resize( flower );

    function flower(){ 
        c.attr('width', $(container).width() ); //max width
        c.attr('height', $(container).height() ); //max height

        draw(); //Call a function to redraw other content (texts, images etc)
    }

    //Initial call 
    respondCanvas();

});
    
  */

/*
function draw() {
        // Filled flower shape
        var canvas = document.getElementById("flower");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
 
            ctx.beginPath();
            ctx.moveTo(130.3, 37.6);
            ctx.bezierCurveTo(126.0, -8.3, 56.3, -16.6, 47.4, 37.6);
            ctx.bezierCurveTo(-1.4, 33.0, -17.0, 93.7, 21.9, 115.6);
            ctx.bezierCurveTo(5.6, 158.7, 55.0, 192.7, 88.8, 162.3);
            ctx.bezierCurveTo(119.3, 191.4, 172.3, 162.0, 155.7, 115.7);
            ctx.bezierCurveTo(192.0, 98.4, 183.6, 33.7, 130.3, 37.6);
            ctx.closePath();
 
            ctx.fill();  
        }
}
*/



function flower(xoff, yoff) {

  
     
    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,1200,300);
    ctx.beginPath();
 
  ctx.moveTo(38 + xoff, 41 + yoff);
  ctx.bezierCurveTo(21 + xoff, -17 + yoff, -8 + xoff, 17 + yoff, 6 + xoff, 51 + yoff);
  ctx.bezierCurveTo(29 + xoff, 108 + yoff, 35 + xoff, 109 + yoff, 39 + xoff, 109 + yoff);
  ctx.bezierCurveTo(45 + xoff, 109 + yoff, 49 + xoff, 106 + yoff, 77 + xoff, 47 + yoff);
  ctx.bezierCurveTo(92 + xoff, 15 + yoff, 65 + xoff, -13 + yoff, 40 + xoff, 42 + yoff); 


    ctx.closePath();

    //custom heart
    ctx.lineWidth = 2;
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.strokeStyle = 'black';

  ctx.stroke();

    xoff+=0.7;
    var loopTimer = setTimeout('flower('+xoff+','+yoff+'), 100');

  if(xoff > 1200){
    clearTimeout(loopTimer);
    flower(0,0);
    }

  /*else{
    clearTimeout(loopTimer);
    xoff-=1;
    var loopTimer = setTimeout('flower('+xoff+','+yoff+'), 20');
  } */
//  var position = listner();
 //   console.log(position);
/*$('canvas').ctx (

  draggable: true,
 
});*/

if (window.localStorage.getItem("backColor") == 'white'){
  switch_style ('white');
  }
  else {
  switch_style ('black');
      } 
  
}   
 /*
function listner() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
  //  var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    var pos = [];
    pos.push(mousePos.x);
    pos.push(mousePos.y);

    return pos;

    }, false);
   

}

 function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }




     /*   ctx.save();
        ctx.clearRect(0,0,550,400);
        ctx.fillStyle = "rgba(0,200,0,1)";
        ctx.fillRect(x,20,50,10);
        */
   /*     ctx.restore();

        x+=1;
        y+=1;
        var loopTimer = setTimeout('flower('+x+','+y+'), 40');

}


*/



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

