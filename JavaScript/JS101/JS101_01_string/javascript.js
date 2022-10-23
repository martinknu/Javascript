/*String methods
Created: 2022-10-23
Author: Martin Knudsen
Purpose: Examples of javascript string methods
*/
// https://www.w3schools.com/jsref/jsref_obj_string.asp


// String methods
let myCar = "Opel Zafira";

console.log("charAt:" + myCar.charAt(2));
console.log("charCodeAt:" + myCar.charCodeAt(2));
console.log("toUpperCase:" + myCar.toUpperCase());
console.log("toLowerCase: " + myCar.toLowerCase());
console.log("concat: " + myCar.concat(" it is a good car"));
console.log("constructor: " + myCar.constructor);
console.log("endsWith a: " + myCar.endsWith("a"));
console.log("endsWith b: " + myCar.endsWith("b"));
console.log("fromCharCode: " + String.fromCharCode(65));
console.log("includes Za: " + myCar.includes("Za"));
console.log("includes za: " + myCar.includes("za"));
console.log("indexOf Z: " + myCar.indexOf("Z"));
console.log("lastIndexOf a: " + myCar.lastIndexOf("a"));
console.log("length: " + myCar.length);
console.log("localeCompare: " + myCar.localeCompare("opel"));
console.log("match: " + myCar.match("Z"));
console.log("prototype: " + myCar.prototype);
console.log("repeat(4): " + myCar.repeat(4));
console.log("replace: " + myCar.replace("Opel", "Mazda"));
console.log("search: " + myCar.search("el"));
console.log("slice: " + myCar.slice(0,4));
console.log("split: " + myCar.split(" "));
console.log("startsWith O: " + myCar.startsWith("O"));
console.log("substr: " + myCar.substr(2));
console.log("substring: " + myCar.substring(2,7));
console.log("toLocaleLowerCase: " + myCar.toLocaleLowerCase());
console.log("toLocaleUpperCase: " + myCar.toLocaleUpperCase());
console.log("toLowerCase: " + myCar.toLowerCase());
console.log("toString: " + myCar.toString());
console.log("toUpperCase: " + myCar.toUpperCase());
console.log("trim: " + myCar.trim());
console.log("trimEnd: " + myCar.trimEnd());
console.log("trimStart: " + myCar.trimStart());
console.log("valueOf: " + myCar.valueOf());


// Iterate over string elements

/* 
Method: 1
Iterate over each element in string and print both index and value
*/
for (let ind in myCar) {
    console.log(ind + " : " + myCar[ind]);
}

/*
Method: 2
First convert string to array and using arrays forEach method
*/ 
[...myCar].forEach(element => {
    console.log(element)    
});




// Function insertafter
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

// Create element and insert as HTML
let menu = document.getElementById('menu');

// create a new li node
let li = document.createElement('li');
li.textContent = "toLowerCase:" +  myCar.toLowerCase();

// insert a new node after the last list item
insertAfter(li,  menu.lastElementChild);