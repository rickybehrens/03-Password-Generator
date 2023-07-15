// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

/* 
* Add event listener to generate password button
* A series of prompts for password criteria 
* - Get length
*   - Validate length
* - Include lowercase
* - Include uppercase
* - Include special characters
* - Include numeric
*   - Validate character use (at least one of each)
* - Generate a password that meets criteria
* - Show password
*/

// Variable definitions
var generateBtn = document.querySelector("#generate");

var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphaLower = alphabet.split('')
var alphaUpper = alphabet.toUpperCase().split('')
var special = " !#$%&’()*+,-./:;<=>?@[\]^_`{|}~"
var speCha = special.split('')
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];




// Functions

// Prompt for length
// Validate length
function writePassword() {
    var length = prompt("Choose a password length between 8 and 128 characters?");
    if (length < 8 || length > 128 || isNaN(length)) {
        alert("Password must be between 8 and 128 characters")
        return
    } else {
        console.log("Password length is: " + length + " characters")
    };

    // Prompt for characters
    var lowercase = confirm("Would you like to include lowercase charaters?");
    if (lowercase) {
        console.log("You have chose to include lowercase characters in your password " + lowercase);
    }

    // Prompt for characters
    var uppercase = confirm("Would you like to include uppercase charaters?");
    if (uppercase) {
        console.log("You have chose to include uppercase characters in your password " + uppercase);
    }

    // Prompt for characters
    var specialCharacters = confirm("Would you like to include special charaters?");
    if (specialCharacters) {
        console.log("You have chose to include special characters in your password " + specialCharacters);
    }

    // Prompt for characters
    var numeric = confirm("Would you like to include numbers?");
    if (numeric) {
        console.log("You have chose to include numbers in your password " + numeric);
    }

    var userChoice = [
        length,
        lowercase,
        uppercase,
        specialCharacters,
        numeric,
    ]
    console.log(userChoice)
    console.log(userChoice[0])

    if (lowercase) {
        var array1 = alphaLower
    }

    if (uppercase) {
        var array2 = alphaUpper
    }

    if (specialCharacters) {
        var array3 = speCha
    }

    if (numeric) {
        var array4 = num
    }

    if (lowercase === false && uppercase === false && specialCharacters === false && numeric === false) {
        
    }

    for (let index = 0; index < userChoice[0]; index++) {
        console.log(randArray[Math.floor(Math.random() * randArray.length)])
        alert("You must choose at least one type of characters for your password")
        return
    }

    var randArray = array1.concat(array2, array3, array4)
    console.log(randArray)



    /*
    * - If the user selects a length that doesn't meet the criteria, there should be an alert and it should rederict him to the length prompt again
    * - If the user selects the correct length, the next prompt should come up
    * - After selecting lowercase characters, the next prompt should come up
    * - After selecting uppercase charaters, the next prompt shold come up
    * - After selecting special characters, the next rpompt should come up
    * - After selecting numbers, the password should be generated
    * - Show password
    * - Ask if we need to generate a new password
    */




    // Validate characters
    // Generate password
    // Show password

    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

    // passwordText.value = password;

}

// Special functions like "eventlisteners"
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
