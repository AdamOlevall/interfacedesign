$(document).ready( function(){
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