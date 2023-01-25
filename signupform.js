// Add event listeners to track mouse clicks
document.addEventListener("click", function() {
    clicks++;
});

// Add event lisenter to keypresses
document.addEventListener("keyup", function(event) {
    keypresses++;
});

// Grab all input fields
let inputs = document.getElementsByTagName("input");

// Add an event listener to each input field 
for (let i = 0; i < inputs.length; i++) {

    let previousValue = "";

    inputs[i].addEventListener("keyup", function(event) {
        // Find the current value of the field
        let currentValue = event.target.value;

        // Compute the new amount of characters typed in this field
        characterstyped += currentValue.length - previousValue.length;

        // Set previous value to correct value
        previousValue = currentValue;
    });
}
// Initialize variables
let clicks = 0;
let start = Date.now();
let keypresses = 0;
let characterstyped = 0;

document.getElementById("signupform").addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
})



function validateForm(){

    // Get all fields with input worth mentioning
    let e = document.getElementsByClassName("value");

    // Start a string (to which will be appended)
    let s = "YOUR INPUT:\n";

    // For all inputs, add their name and value
    for (i = 0; i < e.length; i++) {
        // or skip them if null
        if (e[i] == null) {
            continue;
        }
        s += `${e[i].name}: ${e[i].value}\n`;
    }
    

    // Find end time and compute minutes and seconds (end is in ms)
    let end = Date.now();
    let minutes = Math.floor(((end - start)/ 1000) / 60);
    let seconds = ((end - start) / 1000) % 60;
    // Get the div and populate it with the data
    let div = document.getElementById("tracking");
    div.innerHTML = "Number of mouse clicks: " + clicks + "<br>" +
                        "Total time spent: " + minutes + " minutes " + seconds + " seconds" + "<br>" +
                        "Total key presses: " + keypresses + "<br>" +
                        "Total number of characters typed: " + characterstyped;

    // Show the div
    div.style.display = "block";


    // Alert the created string to the user
    alert(s);
    // document.getElementById("signupform").submit();
}    