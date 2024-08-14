// ----- CONTROL -----//
   
function getUserString() {

    // Gets the element
    // Clears the element
         
        document.getElementById("alert").classList.add("invisible");
    
        // Gets the user input from the DOM and assigns it to a variable
        let userString = document.getElementById("userString").value;
    
        // Cleans up the user input (Ignores special characters, removes spaces, and converts all characters to lowercase) to facilitate comparison
        let cleanString = userString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
        // Calls the Logic function and assigns the return value to a variable
        let reversedString = reverse(cleanString);
    
        if (userString == "") {
    
            document.getElementById("result").innerHTML = `Yeah, ok...it's technically a palindrome, but why don't you "push" a little harder by using at least 2 characters`;
            document.getElementById("alert").classList.remove("invisible");
    
        } else if (reversedString == cleanString) {
    
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
    
    /* OOOR...Use a recursive function to compare the fist and last indexes. If they are different, declare string is not a palindrom, else pop/? to remove those and continue comparing the subproblems (divide and concor???)
    
    function 
    
    
    
    
    */
    
    
    
    // ----- DISPLAY -----//
    
    function display(userString) {
    
    
    
    
    document.getElementById("result").innerHTML = `You came out smelling like roses!!!<br><br>${userString} is a palindrome!`;
    document.getElementById("alert").classList.remove("invisible");
    
    }   
    
    
    
    // ----- Test ----- //
    
    checkPalindrome("a");
    //Program.assertEqual(isPalindrome("a"), true);
    checkPalindrome("motor");
    //Program.assertEqual(isPalindrome("motor"), false);
    checkPalindrome("rotor");
    //Program.assertEqual(isPalindrome("rotor"), true);
    
    
    
    
    
       






 /* This function was part of my original solution:

 function reverse(cleanString) {

   let reversedArray = [];

    // Checks for length of the string to decrement starting from last index
   for (i = cleanString.length - 1; i >= 0; i--) {
        
        // Adds each index value to the new array
        reversedArray.push(cleanString[i]);
    }

    return reversedArray.join(""); 

    //I later learned that by "method chaining", we can achieve the same result in a more effficient way
    return cleanString.split("").reverse().join("");
}*/

