let form = document.querySelector("form");

let userNameError = "";
let nameError = "";
let emailError = "";
let phoneError = "";
let passwordError = "";

function checkNum(str) {
  return str.split("").some((e) => Number(e));
}

function handleSubmit(event) {
  event.preventDefault();

  let userNameElm = event.target.elements.username;

  let userName = event.target.elements.name;

  let userEmail = event.target.elements.email;

  let phone = event.target.elements.number;

  let password = event.target.elements.password;

  let confirmPw = event.target.elements.confirm;

  if (userNameElm.value.length < 4) {
    userNameError = "Username can't be less than 4 characters";
    userNameElm.nextElementSibling.innerText = userNameError;
  } else if (userNameElm.value.length >= 4) {
    userNameError = "";
    userNameElm.nextElementSibling.innerText = "";
  }

  if (checkNum(userName.value)) {
    nameError = "Name can't be numbers";
    userName.nextElementSibling.innerText = nameError;
  } else if (!checkNum(userName.value)) {
    nameError = "";
    userName.nextElementSibling.innerText = "";
  }

  if (!userEmail.value.includes("@")) {
    emailError = "Email must contain the symbol `@`";
    userEmail.nextElementSibling.innerText = emailError;
  } else if (userEmail.value.includes("@")) {
    emailError = "";
    userEmail.nextElementSibling.innerText = "";
  }

  if (userEmail.value.length < 6) {
    emailError = "Email must be at least 6 characters";
    userEmail.nextElementSibling.innerText = emailError;
  } else if (userEmail.value.length >= 6) {
    emailError = "";
    userEmail.nextElementSibling.innerText = "";
  }

  if (phone.value.length < 10 || phone.value.length > 10) {
    phoneError = "Length of phone number should be 10";
    phone.nextElementSibling.innerText = phoneError;
  } else if (phone.value.length === 10) {
    phoneError = "";
    phone.nextElementSibling.innerText = "";
  }

  if (password.value !== confirmPw.value) {
    passwordError = "Password and confirm password must be same";
    confirmPw.nextElementSibling.innerText = passwordError;
  } else {
    passwordError = "";
    confirmPw.nextElementSibling.innerText = userNameError;
  }

  if (
    userNameError === "" &&
    nameError === "" &&
    emailError === "" &&
    phoneError === "" &&
    passwordError === ""
  ) {
    alert("User Added Successfully!");
  }
}
form.addEventListener("submit", handleSubmit);
