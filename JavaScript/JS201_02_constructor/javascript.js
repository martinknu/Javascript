
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


// Here the class is using a constructor to initialize the object when created
// A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

class MyClassName {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        if(this.name === undefined){
            this.name = "John Doggo"
        }
        console.log(`Vuf said the dog named : ${this.name} 
        and he is ${this.age} years old`);
    }

    setName(name){
        this.name = name;

    }

}

// Here I am adding name and age to my object via constructor
const thing = new MyClassName("Douggirr", 10)

thing.speak();

// Here the object is renamed, the new speak function is with the new name
thing.setName("Marint");
thing.speak();

