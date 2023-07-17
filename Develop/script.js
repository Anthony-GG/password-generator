// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generates password based on criteria to display on the page
//RETURNS: STRING representing a password meeting the requested criteria
function generatePassword(){
  //This is the password string, currently it has a temporary placeholder.
  var password = "THIS IS A PLACEHOLDER PASSWORD";

  //declaration and initilization of password length
  var lengthInput = 0;

  //declarations and initilizations of password criteria
  var lowercaseBool = false;
  var uppercaseBool = false;
  var numericBool = false;
  var specialBool = false;

  //array for the different password criteria bool
  const criteria = [
    lowercaseBool, uppercaseBool, numericBool, specialBool
  ]

  //for each loop prompting user to set each password crteria bool
  criteria.forEach(criteriaSelection)

  return password;
}

function criteriaSelection(bool) {
  alert("Hi");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
