
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

// Defining an object person with a function to "speak"
// The "this" keyword references the object, in this case it is "person4"
const person4 = {
    "name": "Martin",
    "age": 41,
    speak(){
        console.log(`My name is ${this.name}`)
    }
}

// Calling object function
person4.speak();


// Function is defined, the "this" keyword references the global object when used in a function and not using strict mode
function counter() {
    if(this.total === undefined){
        this.total = 1;
    } else  {
        this.total++
    }
console.log(`Executed ${this.total} times`);
}

// 2 Calls of the function counter
counter();
counter();

// print window.total variable
console.log(`window.total variable ${window.total}`)
