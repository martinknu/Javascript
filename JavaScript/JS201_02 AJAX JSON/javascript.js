

// AJAX Asyncronous Javascript and XML
// Simplest way to send data from a server and get data from a server.
// It is super light weight

// Get HTML elements 
const divName = document.getElementById("name");
const divHomeworld = document.getElementById("homeworld");
const divPictures = document.getElementById("pictures");


// Event listener for button
document.getElementById("changePerson").addEventListener("click", 
function(){ 

    const randomNum = Math.ceil(Math.random() * 83);
    // Query string
    const queryString = `https://swapi.dev/api/people/${randomNum}/`   
    // AJAX Fetch
    fetch(queryString)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Write to HTML elements 
        divName.innerHTML = data["name"];
        divHomeworld.innerHTML = data["homeworld"];
        divPictures.innerHTML = data["films"]
    })

});


























