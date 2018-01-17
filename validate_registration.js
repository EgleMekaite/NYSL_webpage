/*eslint-env browser*/
/*eslint "no-console": "off"*/

var formElement = document.getElementById("form");
console.log(formElement);

var firstNameInput = document.getElementById("first_name");
console.log(firstNameInput);
firstNameInput.value = [];

var lastNameInput = document.getElementById("last_name");
console.log(lastNameInput);
lastNameInput.value = [];

var streetAddressInput = document.getElementById("street_address");
console.log(streetAddressInput);
streetAddressInput.value = [];

var city = document.getElementById("city");
city.value = [];

var zipCode = document.getElementById("zip");
zipCode.value = [];

var birthDate = document.getElementById("birth_date");
console.log(birthDate);

var phoneNumber = document.getElementById("contact_phone");
phoneNumber.value;

var contactEmail = document.getElementById("contact_email");
contactEmail.value = "";

var parentOrGuardianName = document.getElementById("parent_guardian");
parentOrGuardianName.value = [];



var parentSignature = document.getElementById("signature");
parentSignature.value = [];

formElement.onsubmit = userTriesToSumbit;

function userTriesToSumbit() {
    console.log("User is trying to submit the form");
    
    var isInputCorrect = true;
    
    var incorrectInputMessage = "";
    
    if(firstNameInput.value.length < 1){
        incorrectInputMessage += "Please enter the player's first name.\n"; 
       isInputCorrect = false;
    }
        
    if(lastNameInput.value.length < 1) {
        incorrectInputMessage += "Please enter the player's last name.\n";
        isInputCorrect = false;
    }  
    
    if(streetAddressInput.value.length < 5) {
        incorrectInputMessage += "Please enter the street address.\n";
        isInputCorrect = false;
    }
    
    if(city.value.length < 2) {
        incorrectInputMessage += "Please enter the city.\n";
        isInputCorrect = false;
    }
    
    if(zipCode.value.length < 5) {
        incorrectInputMessage += "Please enter a correct ZIP code.\n";
        isInputCorrect = false;
    }
    
    if(parentOrGuardianName.value.length < 2) {
        incorrectInputMessage += "Please enter a name of a parent or a guardian of the player.\n";
        isInputCorrect = false;
    }
    
    if(phoneNumber.value.isNaN || phoneNumber.value.includes("") == true || phoneNumber.value.includes("-") == false || phoneNumber.value.length < 12) {
        incorrectInputMessage += "Please enter a correct phone number.\n Make sure you include the area code and enter the number in the form of ###-###-####.\n";
        isInputCorrect = false;
    }
    
    if((contactEmail.value.includes("@")) == false) {
        incorrectInputMessage += "Please enter a correct E-mail address.\n";
        isInputCorrect = false;
    }
    
    if(parentSignature.value != parentOrGuardianName.value) {
        incorrectInputMessage += "The name of the parent or guardian of the player should be the same.\n";
        isInputCorrect = false;
    }
        
    if(isInputCorrect == false) {
        alert(incorrectInputMessage);
    }
    return isInputCorrect;
}