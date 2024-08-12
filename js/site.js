// ----- CONTROLLER function -----//
   
function getUserString() {

    document.getElementById("alert").classList.add("invisible");

    // Gets the user input from the DOM and assigns it to a variable
    let userString = document.getElementById("userString").value;

    // Cleans up the user input (Ignores special characters, removes spaces, and converts all characters to lowercase) to facilitate comparison
    let cleanString = userString.replace(/[^a-zA-Z]/g, "").toLowerCase();

    


    // Calls the Logic function and assigns the return value to a variable
    let reversedString = reverse(userString);

    // Calls the Display function
    display(reversedString);

}

   
    


// ------ LOGIC function -----//

function reverse(userString) {

    let reversedString = [];

    // Checks for length of the string and 
    // Decrements through the indices
    
   for (i = userString.length - 1; i >= 0; i--) {
    
     // Cleans up input (Take out spaces, reduce to lower case letters, ignore special characters); RegExp
        // if i is any charachter other than an upper or lower case letter, ignore
        
     reversedString += userString[i];

    /*
     // Else, 
     if (i )


    // Stores in new array
    reversedString += userString[index];

   }
        
   if reversedString == userString {


   }
    // Test whether the user input string is the same as the reversed string. Use .includes() method
*/
   
}

return reversedString;

}

function display(reversedString) {

document.getElementById("result").innerHTML = `Your text reversed is: ${reversedString}`;
document.getElementById("alert").classList.remove("invisible");


}   
// Display message confirming it is a palindrome or not



    




// DISPLAY functtion


