let emailForm = document.getElementsByClassName("email-form")[0];
emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let userEmail = document.getElementById("email").value;

  const isValid = isValidEmail(userEmail);

  if (!isValid) {

  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

