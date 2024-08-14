// ----- CONTROL -----//
   
function prepUserString() {

    // Gets the user input from the DOM and assigns it to a variable
    let userString = document.getElementById("userString").value;

    // Cleans up the user input (Ignores special characters, removes spaces, and converts all characters to lowercase) to facilitate comparison using two js methods
    let cleanString = userString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    //Clears input field
    document.getElementById("userString").value = "";

    checkPalindrome(cleanString, userString);
}


// ------ LOGIC -----//

function checkPalindrome(cleanString, userString) {
   
    let reversedString = cleanString.split("").reverse().join("");

    let message = "";

    if (userString == "" || userString.length == 1) {

        message = `Yeah, ok...this is technically a palindrome, but why don't you "push" a little harder by using a few more characters`;

     } else if (reversedString == cleanString) {

        message = `You came out smelling like roses!!!<br><br>${userString} is a palindrome!`;

    } else {

         message = `Well, that stinks...<br><br>"${userString}" is not a palindrome! Try again!`;
}

    displayResults(message);
}

// ----- DISPLAY -----//

function displayResults(message) {

    document.getElementById("result").innerHTML = message;
document.getElementById("alert").classList.remove("invisible");
}