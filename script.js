// Assignment code here

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var uppercharacters = ["A", "B", "C", "D", "E", "F", "G"];
var lowerCharacters = ["a", "b", "c"];
var specialcharacters = ["!", "@", "#"];

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
  for (i = 0; i < passwordLength; i++) {
    
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I click the button to generate a password. THEN I am presented with a series of prompts for password criteria

//WHEN prompted for password criteria. THEN I select which criteria to include in the password

//WHEN prompted for the length of the password. THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN asked for character types to include in the password. THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt. THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered. THEN a password is generated that matches the selected criteria

//WHEN the password is generated. THEN the password is either displayed in an alert or written to the page
