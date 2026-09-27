// Home page: render the first three dishes as featured cards.
$(function () {
  var $featured = $("#featured-dishes");

  $.each(DISHES.slice(0, 3), function (_, dish) {
    var $card = $(
      '<div class="col-sm-6 col-lg-4">' +
        '<a href="menu.html" class="dish-card">' +
          '<div class="dish-card-media">' +
            '<img width="960" height="720" loading="lazy">' +
          "</div>" +
          '<div class="dish-card-body">' +
            '<div class="dish-card-head">' +
              "<h3></h3>" +
              '<span class="dish-price fs-5"></span>' +
            "</div>" +
            '<p class="dish-card-desc"></p>' +
          "</div>" +
        "</a>" +
      "</div>"
    );

    $card.find("img").attr({ src: dish.image, alt: dish.alt });
    $card.find("h3").text(displayName(dish));
    $card.find(".dish-price").text(formatRM(dish.price));
    $card.find(".dish-card-desc").text(dish.description);

    $featured.append($card);
  });
});
