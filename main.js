//DOM elements
var passwordEl = document.getElementById("password");

var passwordLength = 0;
var password = "";

//Event that prompts user for input for password generation
document.getElementById("generate").addEventListener("click", promptUser)

//generates random lower case letter based on ASCII
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//generates random upper case letter based on ASCII
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//generates random number based on ASCII
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//generates random symbol from listed symbols
function getRandomSpecial() {
    var special = '!@#$%^&*()[]{}=<>,./?=-:;_|`~'
    return special[Math.floor(Math.random() * special.length)];
}

//potential function to verify password string
// function passwordTest(password = '') {

// }

//function that prompts the user for input
function promptUser() {
    //defaulting the user input criteria as false
    var useLower = false;
    var useUpper = false;
    var useNumber = false;
    var useSpecial = false;
    //creating an empty arr to hold the generated characters for the password
    var userCriteriaChoices = [];
    //do while loop that will prevent the user from progressing without the proper input
    while (!passwordLength || (passwordLength < 8) || (passwordLength > 128)) {
        passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
        //if loop that prompts the user to choose a password length between 8-128
        if (!passwordLength || (passwordLength < 8) || (passwordLength > 128)) {
            alert("You must choose a number between 8 and 128.");
        }
    } 
    //do while loop that will prevent the user from progressing without picking at least one criteria
    while (!useLower && !useUpper && !useNumber && !useSpecial) {
        useLower = confirm("Click OK to confirm including lower case letters.");
        useUpper = confirm("Click OK to confirm including upper case letters");
        useNumber = confirm("Click OK to confirm including numbers.");
        useSpecial = confirm("Click OK to confirm including special characters.");
        //if loop that prompts the user that they need to choose at least one criteria to proceed
        if (!useLower && !useUpper && !useNumber && !useSpecial) {
            choices = alert("You must choose at least one criteria!");
        }
    }
    //if statement that adds a randomized lower case cha to the arr userCriteriaChoices[] if the user confirms use of lower case
    if (useLower) {
        userCriteriaChoices.push("lower");
    }
    //if statement that adds randomized upper case cha to the arr userCriteriaChoices[] if the user confirms use of upper case
    if (useUpper) {
        userCriteriaChoices.push("upper");
    }
    //if statement that adds randomized number cha to the arr userCriteriaChoices[] if the user confirms use of numbers
    if (useNumber) {
        userCriteriaChoices.push("number");
    }
    //if statement that adds randomized special cha to the arr userCriteriaChoices[] if the user confirms use of special
    if (useSpecial) {
        userCriteriaChoices.push("special");
    }
    //foor loop that iterates over the length of the user-inputted password length
    for (i = 0; i < passwordLength; i++) {
        //var created to hold the randomized criteria based on array length
        var nextUserCriteriaIndex = Math.floor(Math.random() * userCriteriaChoices.length);
        var randomCharacterChoice = userCriteriaChoices[nextUserCriteriaIndex];
        if (randomCharacterChoice === "lower") {
            password += getRandomLower();
        }
        else if (randomCharacterChoice === "upper") {
            password += getRandomUpper();
        }
        else if (randomCharacterChoice === "number") {
            password += getRandomNumber();
        }
        else if (randomCharacterChoice === "special") {
            password += getRandomSpecial();
        }
    }
   
    console.log(password);
    console.log(useLower);
    console.log(useUpper);
    console.log(passwordLength);
    console.log(useNumber);
    console.log(useSpecial);
    passwordEl.textContent = password;
}

// promptUser();
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSpecial());