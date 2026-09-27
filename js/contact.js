// Contact page: check the form before it is "sent".
// There is no server, so a valid message is not sent anywhere; the form is just cleared.

// Shows (or clears) the red message under one field.
function showError(field, message) {
  var error = document.getElementById(field + "-error");
  var input = document.getElementById(field);

  error.textContent = message;
  error.hidden = message === "";
  input.setAttribute("aria-invalid", message === "" ? "false" : "true");
}

// ---------- JavaScript function 3: validate the form ----------
// Checks every field. Returns true only if everything is filled in correctly.
function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var consent = document.getElementById("consent").checked;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isValid = true;

  if (name === "") {
    showError("name", "Please tell us your name.");
    isValid = false;
  } else {
    showError("name", "");
  }

  if (email === "") {
    showError("email", "We need an email to reply to.");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    showError("email", "That email doesn't look quite right.");
    isValid = false;
  } else {
    showError("email", "");
  }

  if (message === "") {
    showError("message", "Don't forget your message!");
    isValid = false;
  } else {
    showError("message", "");
  }

  if (!consent) {
    showError("consent", "Please tick the box so we're allowed to reply to you.");
    isValid = false;
  } else {
    showError("consent", "");
  }

  return isValid;
}

$(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault(); // stay on the page

    // jQuery hide(): remove any old success message first
    $("#form-success").hide();

    if (validateForm()) {
      // jQuery fadeIn(): show the thank-you message
      $("#form-success").fadeIn(400);
      this.reset();
    }
  });
});
