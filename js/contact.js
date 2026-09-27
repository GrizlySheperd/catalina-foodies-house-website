// Contact page

// JavaScript function 3: check the form. Returns true if everything is OK.
function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var consent = document.getElementById("consent").checked;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // something@something.something
  var isValid = true;

  // Clear the old error messages first
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("consentError").textContent = "";

  if (name == "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    isValid = false;
  }

  if (email == "") {
    document.getElementById("emailError").textContent = "Please enter your email.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email, e.g. ali@example.com";
    isValid = false;
  }

  if (message == "") {
    document.getElementById("messageError").textContent = "Please enter a message.";
    isValid = false;
  }

  if (!consent) {
    document.getElementById("consentError").textContent = "Please tick the box to agree.";
    isValid = false;
  }

  return isValid;
}

$(document).ready(function () {

  // When the form is submitted
  $("#contactForm").submit(function (event) {
    event.preventDefault(); // stay on this page

    $("#successMsg").hide(); // jQuery hide()

    if (validateForm()) {
      $("#successMsg").fadeIn(); // jQuery fadeIn()
      this.reset();              // empty the form
    }
  });

});
