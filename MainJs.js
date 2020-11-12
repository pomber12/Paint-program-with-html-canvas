
var canvas;
var context;
window.onload = function() {
 // Get the canvas and the drawing context.
 canvas = document.getElementById("drawingCanvas");
 context = canvas.getContext("2d");
 
  // Attach the events that you need for drawing.
 canvas.onmousedown = startDrawing;
 canvas.onmouseup = stopDrawing;
 canvas.onmouseout = stopDrawing;
 canvas.onmousemove = draw;
};

var isDrawing = false;
function startDrawing(e) {
 // Start drawing.
 isDrawing = true;
 // Create a new path (with the current stroke color and stroke thickness).
 context.beginPath();
 // Put the pen down where the mouse is positioned.
 context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}
 
 
 function draw(e) {
 if (isDrawing == true) {
 // Find the new position of the mouse.
 var x = e.pageX - canvas.offsetLeft;
 var y = e.pageY - canvas.offsetTop;
 // Draw a line to the new position.
 context.lineTo(x, y);
 context.stroke();
 }
}
 
 function stopDrawing() {
 isDrawing = false;
}
 
 function clearCanvas() {
 context.clearRect(0, 0, canvas.width, canvas.height);
}

 
 
 /* Future feature for working on all screans
 
 window.onload=function Start();
 
 $(function Start1(){
    resizeCanvas();
});

$(window).on('resize', function Start(){
    resizeCanvas();
});

function resizeCanvas()
{
    var canvas = $('#drawingCanvas');
    canvas.css("width", $(window).width());
    canvas.css("height", $(window).height());
}
 
 
 */
 
