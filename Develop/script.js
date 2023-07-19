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
  //Variable used to validate at least one of the options is chosen; if validation num hits 4, then input needs to be redone
  var criteriaValidation = 0;

  //Start of LENGTH input and validation
  while(true){
    try {
      lengthInput = prompt ("How many characters do you want this password to be?\n\nPlease enter a valid number between 8 to 128:");
      
      //Checks to see if user pressed cancel and allows them to cancel the process prematurely
      if (lengthInput == null) {
        var exitText = "PASSWORD GENERATION: CANCELLED"
        return exitText;
      }
      //converts prompt String return to number type
      lengthInput = Number(lengthInput);
      if (lengthInput < 8 || lengthInput > 128 || isNaN(lengthInput)) {
        throw "Error: Invalid input"
      } else if (typeof(lengthInput) == "number") {
        break;
      } else {
        throw "Error: Invalid input"
      }
    } catch {
        alert("Please enter a valid number.")
    }
  }

  //Start of password criteria selection and validation
  //for each loop prompting user to set each password crteria bool
  while(true){
    for(let i=0; i < criteria.length; i++ ){
      //while loop to prompt for answer until a valid input is entered
      while(true){
        //try-catch statement used for error handling on input in situations where user enters something other than 'Y' or 'N'
        try{
          var response = prompt("Do you want this password to have " + criteria[i][0] + " characters?\n\nAnswer with 'Y' for yes or 'N' for no:");
          //converts response to uppercase (if value is not NULL)
          if(response != null) {
            response = response.toUpperCase();
          }
          switch(response) {
            case 'Y':
              criteria[i][1] = true;
              break;
            case "N":
              criteria[i][1] = false;
              criteriaValidation++;
              break;
            //In situation where user presses cancel, allows user to leave password generation process.
            case null:
              var exitText = "PASSWORD GENERATION: CANCELLED"
              return exitText;
            default:
              throw "Error: Invalid input"
          }
        } catch{
          alert("Please enter a valid input consisting of 'Y' or 'N'.")
        }
        break;
      }
    }
    if(criteriaValidation == 4){
      alert("Please select at least one valid password criteria option!");
      criteriaValidation = 0;
    } else {
      break;
    }
  }

  criteria.forEach(logToConsole);
  console.log(lengthInput);
  return password;
}

//function for debugging 
function logToConsole(item){
  console.log(item);
}

function stringGeneration(length, lowercase, uppercase, numeric, special){

    let asciiValues = new Array(length);
    var min = 0;
    var max= 0;
    var minS = 0;
    var maxS = 0;

    if (lowercase){

      min = 97;
      max = 122;

      for(i=0; i < length; i++) {
        
      }
    }
    if (uppercase){
      
      min = 65;
      max = 90;

      for(i=0; i < length; i++) {
        
      }
    }
    if (numeric){

      min = 48;
      max = 57;

      for(i=0; i < length; i++) {
        
      }
    }
    if (special){

      min = 21;
      max = 47;
      minS = 58;
      maxS = 64;

      for(i=0; i < length; i++) {
        
      }
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
