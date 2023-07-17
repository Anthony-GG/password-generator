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

  //array for the different password criteria bool and criteria names
  const criteria = [
    Array("lowercase", lowercaseBool), Array("uppercase", uppercaseBool), Array("numeric", numericBool), Array("special", specialBool)
  ]


  //for each loop prompting user to set each password crteria bool
  for(let i=0; i < criteria.length; i++ ){
    //while loop to prompt for answer until a valid input is entered
    while(true){
      //try-catch statement used for error handling on input in situations where user enters something other than 'Y' or 'N'
      try{
        var response = prompt("Do you want this password to have " + criteria[i][0] + " characters? (Answer with Y for yes or N for no)");
        response = response.toUpperCase();
        switch(response) {
          case 'Y':
            criteria[i][1] = true;
            break;
          case "N":
            criteria[i][1] = false;
            break;
          //In situation where user presses cancel, allows user to leave password generation process.
          case null:
            var exitText = "PASSWORD GENERATION: CANCELLED"
            return exitText;
          default:
            throw "Invalid input"
        }
        break;
      } catch{
        alert("Please enter a valid input.")
      }
  }
    // alert(criteria[i][0])
    // alert(criteria[i][1])
  }
  criteria.forEach(logToConsole);
  return password;
}

//function for debugging 
function logToConsole(item){
  console.log(item);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
