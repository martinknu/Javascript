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
let z = [0,1,2,3,4,5,6,7,8,9];

// Math constants
console.log("Math.E: " + Math.E);        // returns Euler's number
console.log("Math.PI: " + Math.PI );      // returns PI
console.log("Math.SQRT2: " + Math.SQRT2 );   // returns the square root of 2
console.log("Math.SQRT1_2: " + Math.SQRT1_2 ); // returns the square root of 1/2
console.log("Math.LN2: " + Math.LN2 );     // returns the natural logarithm of 2
console.log("Math.LN10: " + Math.LN10  );   // returns the natural logarithm of 10
console.log("Math.LOG2E: " + Math.LOG2E );   // returns base 2 logarithm of E
console.log("Math.LOG10E: " + Math.LOG10E );  // returns base 10 logarithm of E 


// Rounding to integer
x = 4.7;
console.log("Math.round: " + Math.round(x));	//Returns x rounded to its nearest integer
console.log("Math.ceil: " + Math.ceil(x));      //Returns x rounded up to its nearest integer
console.log("Math.floor: " + Math.floor(x));	//Returns x rounded down to its nearest integer
console.log("Math.trunc: " + Math.trunc(x));	//Returns the integer part of x (new in ES6)


// max / min N.B: Spread operator ... must be used to spread array into its elements.
console.log("Math.max: " + Math.max(...z));
console.log("Math.min: " + Math.min(...z));


function spirograph() {            
    let  canvas2 = document.getElementById("canvas2");
    let  context = canvas2.getContext("2d");
    
    //showAxes(context);
    context.save();
    // let  imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let  step = 1;
    
    for (let  i = 0; i < 1; i += step) { // canvas.height
        // context.putImageData(imageData, 0, 0);
        plotSine(context, i, 54 + i);
    }

}

function drawPoint(ctx, y) {            
    let  radius = 3;
    ctx.beginPath();

    // Hold x constant at 4 so the point only moves up and down.
    ctx.arc(4, y, radius, 0, 2 * Math.PI, false);

    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();
}

function plotSine(ctx, xOffset, yOffset) {
    let  width = ctx.canvas.width;
    let  height = ctx.canvas.height;
    let  scale = 20;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(66,44,255)";

    // console.log("Drawing point...");
    // drawPoint(ctx, yOffset+step);
    
    let  x = 4;
    let  y = 0;
    let  amplitude = 40;
    let  frequency = 80;
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
    let  width = ctx.canvas.width;
    let  height = ctx.canvas.height;
    let  xMin = 0;
    
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
    let  canvas = document.getElementById("canvas");
    let  context = canvas.getContext("2d");

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
    //window.requestAnimationFrame(draw);
    spirograph();
}
let step = -4;