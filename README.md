# JS_Password_Generator
Lesson 3 JavaScript Password Generator
// Assignment Code

//Alerts and prompts were easily established. 
var guestuser = alert ("Good day! Please create a password!");
var guestuser = alert ("The Password will be between 8 and 128 characters long.");
var guestuser = alert ("You must choose between lowercase, uppercase, numeric and/or special characters.");

//The struggle with the prompts and password variables stemmed from the inability
//to create the correct parse, if else, and random functions to tie everything together.
var lcletters = "abcdefghijklmnopqrstuvwxyz";
var ucletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allnumbers = "0123456789";
var spec_char = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var generateBtn = document.querySelector("#generate"); 
var generatePassword = lcletters + ucletters + allnumbers + spec_char

//established the relationship of the 'var password = generatePassword' too late. 
//I will continue to work with generate password and build the functionality out 
//of that so that it translate into the writePassword function. 
function writePassword() {
  var pwlength = prompt ("Let's begin! Please enter the number of characters you would like in the password");
  var lowercase = prompt ("Would you like lowercase? Please type yes or no.");
  var Uppercase =  prompt ("Would you like Uppercase? Please type yes or no.");
  var number = prompt ("Would you like a number? Please type yes or no.");
  var special_char = prompt ("Would you like a special character? Please type yes or no.");
  var password = generatePassword;
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;

};

    
    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


![image](https://user-images.githubusercontent.com/84113171/125151011-2452d000-e112-11eb-819d-493133ca3e19.png)
