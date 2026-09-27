// Runs on every page
$(document).ready(function () {

  // jQuery hide() + fadeIn(): the page fades in when it opens
  $("main").hide().fadeIn(600);

  // jQuery slideToggle(): "Read our story" button on the Home page
  $("#aboutBtn").click(function () {
    $("#aboutText").slideToggle();
  });

});
