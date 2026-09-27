// Contact page: validate the form and show a thank-you note.
// There is no backend, so a valid submission only clears the form.
$(function () {
  var $form = $("#contact-form");
  var $success = $("#form-success");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(field, message) {
    var $error = $("#" + field + "-error");
    var $input = $("#" + field);

    $error.text(message || "").prop("hidden", !message);
    $input.attr("aria-invalid", message ? "true" : "false");
  }

  $form.on("submit", function (e) {
    e.preventDefault();

    var name = $.trim($("#name").val());
    var email = $.trim($("#email").val());
    var message = $.trim($("#message").val());
    var valid = true;

    if (!name) {
      showError("name", "Please tell us your name.");
      valid = false;
    } else {
      showError("name");
    }

    if (!email) {
      showError("email", "We need an email to reply to.");
      valid = false;
    } else if (!emailPattern.test(email)) {
      showError("email", "That email doesn't look quite right.");
      valid = false;
    } else {
      showError("email");
    }

    if (!message) {
      showError("message", "Don't forget your message!");
      valid = false;
    } else {
      showError("message");
    }

    $success.prop("hidden", !valid);
    if (valid) {
      $form[0].reset();
    }
  });
});
