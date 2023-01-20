// Eventlistener to alert the values submitted by the user
document.addEventListener('DOMContentLoaded', () => {
    // Get the signup form and add eventlistener for when submitted
    document.getElementById("signupform").addEventListener('submit', () => {
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
        
    });    
});

function validateEmail(obj){
    let input = obj.value;
    obj.style.outline = "auto";
    obj.style.outlineColor = input.includes("@") ?"lime" : "red";
    document.getElementById("emailInvalid").style.display = input.includes("@") ?"none" : "block";
}


function validatePassword(obj){
    let input = obj.value;
    obj.style.outline = "auto";
    obj.style.outlineColor = input.length < 12 ?"red" : "lime";
    document.getElementById("passwordLengthInvalid").style.display = input.length < 12 ?"block" : "none";
}

function validatePasswordEqual(obj, other){
    let i1 = obj.value;
    let i2 = other.value;
    obj.style.outline = "auto";
    obj.style.outlineColor = i1 == i2 ?"lime" : "red";
    document.getElementById("passwordNotMatch").style.display = i1 == i2 ?"none" : "block";
}