
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

const person4 = {
    "name": "Martin",
    "age": 41,
    speak(){
        console.log(`My name is ${this.name}`)
    }

}

person4.speak();


function counter() {

    if(this.total === undefined){
        this.total = 1;
    } else  {
        this.total++
    }

console.log(`Executed ${this.total} times`);
}

counter();