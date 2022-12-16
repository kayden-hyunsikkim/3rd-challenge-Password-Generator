// Assignment Code
var usertype = [] ;
var charlength = 1;
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',] ;
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','g','r','s','t','u','v','w','x','y','z',] ;
var specialCase = ['~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','/','|','<','>','.',','] ;
var numberCase = ['0','1','2','3','4','5','6','7','8','9',] ;

var generateBtn = document.querySelector("#generate"); 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var theValueofprompt = CallPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  
  
  passwordText.value = password;


}

function CallPrompt() {
charlength = parseInt(prompt("type charcters between 8 ~ 128 digits :)"));
      if (isNaN(charlength) || charlength < 8 || charlength >128 ) {
              alert('enter again.please');
              return false;
      }
      if (confirm('Do you want to put upper character in your generated password?')) {
              usertype = usertype.concat(upperCase);
      }
      if (confirm('Do you want to put lower character in your generated password?')) {
              usertype = usertype.concat(lowerCase);
      }
      if (confirm('Do you want to put special character in your generated password?') ) {
               usertype = usertype.concat(specialCase);
      }
      if (confirm('Do you want to put Number in your generated password?') ) {
               usertype = usertype.concat(numberCase);
      }
      return true;
}

function generatePassword() {
      var password='';
      for (i=0; i < usertype.length; i++) {
        randomnumber = Math.floor(Math.random()*usertype.length);
        password = password + usertype[randomnumber];
      }     
      return password;

}



