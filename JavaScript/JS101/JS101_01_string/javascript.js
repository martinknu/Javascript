/*String methods*/
// https://www.w3schools.com/jsref/jsref_obj_string.asp


let myCar = "Opel Zafira";


console.log("charAt:" + myCar.charAt(2));
console.log("charCodeAt:" + myCar.charCodeAt(2));
console.log("toUpperCase:" + myCar.toUpperCase());
console.log("toLowerCase:" + myCar.toLowerCase());
console.log("concat:" + myCar.concat(" it is a good car"));
console.log("constructor:" + myCar.constructor);
console.log("endsWith a:" + myCar.endsWith("a"));
console.log("endsWith b:" + myCar.endsWith("b"));
console.log("fromCharCode:" + String.fromCharCode(65));
console.log("includes Za:" + myCar.includes("Za"));
console.log("includes za:" + myCar.includes("za"));


for (let key in myCar) {
    console.log(key.key);
}

console.log(Object.getOwnPropertyNames(String));

let strMethods = Object.getOwnPropertyNames(String);

let methodNames = strMethods.__proto__;

methodNames.forEach(item => console.log(item));




// Function insertafter
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

let menu = document.getElementById('menu');

// create a new li node
let li = document.createElement('li');
li.textContent = "toLowerCase:" +  myCar.toLowerCase();

// insert a new node after the last list item
insertAfter(li,  menu.lastElementChild);