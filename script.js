// Assignment code here

//Random password generator 

// Secure random password generator
// User will be presented with prompts
// User will be prompted for the password criteria;
// The user will be able to choose a password between 8-128      characters
//User will be asked to confirm if they wish include uppercase,
// Uppercase, numerics and/or special characters.
//When each propt is answered a password is generated that matches the criteria
//Password will be displayed within the box


// Declaring variables for user input
function generatePassword() {
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var uppercaseCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T",
    "U", "V", "W", "X", "Y", "Z",
  ];
  var lowercaseCharacters = [ "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s","t","u", "v", "w", "x",  "y", "z",
  ];
  var specialCharacters = [ "@", "%", "+", "\\","/", "'", "!",
   "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]",
  "[", "~", "-", "_", ".",
  ];
  var possibleCharacters = [];

  //
  // Prompt user to select password length
  //User can use one or more character types
  
  numberOfCharacters = prompt(
    "How many characters would you like in your password? Choose between 8-128 characters."
  );
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  } else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
  }
  //Prompt user to confirm if they would like to add lowercase characters

  hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    var turnToLowercase = alert(
      "Your password will have lowercase characters."
    );
  } else {
    alert("Your password will NOT have lowercase characters.");
  }
 //Prompt user to confirm if they would liketo add uppercase characters

  hasUppercase = confirm("Do you want uppercase characters?");
  if (hasUppercase) {
    alert("Your password will have uppercase characters.");
  } else {
    alert("Your password will NOT have uppercase characters.");
  }
 //Prompt user to confirm if they would like to add numerics 

  hasNumbers = confirm("Do you want to use numerics?");
  if (hasNumbers) {
    alert("Your password will have numerics.");
  } else {
    alert("Your password will NOT have numerics.");
  }
 //Promptuser to confirm if they would like to add special characters

  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters.");
  } else {
    alert("Your password will NOT have special characters.");
  }
 
  if (
    hasLowercase === false &&
    hasUppercase === false &&
    hasNumbers === false &&
    hasSpecial === false
  ) {
    return "Please select at least one character type.";
  }
 
  // group selected characters
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
 
  //Pick random cards out of new pool for length of password
  let finalPassword = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng = [Math.floor(Math.random() * possibleCharacters.length)];
    // or finalPassword += possibleCharacters[rng];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
 }
 
 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 
 // Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 