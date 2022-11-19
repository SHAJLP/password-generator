// Assignment code here

// prompt message for number length
var length = Number(prompt("Please enter a password length between 8 and 128")),

//prompt message for special characters
 charType = prompt(
   "Enter a character type: special, numeric, uppercase, lowercase."
 ),

 passwordText = generatePassword();
//This is my function

function generatePassword() {
  //This is my object literals

 var charSets = {
   lowercase: "abcdefghijklmnopqrstuvwxyz",
   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   numeric: "0123456789",
   special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
 };
 var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
 var retVal = "";
 //This is my for-loop with random char. selection
 for (var i = 0; i < length; i++) {
   retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
 }
 return retVal;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var charSets = {
 lowercase: "abcdefghijklmnopqrstuvwxyz",
 uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
 numeric: "0123456789",
 special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
