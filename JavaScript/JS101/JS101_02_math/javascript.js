/*Math
Created: 2022-10-23
Author: Martin Knudsen
Purpose: Examples of javascript math
*/
// https://www.w3schools.com/jsref/jsref_obj_math.asp
// https://www.w3schools.com/js/js_math.asp
// https://gist.github.com/gkhays/e264009c0832c73d5345847e673a64ab


let x = 0;
let y = 0;



x = Math.PI;
console.log(x);




function spirograph() {            
    var canvas2 = document.getElementById("canvas2");
    var context = canvas2.getContext("2d");
    
    showAxes(context);
    context.save();
    // var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var step = 4;
    for (var i = -4; i < canvas.height; i += step) {
        // context.putImageData(imageData, 0, 0);
        plotSine(context, i, 54 + i);
    }
}

function drawPoint(ctx, y) {            
    var radius = 3;
    ctx.beginPath();

    // Hold x constant at 4 so the point only moves up and down.
    ctx.arc(4, y, radius, 0, 2 * Math.PI, false);

    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();
}

function plotSine(ctx, xOffset, yOffset) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 20;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(66,44,255)";

    // console.log("Drawing point...");
    // drawPoint(ctx, yOffset+step);
    
    var x = 4;
    var y = 0;
    var amplitude = 40;
    var frequency = 20;
    //ctx.moveTo(x, y);
    ctx.moveTo(x, 50);
    while (x < width) {
        y = height/2 + amplitude * Math.sin((x+xOffset)/frequency);
        ctx.lineTo(x, y);
        x++;
        // console.log("x="+x+" y="+y);
    }
    ctx.stroke();
    ctx.save();

    console.log("Drawing point at y=" + y);
    drawPoint(ctx, y);
    ctx.stroke();
    ctx.restore();
}


function showAxes(ctx,axes) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var xMin = 0;
    
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    
    // X-Axis
    ctx.moveTo(xMin, height/2);
    ctx.lineTo(width, height/2);
    
    // Y-Axis
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);

    // Starting line
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    
    ctx.stroke();
}

function draw() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, 500, 500);
    showAxes(context);
    context.save();            
    
    plotSine(context, step, 50);
    context.restore();
    
    step += 4;
    window.requestAnimationFrame(draw);
}

// Using math to draw cool curves and shapes
function init() {
    window.requestAnimationFrame(draw);
    spirograph();
}
let step = -4;