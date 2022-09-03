
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

const thing = new MyClassName()
thing.setName("Douggie")
thing.speak();



