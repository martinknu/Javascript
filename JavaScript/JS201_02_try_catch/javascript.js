
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

// Calling a function that does not exist will result in an error
try{
    functionthatdoesnotexist();
 
} catch(error) {
    console.warn(`The error is : ` , error);
} finally{
    // Do something here
}


