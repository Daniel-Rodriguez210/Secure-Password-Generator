// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
alert("Hello, in order to assist you we have a few questions for you to answer!");  
var length = prompt("Please select the length of your password. It must me between 8 characters and no more tham 128!")
var lowerCase = confirm("Would you like to include lower case letters?");
var upperCase = confirm("Would you like to include Upper Case letters?");
var numbers = confirm("Would you like to include numbers?")
var specialCharacters = confirm("Would you like to include any special characters?")
}


// Arrays for special characters, numbers, letters
var characters = [ upperC, lowerC, numbers, specialC]
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0,1,2,3,4,5,6,7,8,9]
var specialC = ["~","!","@","#","$","%","&","*",] 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{}

// this creates the randomizer of selected password features
var lowerCaseRandom = [lowerC](Math.floor(Math.random) * [lowerC.length])
var upperCRandom = [upperC](Math.floor(Math.random) * [upperC.length])
var numbersRandom = [numbers](Math.floor(Math.random) * [numbers.length])
var specialCRandom = [specialC](Math.floor(Math.random) * [specialC.length])
