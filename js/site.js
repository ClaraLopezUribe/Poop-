// ----- CONTROL -----//
   
function getUserString() {

    document.getElementById("alert").classList.add("invisible");

    // Gets the user input from the DOM and assigns it to a variable
    let userString = document.getElementById("userString").value;

    // Cleans up the user input (Ignores special characters, removes spaces, and converts all characters to lowercase) to facilitate comparison using two js methods
    let cleanString = userString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Calls the Logic function and assigns the return value to a variable
    let reversedString = reverse(cleanString);


    if (userString === "") {

       let message = `Yeah, ok...it's technically a palindrome, but why don't you "push" a little harder by using a few more characters`;

    } else if (reversedString === cleanString) {

        message = `You came out smelling like roses!!!<br><br>${userString} is a palindrome!`;

    } else {

        message = `That stinks...<br><br>"${userString}" is not a palindrome! Try again!`;
}

   
}

// ------ LOGIC -----//

function reverse(cleanString) {

   /* This was my original solution:

    let reversedArray = [];

    // Checks for length of the string to decrement starting from last index
   for (i = cleanString.length - 1; i >= 0; i--) {
    
    // Adds each index value to the new array
        reversedArray.push(cleanString[i]);
   }
        
    return reversedArray.join(""); */

    //I later learned that by "method chaining", we can achieve the same result in a more effficient way
    return cleanString.split("").reverse().join("");
}

// ----- DISPLAY -----//

function display(userString) {




document.getElementById("result").innerHTML = `You came out smelling like roses!!!<br><br>${userString} is a palindrome!`;
document.getElementById("alert").classList.remove("invisible");

}   




    







