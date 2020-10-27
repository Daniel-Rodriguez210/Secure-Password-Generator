// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for special characters, numbers, letters
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialC = ["~", "!", "@", "#", "$", "%", "&", "*",];
var selections = []

// Rather than doing a long if/else chain for each scenario for what the user selects I am going to create variables for each upper, lower, number, and special character with booleans set to false and activate them to true if the user states they would like to include each one. 

function generatePassword() {

  alert("Hello, in order to assist you we have a few questions for you to answer!");

  // This section asks the user for password length and makes sure the user input fits the parameters of the program. 

  var userInput = parseInt(prompt("Please select the length of your password. It must me between 8 characters and no more tham 128!"));
  if (!userInput) {
    alert("Item can't be left blank!");
    return;
  } else if (userInput < 8 || userInput > 128) {
    userInput = parseInt(prompt("Your password length must be between 8 and 128."))
    return;
  }

  // This section asks the user for what they would like to be included in their password numbers, letters, special characters. 
  var lowerCase = confirm("Would you like to include lower case letters?");
  var upperCase = confirm("Would you like to include Upper Case letters?");
  var numbers = confirm("Would you like to include numbers?");
  var specialCharacters = confirm("Would you like to include any special characters?");

  if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
    alert("You must choose a minimum of 2 to generate a secure password!")
    return;
  }

  if (lowerCase) {
    selections = selections.concat(lowerC);
  }
  if (upperCase) { 
    selections = selections.concat(upperC);
  }
  if (numbers) {
    selections = selections.concat(numbersC);
  }
  if (specialCharacters) {
    selections = selections.concat(specialC);
    
  }


var password = ""
  for (i = 0; i < userInput; i++) {
    password += selections[Math.floor(Math.random() * selections.length)];
    
  }
 document.getElementById("password").value = password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword); { }



