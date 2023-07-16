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
    };


    // Prompt for characters
    var lowercase = confirm("Would you like to include lowercase charaters?");
    var uppercase = confirm("Would you like to include uppercase charaters?");
    var specialCharacters = confirm("Would you like to include special charaters?");
    var numeric = confirm("Would you like to include numbers?");

    function getTrueOrFalse(promptMessage) {
        var userInput = prompt(promptMessage);
        return userInput.toLowerCase() === 'true';
    }

    // Array to store the true statements
    var trueStatements = [];

    // Check multiple prompts and add true statements to the array
    if (lowercase) {
        trueStatements.push('Lowercase');
    }
    if (uppercase) {
        trueStatements.push('Uppercase');
    }
    if (specialCharacters) {
        trueStatements.push('Special Characters');
    }
    if (numeric) {
        trueStatements.push('Numbers');
    }

    // Create the alert box with true statements
    if (trueStatements.length > 0) {
        alert('You have chosen to include: ' + '\n' + trueStatements.join('\n') + '\nin your password.')
    }

    var userChoice = [
        length,
        lowercase,
        uppercase,
        specialCharacters,
        numeric,
    ]

    var randArray = [];

    if (lowercase) {
        lowercase = alphaLower
    }
    if (uppercase) {
        uppercase = alphaUpper
    }
    if (specialCharacters) {
        specialCharacters = speCha
    }
    if (numeric) {
        numeric = num
    }

    if (lowercase === false && uppercase === false && specialCharacters === false && numeric === false) {
        alert("You must choose at least one type of characters for your password")
        return
    };

    var randArray = [].concat(lowercase, uppercase, specialCharacters, numeric)
    var filtArray = randArray.filter(x => x !== false);

    var passwordArray = [];

    for (let index = 0; index < userChoice[0]; index++) {
        var randomChar = filtArray[Math.floor(Math.random() * filtArray.length)];
        passwordArray.push(randomChar);
    }

    return passwordArray;

}

var generatedPassword = writePassword();
var password = generatedPassword.join("")

console.log(password)
alert('Your Secure Password is: ' + password);

// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// Special functions like "eventlisteners"
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
