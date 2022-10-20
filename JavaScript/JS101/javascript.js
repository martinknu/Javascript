
// Primitive datatypes
const num = 3; // number used for all number values (integer and floating point) except for very big integers.
const flt = 3.14; // Float is also a number
const bigInteger = BigInt(Number.MAX_SAFE_INTEGER); // A BigInt is created by appending n to the end of an integer e.g. 9007199254740993n
const str = "string"; // string please note that the length of the string is not always the number of char it contains since some characters take up two elements
const bol = true; // Bolean
const thing = null; // has nothing
const notDefined = undefined;

// Object types
const list = ["item1", 2 , 3, 3.14 ]; // Array
const arr = ["Zero", "one", "Two"];
const getAge = function() {return 41};
const obj = {"Name" : "Martin", "Profession":"Automation engineer" }
const startTime = Date.now(); 

const twitter = "@MartinTheMan";
let strMystring = "Martin";
let strWebsite = "Menuhjaelp.dk"
let myAge = 'My age is 41';
let age = 0;
let strWork = "";




console.log("page sucessfully loaded scrip {}");
console.log(strWebsite);


let newTime = new Date(startTime).toLocaleDateString("en-US");
console.log(newTime);


/*
Multi 
line 
commment
*/

// Conditional IF
if (strMystring == "Martin") {
// Let and const only lives within the nearest curly braces
    let apples = 5;
    const height = "6'5\"";
    console.log("I have ", apples , "apples");

}

if (twitter == "@MartinTheMan"){
    console.log("Twitter account ", twitter);
} 
else if(twitter == "@JubiiSite") {
    console.log("Try again  ", twitter);
} 
else{
    console.log("Not  ", twitter);
}

// Casting string as number
age = Number(myAge);
console.log("My age is about ", age);

// Concatenation
strWork = `My name is ${strMystring}. and my twitter account is ${twitter}. `
console.log(strWork);

// For loop
for(let i = 0; i < arr.length; i++){

console.log(i,arr[i]);
}

// For loop trough array new version
arr.forEach(num => {
    console.log(num);
});


// Simple function for additions
function addNumbers(P1, P2) {
    return Number(P1) + Number(P2);
}
// Call function
const total = addNumbers(1, 3);

console.log(`My age is about: ${total}`);











