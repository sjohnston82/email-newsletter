let emailForm = document.getElementsByClassName("email-form")[0];
emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let userEmail = document.getElementById("emailAddress").value;

  const isValid = isValidEmail(userEmail);

  if (!isValid) {
    let errorText = document.getElementById("errorText");
    errorText.classList.remove("error-text-disabled");
    errorText.classList.add("error-text");

    const emailInput = document.getElementById("emailAddress");
    emailInput.classList.add("error-input");
    emailInput.value = "";
  } else if (errorText.classList.contains("error-text") || isValid) {
    errorText.classList.remove("error-text");
    errorText.classList.add("error-text-disabled");
  

    localStorage.setItem("email", userEmail);
    window.location.href = "success.html";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


