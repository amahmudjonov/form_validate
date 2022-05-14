// Selectors
const form = document.querySelector(".signup-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password_el");
const eyeClick = document.querySelector("[data-password]");
const button = document.querySelector(".submit-btn");

// Event - From Submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checksInputs();
});

// Function CheckInputs
function checksInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // First Name Statement
  if (firstNameValue === "") {
    firstName.style.border = "2px solid red";
  } else {
    firstName.style.border = "2px solid #eeeeee";
  }
  // Last Name Statement
  if (lastNameValue === "") {
    lastName.style.border = "2px solid red";
  } else {
    lastName.style.border = "2px solid #eeeeee";
  }

  // Email Statement
  if (!emailValue === "" || emailValue.match(mailformat)) {
    email.style.border = "2px solid #eeeeee";
  } else {
    email.style.border = "2px solid red";
  }

  // Password Statement
  if (passwordValue === "") {
    password.style.border = "2px solid red";
  } else {
    password.style.border = "2px solid #eeeeee";
  }
}
