function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.querySelector(".btn-submit");

const firstName = document.forms[0][0];
const lastName = document.forms[0][1];
const email = document.forms[0][2];
const birthdate = document.forms[0][3];
const quantity = document.forms[0][4];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// regex
const mailregex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
const birthdateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const QuantityRegex = /^[0-9]+$/;

// check if firstname data is valid, return true if valid or false if not valid
function isFirstNameValid(data) {
  if (data.value.length > 2) {
    return true;
  } else {
    return false;
  }
}

// check if lastname data is valid, return true if valid or false if not valid
function isLastNameValid(data) {
  if (data.value.length > 2) {
    return true;
  } else {
    return false;
  }
}

// check if email data is valid, return true if valid or false if not valid
function isEmailValid(data) {
  if (mailregex.test(data.value) == true) {
    return true;
  } else {
    return false;
  }
}

// check if birthdate data is valid, return true if valid or false if not valid
function isBirthdateValid(data) {
  if (birthdateRegex.test(data.value) == true) {
    return true;
  } else {
    return false;
  }
}

// check if quantity data is valid, return true if valid or false if not valid
function isQuantityValid(data) {
  if (QuantityRegex.test(data.value) == true) {
    return true;
  } else {
    return false;
  }
}

// check if location data is valid, return true if valid or false if not valid
function isLocationValid() {
  if (form.location.value != "") {
    return true;
  } else {
    return false;
  }
}

// check if checkbox data is valid, return true if valid or false if not valid
function isCheckbox1Valid() {
  if (form.checkbox1.checked == true) {
    return true;
  } else {
    return false;
  }
}

// to block the behavior of the default click and stay on the form
submitBtn.addEventListener("click", validate);

// validate function on click form for check form
function validate(e) {
  if (isFirstNameValid(firstName) == true && isLastNameValid(lastName) == true && isEmailValid(email) == true && isBirthdateValid(birthdate) == true && isQuantityValid(quantity) == true && isLocationValid() == true && isCheckbox1Valid() == true) {
    return true;
  } else {
    isFirstNameValid(firstName);
    isLastNameValid(lastName);
    isEmailValid(email);
    isBirthdateValid(birthdate);
    isQuantityValid(quantity);
    isLocationValid();
    isCheckbox1Valid();
    return false;
  }
}