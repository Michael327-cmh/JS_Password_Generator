// Assignment Code

//function regenerate() {
// Write password to the #password input

//if (!guestuser) {
//  return;
//}

var guestuser = alert ("Good day! Please create a password!");
var guestuser = alert ("The Password will be between 8 and 128 characters long.");
var guestuser = alert ("You must choose between lowercase, uppercase, numeric and/or special characters.");



var generateBtn = document.querySelector("#generate"); 

//var randomchars = Math.floor(Math.random() * chars.length);


function writePassword() {
  var lcletters = "abcdefghijklmnopqrstuvwxyz";
  var ucletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var allnumbers = "0123456789";
  var spec_char = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var pwlength = prompt ("Let's begin! Please enter the number of characters you would like in the password");
  
  var lowercase = prompt ("Would you like lowercase? Please type yes or no.");
  if (8 < string_length > 128) parseFloat(InputEvent);
  var Uppercase = prompt ("would you like uppercase? Please type yes or no.");
  if (8 < string_length > 128) parseFloat(InputEvent);
  var number = prompt ("Would you like a number? Please type yes or no.");
  if (8 < string_length > 128) parseFloat(InputEvent);
  var special_char = prompt ("Would you like a special character? Please type yes or no.");
  if (8 < string_length > 128) parseFloat(InputEvent);
   //var string_length = 8 - 128;
  //var randomstring = '';
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
};
  //for (var i=0; i < chars.length; i++) {
    //  var chars = Math.floor(Math.random() * chars.length);
      //randomstring += chars.substring(chars,chars+1);
  //}
  //document.randform.randomfield.value = randomstring;
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//}