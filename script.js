// Assignment code here

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var uppercharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I, "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt(
    "Hello! Please enter how long you would like your password to be."
  );
  if (passwordLength < 8) {
    alert("Must be greater than 8");
    return "Please try again!";
  } else if (passwordLength > 128) {
    alert("Must be less than 128");
    return "Please try again!";
  }
  var lowerChar = confirm("Would you like lowercase letters to be included?");
  var upperChar = confirm("Would you like uppercase letters to be included?");
  var nums = confirm("Would you like numbers to be included?");
  var special = confirm("Would you like special characters to be included?");
  if (!upperChar && !lowerChar && !nums && !special) {
    alert("Must choose one type of characters.");
    return "Please try again!";
  }
  var One = [];
  if (upperChar) {
    One = One.concat(uppercharacters);
  }
  if (lowerChar) {
    One = One.concat(lowerCharacters);
  }
  if (nums) {
    One = One.concat(numbers);
  }
  if (special) {
    One = One.concat(specialcharacters);
  }
  console.log(One);
  var Two = [];
  for (i = 0; i < passwordLength; i++) {
    var item = One[Math.floor(Math.random()*One.length)];
    console.log(item);
    Two.push(item)
    console.log(Two);
  }
  return Two.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);