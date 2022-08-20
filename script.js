// Arrays for special characters, numbers, letters
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var selections = []

// Function to prompt user for password options

function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  )
   if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
   } 
   if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
    if (length > 128) {
      alert("Password length must be less than 129 characters");
      return;
    }
}






