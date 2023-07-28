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


// Defining a class 
class MyClassName {
    setName(name){
        this.name = name;
    }
    speak(){
        if(this.name === undefined){
            this.name = "John Doggo"
        }
        console.log(`Vuf said the dog named : ${this.name}`);
    }
}


// Create object with my class
const thing = new MyClassName()

// Calling the class and class methods
thing.setName("Douggie")
thing.speak();

// Create new instance of the class
const noname = new MyClassName()

// Calling new instance, will speak as John Doggo since no name defined. ;-)
noname.speak();






