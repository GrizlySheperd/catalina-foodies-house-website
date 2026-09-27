// Used on every page: page transitions and the mobile menu.
$(function () {
  // jQuery fadeIn(): the page content fades in when the page opens
  $("main").fadeIn(400);

  // jQuery fadeOut(): the page fades out before moving to another page
  $("a[href$='.html']").click(function (e) {
    var target = $(this).attr("href");

    // Let Ctrl/Shift-click open a new tab as normal
    if (e.ctrlKey || e.metaKey || e.shiftKey) return;

    e.preventDefault();
    $("main").fadeOut(200, function () {
      window.location.href = target;
    });
  });

  // jQuery slideDown() / slideUp(): the ☰ button opens and closes the phone menu
  $("#menu-btn").click(function () {
    var $menu = $("#mobile-menu");

    if ($menu.is(":visible")) {
      $menu.slideUp(200);
      $(this).attr("aria-expanded", "false").text("☰");
    } else {
      $menu.slideDown(200);
      $(this).attr("aria-expanded", "true").text("✕");
    }
  });
});

// If the phone's Back button brings back a page that had faded out, show it again
window.addEventListener("pageshow", function (e) {
  if (e.persisted) {
    $("main").show();
  }
});
