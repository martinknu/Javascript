
// Common datatypes
const str = "string"; // string 
const num = 3; // number
const flt = 3.14; // Float
const bol = true; // Bolean
const list = ["item1", 2 , 3, 3.14 ]; // Array
const thing = null; // has nothing
const notDefined = undefined;
const getAge = function() {return 41};
const obj = {"Name" : "Martin", "Profession":"Automation engineer" }
const arr = ["Zero", "one", "Two"];

const twitter = "@MartinTheMan";
var strMystring = "Martin";
var strWebsite = "Menuhjaelp.dk"
var myAge = 'My age is 41';
var age = 0;
var strWork = "";

console.log("page sucessfully loaded scrip {}");
console.log(strWebsite);

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











