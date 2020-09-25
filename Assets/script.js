// Prompts to user narrowing down their password parameters

alert("Hello, in order to assist you we have a few questions for you to answer!");

var includeLowerCase = confirm("Would you like to include lower case letters?");
var includeUpperCase = confirm("Would you like to include Upper Case letters?");
var includeNumbers = confirm("Would you like to include numbers?")
var includeSpecialCharacters = confirm("Would you like to include any special characters?")

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
