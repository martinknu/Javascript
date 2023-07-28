
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


"use strict" // With strict mode, you can not, for example, use undeclared variables.


// Random number generator
const maxValue = 10;
let randomNumber = Math.floor(Math.random()* maxValue);
// console.log(`The number is ${randomNumber}`);
while(true){
    let guessedNumber = Number(prompt(`The number is between 0 - ${maxValue}, What is your guess?`));
        if(guessedNumber === randomNumber){
            break;
        }
        console.log("You guessed wrong, try again !!")
}
console.log("Good job you guessed right !!")
console.log(`The number was ${randomNumber}`);

