// Variable definitions
var generateBtn = document.querySelector("#generate");

var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphaLower = alphabet.split('')
var alphaUpper = alphabet.toUpperCase().split('')
var special = "!#$%&’()*+,-./:;<=>?@[\]^_`{|}~"
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

    // Define user's choice variables
    var userChoice = [
        length,
        lowercase,
        uppercase,
        specialCharacters,
        numeric,
    ]

    // Define the random array absed on the user's choice
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

    randArray = [].concat(lowercase, uppercase, specialCharacters, numeric)
    var filtArray = randArray.filter(x => x !== false);

    // Given the length of the password selected by the user, we define the variable that will eventually create the string
    var passwordArray = [];

    for (let index = 0; index < userChoice[0]; index++) {
        var randomChar = filtArray[Math.floor(Math.random() * filtArray.length)];
        passwordArray.push(randomChar);
    }

    // Define variable as string
    var generatedPassword = passwordArray.join("");

    //DOM selector to display the generated password on the website
    var passwordText = document.querySelector("#password");
    passwordText.textContent = 'Your Secure Password is: ' + generatedPassword;
}

// Event listerner to start the function
generateBtn.addEventListener("click", writePassword);
