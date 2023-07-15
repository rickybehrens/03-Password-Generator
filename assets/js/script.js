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
var espCha = special.split('')
var passRange = {
    from: 8,
    to: 128,
}

var passwordCriteria = {
    lenght: 8,
    lowercase: true,
    uppercase: true,
    numeric: true,
    specialCharacters: false
}

// Functions

// Prompt for length
var lenght = prompt("Choose a password length between 8 and 128 charaters")
console.log(lenght)

// Validate length
if (8 > lenght > 128) {
    alert("Password's length needs to be between 8 and 128 characters")
}

// Prompt for characters
// Validate characters
// Generate password
// Show password

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Special functions like "eventlisteners"
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
