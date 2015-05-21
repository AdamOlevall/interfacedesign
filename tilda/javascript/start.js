var backgroundColor;
function draw() {
  var canvas = document.getElementById('balloon');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);

      ctx.strokeStyle = '#FFFFFF';

    ctx.stroke();
  }
   if (window.localStorage.getItem("backColor") == 'white'){
  switch_style ('white');
  }
  else {
  switch_style ('black');
      } 
}


function changeThemeWhite() {
  backgroundColor = "white";
 window.localStorage.setItem("backColor", "white");
/*if (window.localStorage.getItem("backgroundColor") == 'white'){
  alert("white");
}
else {
  alert("notwhite");
} */
}

function changeThemeBlack() {
   backgroundColor = "black";
window.localStorage.setItem("backColor", "black");
/*if (window.localStorage.getItem("backgroundColor") == 'black'){
  alert("black");
}
else {
  alert("notblack");
} */
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

