
// Defining a promise
const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ 
        myResolve("I love You !!");
    }, 3000);
});

  
myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
    document.body.style.cursor = 'default'
});

// Set cursor to wait type
document.body.style.cursor = 'wait'