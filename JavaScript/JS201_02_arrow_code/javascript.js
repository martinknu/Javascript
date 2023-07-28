
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

// "use strict"

// const hello = function (){
//     return "hello martin";

// }

// const greeting = hello();
// console.log(greeting);


// Normal function
// const hello = () => {
//     console.log("hellooooooo")
// }
// hello();


// One line function, but remember that it uses global namespace
const hello = (myName) => console.log(`Hello from one line function ${myName}`);
hello("Martin");