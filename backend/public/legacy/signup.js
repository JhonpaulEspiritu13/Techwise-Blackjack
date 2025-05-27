const signUpForm = document.querySelector('#signUpForm');
const submitForm = document.querySelector("#submitForm");
// --Real Name Field--
const realNameLabel = document.querySelector('label[for="real-name-field"]');
const realNameField = document.querySelector("#real-name-field");
const realNameError = document.querySelector("#real-name-error");
// --User Name Field--
const userNameLabel = document.querySelector('label[for="user-name-field"]');
const userNameField = document.querySelector("#user-name-field");
const userNameError = document.querySelector("#user-name-error");
// --Passwords Field--
const passwordLabel = document.querySelector('label[for="password-field"]');
const passwordField = document.querySelector("#password-field");
const passwordError = document.querySelector("#password-error");
const passwordShowButton = document.querySelector("#password-show");
const recheckField = document.querySelector("#recheck-field");
const recheckError = document.querySelector("#recheck-error");
const recheckShowButton = document.querySelector("#recheck-show");
// --Date of Birth Field--
const birthdateLabel = document.querySelector('label[for="birthdate-field"]');
const birthdateField = document.querySelector("#birthdate-field");
const birthdateError = document.querySelector("#birthdate-error");
// --Legal and Term Checkboxes--
const legalCheckbox = document.querySelector("#legal-checkbox");
const termsCheckbox = document.querySelector("#terms-checkbox");

// --Logs to ensure they have been loaded.--
// console.log(signUpForm);
// console.log(submitForm);
// console.log(realNameLabel);
// console.log(realNameField);
// console.log(realNameError);
// console.log(userNameLabel);
// console.log(userNameField);
// console.log(userNameError);
// console.log(passwordLabel);
// console.log(passwordField);
// console.log(passwordError);
// console.log(passwordShowButton);
// console.log(recheckField);
// console.log(recheckError);
// console.log(birthdateLabel);
// console.log(birthdateField);
// console.log(birthdateError);
// console.log(recheckShowButton);
// console.log(legalCheckbox);
// console.log(termsCheckbox);

// --Name Field Functions--

// Validates a field based on specified rules.
function validateField(field){
    // No field is empty.
    return field !== "";
}

// Given a label and a field, log it into the console.
function logField(label, field){
    console.log(`${label.textContent}: ${field.value}`);
}

// Focus out tests.
// realNameField.addEventListener("focusout", () => {logField(realNameLabel, realNameField)});
// userNameField.addEventListener("focusout", () => {logField(userNameLabel, userNameField)});

// --Checkbox Functions--

// Validates a checkbox based on specified rules.
function validateCheckbox(checkbox){
    return checkbox.checked; // Rn, this is the only rule.
}

// Logs whether or not a checkbox has been checked.
function logCheckbox(checkbox, checkname){
    if (validateCheckbox(checkbox)){
        console.log(`The user has checked the ${checkname} checkbox.`);
    }
    else{
        console.log(`The user has not checked the ${checkname} checkbox.`);
    }
}

// Click tests.
// legalCheckbox.addEventListener("click", () => {logCheckbox(legalCheckbox, "legal")});
// termsCheckbox.addEventListener("click", () => {logCheckbox(termsCheckbox, "terms")});

// --Password Field Functions--

// Given a field and button, show the password.
function showPassword(passwordField){
    const oldType = passwordField.getAttribute("type");
    const newType = oldType === "password" ? "text" : "password";
    passwordField.setAttribute("type", newType);
}

// Given two text fields, ensure they are the same value.
function equalPasswords(passwordField1, passwordField2){
    if (passwordField1.value === passwordField2.value){
        return true;
    }
    else{
        return false;
    }
}

// Log the password validations.
function logPasswords(){
    console.log("Passwords Equal:", equalPasswords(passwordField, recheckField));
}

// Focus out tests.
// passwordField.addEventListener("focusout", logPasswords);
// recheckField.addEventListener("focusout", logPasswords);

// Attach show functions to show buttons.
passwordShowButton.addEventListener("click", () => {showPassword(passwordField)});
recheckShowButton.addEventListener("click", () => {showPassword(recheckField)});

// --Birthdate Field Functions--

// Ensures date is greater than given year.
function dateOlderThanYear(minYear, dateToCheck){
    const todayDate = new Date();
    // Imprecise, but will work for this assignment.
    const checkYear = todayDate.getFullYear() - dateToCheck.getFullYear();
    return checkYear >= minYear;
}

// Rules under COPPA for validate.
function coppaValidateRules(){
    const fieldDate = new Date(birthdateField.value);
    if (isNaN(fieldDate)){
        return -1;
    }

    return dateOlderThanYear(13, fieldDate);
}

// Logs birthdate field.
function logBirthdate(){
    console.log("COPPA Satisfied:", coppaValidateRules());
}

// Selection change tests.
// birthdateField.addEventListener("click", logBirthdate);

// --Submit Functions--

// Ensures user is eligible when signing up.
function checkEligibility(){
    // Passwords are the same.
    if (!equalPasswords(passwordField, recheckField)){
        console.log("Not equal passwords.");
        console.log("----------");
        return false;
    }

    // Ensures Coppa Rules are satisfied.
    if (!coppaValidateRules() || coppaValidateRules() === -1){
        console.log("Coppa not validated or unspecified.");
        console.log("----------");
        return false;
    }

    // Checkboxes are checked.
    if (!validateCheckbox(legalCheckbox) || !validateCheckbox(termsCheckbox)){
        console.log("Checkboxes not checked.");
        console.log("----------");
        return false;
    }

    // No fields are blank.
    if (!validateField(realNameField) || !validateField(userNameField)){
        console.log("Fields not valid.");
        console.log("----------");
        return false;
    }

    return true;
}

// Logs everything.
function logForm(){
    console.log("----------");
    // Check eligibility.
    if (checkEligibility()){
        console.log("The user is eligible.");
    }
    else{
        console.log("The user is ineligible.");
    }
    console.log("----------");

    logField(realNameLabel, realNameField);
    logField(userNameLabel, userNameField);
    logField(passwordLabel, passwordField);
    logField(passwordLabel, recheckField);
    logField(birthdateLabel, birthdateField);

    logCheckbox(legalCheckbox, "legal");
    logCheckbox(termsCheckbox, "term");
    logPasswords();
    logBirthdate();

}

// Attach to submit button.
submitForm.addEventListener("click", (e) => {e.preventDefault(); logForm();});
