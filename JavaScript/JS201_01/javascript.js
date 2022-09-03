
// Common datatypes
// const str = "string"; // string 
// const num = 3; // number
// const flt = 3.14; // Float
// const bol = true; // Bolean
// const list = ["item1", 2 , 3, 3.14 ]; // Array
// const thing = null; // has nothing
// const notDefined = undefined;
// const getAge = function() {return 41};
// const obj = {"Name" : "Martin", "Profession":"Automation engineer" }
// const arr = ["Zero", "one", "Two"];



// window.onload = function(){
//     alert("Page loaded");
// }

// Using strict mode in this script
"use strict"


// window.onbeforeunload = function(){
//     console.log("You are leaving the page");
//     return "Are you sure you want to close!";
// }

// const num=5;
// let result = false;


// if(num === 5){ 
//     console.log("Number is strictly the same");
//     result = true;
// } else{

//     console.log("Number is strictly not the same!!");

// }

// console.log(result);


// console.log("Waiting 2.5 sec");


// setTimeout(function(){
//     console.log("Do this thing inhere after 2.5 sec");
// }, 2500)
// console.log("The last line");

// let count = 0;
// const myInterval = setInterval(function(){

//     console.log("Executed every 1 sec");
//     count++;
// if (count === 3){
//     console.log("This is the last time");
//     clearInterval(myInterval);
// }

// }, 1000);


// While loop
// let whileLoop = 0;
// while (whileLoop <= 100 ){
//         console.log(whileLoop);
//         whileLoop++
// }


// While with break
// while(true){
//     let whileName = prompt("What is your name?");

//     if (whileName === "Martin"){
//         break;
//     }
//     console.log("You are wrong !!");

// }
// console.log("Huraa you are right !!");


// Formatting date
let d = new Date(2022, 1 ,15);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


// Destructuring array
const [Jan, Feb] = months;
console.log(Jan);
console.log(Feb);


// Destructuring object
const person3 = {

    "name": "Martin",
    "age": 41,
    "insta": "None"
}

const {name} = person3;

// Deleting elements in object
delete person3["age"];


// Random number generator
let randomNumber = Math.floor(Math.random()* 83);
console.log(randomNumber);

