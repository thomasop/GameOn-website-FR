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
const modalconfirm = document.querySelector(".bground");
const submitBtn = document.querySelector(".btn-submit");
const btnClose = document.querySelector(".btn-close");

const firstName = document.forms[0][0];
const lastName = document.forms[0][1];
const email = document.forms[0][2];
const birthdate = document.forms[0][3];
const quantity = document.forms[0][4];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal confirme
closeBtn.forEach((btn) => btn.addEventListener("click", closeConfirmation));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal confirmation
function openConfirmation() {
  modalconfirm.style.display = "block";
}

// close modal confirmation
function closeConfirmation() {
  modalconfirm.style.display = "none";
}

// error message
const messagesErrors = {
  0 : "Le prénom doit comporter au moins deux caractères",
  1 : "Le nom doit comporter au moins deux caractères",
  2 : "Veuillez entrer une adresse mail valide",
  3 : "Veuillez entrer une date de naissance valide",
  4 : "Veuillez entrer un nombre de tournois",
  5 : "Veuillez séléctionner une ville",
  6 : "Veuillez cocher accepter les conditions d'utilisation"
}

// regex
const mailregex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
const birthdateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const QuantityRegex = /^[0-9]+$/;

// validation of the data in the input
formData[0].addEventListener("input", isFirstNameValid);
formData[1].addEventListener("input", isLastNameValid);
formData[2].addEventListener("input", isEmailValid);
formData[3].addEventListener("input", isBirthdateValid);
formData[4].addEventListener("input", isQuantityValid);
formData[5].addEventListener("input", isLocationValid);
formData[6].addEventListener("input", isCheckbox1Valid);

// check if firstname data is valid, return true if valid or false if not valid
function isFirstNameValid() {
  if (firstName.value.trim() == "" || firstName.value.length <= 2) {
    return showErrorMessage(0);
  } else {
    return hideErrorMessage(0);
  }
}

// check if lastname data is valid, return true if valid or false if not valid
function isLastNameValid() {
  if (lastName.value.trim() == "" || lastName.value.length <= 2) {
    return showErrorMessage(1);
  } else {
    return hideErrorMessage(1);
  }
}

// check if email data is valid, return true if valid or false if not valid
function isEmailValid() {
  if (mailregex.test(email.value) == true) {
    return hideErrorMessage(2);
  } else {
    return showErrorMessage(2);
  }
}

// check if birthdate data is valid, return true if valid or false if not valid
function isBirthdateValid() {
  if (birthdateRegex.test(birthdate.value) == true) {
    return hideErrorMessage(3);
  } else {
    return showErrorMessage(3);
  }
}

// check if quantity data is valid, return true if valid or false if not valid
function isQuantityValid() {
  if (QuantityRegex.test(quantity.value) == true) {
    return hideErrorMessage(4);
  } else {
    return showErrorMessage(4);
  }
}

// check if location data is valid, return true if valid or false if not valid
function isLocationValid() {
  if (form.location.value != "") {
    return hideErrorMessage(5);
  } else {
    return showErrorMessage(5);
  }
}

// check if checkbox data is valid, return true if valid or false if not valid
function isCheckbox1Valid() {
  if (form.checkbox1.checked == true) {
    return hideErrorMessage(6);
  } else {
    return showErrorMessage(6);
  }
}

// show error message
function showErrorMessage(n) {
  let errordiv = document.getElementsByClassName("errorform")[n];
  errordiv.innerHTML = messagesErrors[n];
  return false;
}

// hide error message
function hideErrorMessage(l) {
  let errordiv = document.getElementsByClassName("errorform")[l];
  errordiv.innerHTML = "";
  return true;
}

// confirmation function for display and hide modal
function confirmation() {
  document.querySelector(".modal-body").style.display = "none";
  document.querySelector(".confirmation").style.display = "block";
}

// close modal confirm
btnClose.addEventListener("click", closeConfirmation);

// to block the behavior of the default click and stay on the form
submitBtn.addEventListener("click", validate);

// validate function on click form for check form
function validate(e) {
  e.preventDefault();
  if (isFirstNameValid() == true && isLastNameValid() == true && isEmailValid() == true && isBirthdateValid() == true && isQuantityValid() == true && isLocationValid() == true && isCheckbox1Valid() == true) {
    confirmation();
  } else {
    isFirstNameValid(firstName);
    isLastNameValid(lastName);
    isEmailValid(email);
    isBirthdateValid(birthdate);
    isQuantityValid(quantity);
    isLocationValid();
    isCheckbox1Valid();
  }
}