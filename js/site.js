// ----- CONTROL ----- //

function initiate() {

    // Resets alert box to invisible from previous uses
    document.getElementById("alert").classList.add("invisible");

    // Gets the user input from the DOM and assigns it to a variable so it can be accessed from another function
    let userString = document.getElementById("userString").value;

    let returnObject = checkPalindrome(userString);

    displayResults(returnObject);
}

// ------ LOGIC -----//

function checkPalindrome(userString) {
   
    // Cleans up the user input to ignore special characters  and removes spaces (RegEx), and converts all characters to lowercase to facilitate comparison
    let cleanString = userString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let reversedString = [];
    let returnObject = {};
     
    // Checks for length of the string to decrement starting from last index. The same results can be achieved using a chain of methods as follows: let reversedString = cleanString.split("").reverse().join("");
    for (let i = cleanString.length - 1; i >= 0; i--) {
        // ???: Why use += versus .push?
        reversedString += cleanString[i];
    }

    if (userString == "" || userString.length == 1) {

        returnObject.message = "Yeah, ok...this is technically a palindrome, but why don't you 'push' a little harder by using a few more characters";
 
     } else if (reversedString == cleanString) {
 
        returnObject.message = `You came out smelling like roses!!!<br><br>${userString} is a palindrome!`;
 
     } else {
 
        returnObject.message = `Well, that stinks...<br><br>"${userString}" is not a palindrome! Try again!`;
     }

     returnObject.reversed = reversedString;

    return returnObject;
}

// ----- DISPLAY -----//

function displayResults(returnObject) {

    document.getElementById("alertHeader").innerHTML = `Your text reversed is: ${returnObject.reversed}`;
    document.getElementById("result").innerHTML = returnObject.message;
    document.getElementById("alert").classList.remove("invisible");
    //Clears input field
    document.getElementById("userString").value = "";
}