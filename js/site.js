// ----- CONTROL -----//
   
function getUserString() {

    document.getElementById("alert").classList.add("invisible");

    // Gets the user input from the DOM and assigns it to a variable
    let userString = document.getElementById("userString").value;

    // Cleans up the user input (Ignores special characters, removes spaces, and converts all characters to lowercase) to facilitate comparison
    let cleanString = userString.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // Calls the Logic function and assigns the return value to a variable
    let reversedString = reverse(cleanString);

    if (reversedString == cleanString) {

    // Calls the Display function
     display (userString);

    } else {

        document.getElementById("result").innerHTML = `That stinks...<br><br>"${userString}" is not a palindrome! Try again!`;
        document.getElementById("alert").classList.remove("invisible");

}

   
    
}

// ------ LOGIC -----//

function reverse(cleanString) {

    let reversedArray = [];

    // Checks for length of the string to decrement starting from last index
   for (i = cleanString.length - 1; i >= 0; i--) {
    
    // Adds each index value to the new array
     reversedArray += cleanString[i];

   }
        
    return reversedArray;

}

// ----- DISPLAY -----//

function display(userString) {




document.getElementById("result").innerHTML = `You came out smelling like roses!!!<br><br>${userString} is a palindrome!`;
document.getElementById("alert").classList.remove("invisible");

}   




    







