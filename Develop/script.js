// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Sets password color to red if user cancels out or black if user continues and generates a password
  if (password == "PASSWORD GENERATION: CANCELLED") {
    passwordText.style.color='red';
    passwordText.value = password;
  } else {
    passwordText.style.color='black';
    passwordText.value = password;
  }
}

//PURPOSE: Generates password based on criteria to display on the page
//RETURNS: password, STRING representing a password meeting the requested criteria
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

  password = stringGeneration(lengthInput, criteria[0][1], criteria[1][1], criteria[2][1], criteria[3][1]);
  return password;
}

//PURPOSE: generates password based on criteria it is passed 
//PARAMETERS: LENGTH, num - LOWERCASE, bool - UPPERCASE, bool - NUMERIC, bool - SPECIAL, bool
//RETURNS: password, STRING based on criteria it is passed
function stringGeneration(length, lowercase, uppercase, numeric, special){

    //Used for debug purposes to determine if password criteria is true or false
    // console.log("lowercase is " + lowercase);
    // console.log("uppercase is " + uppercase);
    // console.log("numeric is " + numeric);
    // console.log("special is " + special);

    //Declarations and initlization of variables
    let asciiValues = new Array();
    var min = 0;
    var max= 0;
    var minS = 0;
    var maxS = 0;

    //If statements that activate and push values to the end of the asciiValues array if the password criteria is true
    if (lowercase){
      //sets minimum and maximum ascii values for associated category
      min = 97;
      max = 122;

      //picks random values within the given ascii value range
      for(var i=0; i < length; i++) {
        asciiValues.push(Math.floor(Math.random() * (max-min) + min));
      }
    }
    if (uppercase){
      //sets minimum and maximum ascii values for associated category
      min = 65;
      max = 90;

      //picks random values within the given ascii value range
      for(var i=0; i < length; i++) {
        asciiValues.push(Math.floor(Math.random() * (max-min) + min));
      }
    }
    if (numeric){
      //sets minimum and maximum ascii values for associated category
      min = 48;
      max = 57;

      //picks random values within the given ascii value range
      for(var i=0; i < length; i++) {
        asciiValues.push(Math.floor(Math.random() * (max-min) + min));
      }
    }
    if (special){
      //sets minimum and maximum ascii values for associated category, special has two seperate ranges
      min = 33;
      max = 47;
      minS = 58;
      maxS = 64;

      //picks random values within the given ascii value range, special runs two for loops at half length for its two seperate ranges
      for(var i=0; i < length / 2; i++) {
        asciiValues.push(Math.floor(Math.random() * (max-min) + min));
      }
      for(var i=0; i < length / 2; i++) {
        asciiValues.push(Math.floor(Math.random() * (maxS-minS) + minS));
      }
    }

    asciiValues = shuffleArr(asciiValues);
    //Used for debug purpose to print all random values to the console after shuffle
    //console.log(asciiValues);

    //creates a new array using the first values in the array up to the given length
    shuffledAscii = asciiValues.slice(0, length);
    console.log(shuffledAscii);

    //creates and initilizes password STRING variable and then adds each ASCii values associated character to password
    var password = "";
    shuffledAscii.forEach(num => { 
      password += String.fromCharCode(num);
    });
    return password;
}

//PURPOSE: a function that shuffles an array using the Fisher-Yates algorithm as it is less biased than standard Math.random practices according to research
//PARAMETERS: arr, array
//RETURNS: arr, shuffled array
function shuffleArr(arr){
  let oldElement;
  for (let i = arr.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    oldElement = arr[i];
    arr[i] = arr[rand];
    arr[rand] = oldElement;
  }
  return arr;
}

// //function for debugging 
// function logToConsole(item){
//   console.log(item);
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
