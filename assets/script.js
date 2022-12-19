var chalength = " ";
var usertype = [];
var upperLetter =  ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J','K','L','M','N', 'O', 'P','Q','R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerLetter =  ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j','k','l','m','n', 'o', 'p','q','r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialLetter = ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']','|',':',';','"','/','.',',','<','>'];
var numBER = ['0','1','2','3','4','5','6','7','8','9'];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", WRIGHTPASSWORD);



function WRIGHTPASSWORD() {
    var runprompt  = Callprompt();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
 
  
  
    passwordText.value = password;

}




function Callprompt() { 
     chalength = parseInt( prompt("type letters you want for generated password between 8 ~ 128 letters,upper,lower,special, numbner"));
   
     if(isNaN(chalength) || chalength <8 || chalength >128) {
        alert('try again');
        return false;
     }
     if (confirm("Do you want to put uppercase in your generated password?")){
        usertype = usertype.concat(upperLetter);
     }
     if (confirm("Do you want to put lowercase in your generated password?")){
        usertype = usertype.concat(lowerLetter);
     }
     if (confirm("Do you want to put specialcase in your generated password?")){
        usertype = usertype.concat(specialLetter);     }
     if (confirm("Do you want to put number in your generated password?")){
        usertype = usertype.concat(numBER);     }
        return true;

}

function generatePassword() {
    var password ='';
    for(i=0; i < chalength; i++) {
        randomnumber = Math.floor(Math.random()*usertype.length);
        password = password + usertype[randomnumber];
    }
    return password;
    }
