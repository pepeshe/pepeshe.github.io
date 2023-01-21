function validateForm(){
    let valid = true;
    for(let required of document.getElementsByClassName("required")){
        if(required.value == "" || (required.name == "language" && required.value == "language")){
            valid = false;
            required.style.outline = "auto";
            required.style.outlineColor = "red";
        }else if(required.style.outlineColor != null){
            if(required.style.outlineColor == "red") valid = false;
        }
    }

    if(!valid) {
        alert("Fill in the required fields please")
        return;
    }

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
    
    // Alert the created string to the user
    alert(s);
    document.getElementById("signupform").submit();
}    

function validateEmail(obj){
    let input = obj.value;
    obj.style.outline = "auto";
    obj.style.outlineColor = input.includes("@") ?"lime" : "red";
    document.getElementById("emailInvalid").style.display = input.includes("@") ?"none" : "block";
}


function validatePassword(obj){
    let input = obj.value;
    obj.style.outline = "auto";
    obj.style.outlineColor = !(input.length < 12) && /(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])/.test(input) ?"lime" : "red";
    document.getElementById("passwordLengthInvalid").style.display = !(input.length < 12) ?"none" : "block";
    document.getElementById("passwordCapital").style.display = /[A-Z]/.test(input) ?"none" : "block";
    document.getElementById("passwordNumber").style.display = /\d/.test(input) ?"none" : "block";
    document.getElementById("passwordSymbol").style.display = /[$&+,:;=?@#|'<>.^*()%!-]/.test(input) ?"none" : "block";

}

function validatePasswordEqual(obj, other){
    let i1 = obj.value;
    let i2 = other.value;
    obj.style.outline = "auto";
    obj.style.outlineColor = i1 == i2 ?"lime" : "red";
    document.getElementById("passwordNotMatch").style.display = i1 == i2 ?"none" : "block";
}

function validateName(obj){
    let input = obj.value;
    obj.style.outline = "auto";
    obj.style.outlineColor = !(/[0-9$&+,:;=?@#|'<>.^*()%!-]/.test(input)) ?"lime" : "red";
    document.getElementById("nameInvalid").style.display = !(/[0-9$&+,:;=?@#|'<>.^*()%!-]/.test(input)) ?"none" : "block";
}

function validateUname(obj){
    let input = obj.value;
    obj.style.outline = "auto";
    obj.style.outlineColor = /[A-Z]/.test(input[0]) && input.length > 4 && input.length < 13 
                                && /[0-9$&+,:;=?@#|'<>.^*()%!-]/.test(input[input.length-1]) ?"lime" : "red";
    document.getElementById("unameCapital").style.display = /[A-Z]/.test(input[0]) ?"none" : "block";
    document.getElementById("unameLength").style.display = input.length > 4 && input.length < 13 ?"none" : "block";
    document.getElementById("unameSpecial").style.display =  /[0-9$&+,:;=?@#|'<>.^*()%!-]/.test(input[input.length-1]) ?"none" : "block";
}

function validateZip(obj){
    let input = obj.value;
    obj.style.outline = "auto";
    obj.style.outlineColor = input.length == 6 && /^[0-9]*$/.test(input.substring(0,3)) && /^[a-z]*$/i.test(input.substring(4,5)) ?"lime" : "red";
    document.getElementById("zipInvalid").style.display = input.length == 6 && /^[0-9]*$/.test(input.substring(0,3)) && /^[a-z]*$/i.test(input.substring(4,5)) 
                                                            ?"none" : "block";
}


document.addEventListener('DOMContentLoaded', () => {

    // Initialize variables
    let clicks = 0;
    let start = Date.now();
    let keypresses = 0;
    let characterstyped = 0;

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

    // Get the form and add a submit event listener
    let form = document.getElementById("signupform");
    form.addEventListener("submit", event => {

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
    });
})