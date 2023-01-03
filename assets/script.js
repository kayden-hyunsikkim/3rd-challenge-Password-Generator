// declare varibles
// used let to avoid var hoisting
// I declated chalength and usertype as an empty because this isn't what I can expect

let chalength = " ";
let usertype = [];
let upperLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let specialLetter = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', '/', '.', ',', '<', '>'];
let numBER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// select section with ID
let generateBtn = document.querySelector("#generate");

// put addEventListener to operate WRITEPASSWORD function when user click button
generateBtn.addEventListener("click", WRITEPASSWORD);



// this is the function for calling prompt
function Callprompt() {
   chalength = parseInt(prompt("how many digits do you want for your password? (between 8 ~ 128 characters)"));
   console.log(chalength);
   // I used parseInt to make the prompt value to number
   if (isNaN(chalength) || chalength < 8 || chalength > 128) {
      alert('try again');
      return false;
   }
   // used concat to combine the characters that user want to put
   if (confirm("Do you want to put uppercase in your generated password?")) {
      usertype = usertype.concat(upperLetter);
      console.log(usertype);
   }
   if (confirm("Do you want to put lowercase in your generated password?")) {
      usertype = usertype.concat(lowerLetter);
      console.log(usertype);
   }
   if (confirm("Do you want to put specialcase in your generated password?")) {
      usertype = usertype.concat(specialLetter);
      console.log(usertype);
   }
   if (confirm("Do you want to put number in your generated password?")) {
      usertype = usertype.concat(numBER);
      console.log(usertype);
   }
   return true;

}


//I used for loop to make the password's length to the length the user want
function generatePassword() {
   let password = '';
   for (i = 0; i < chalength; i++) {
      randomnumber = Math.floor(Math.random() * usertype.length);
      password = password + usertype[randomnumber];
   }
   return password;
}



function WRITEPASSWORD() {
   let runprompt = Callprompt();
   let password = generatePassword();
   let passwordText = document.querySelector("#password");

   passwordText.value = password;
   console.log(passwordText);
   console.log(passwordText.value);
   // I have tried to use textContent But it didn't work. that's because It is textarea not browser.
}

