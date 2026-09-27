// Menu page: show the dishes, keep track of the order, and confirm it.

var order = {}; // what the customer picked: dish id -> quantity, e.g. { "kolo-mee": 2 }
var barOpen = false; // is the order list open?

// ---------- JavaScript function 1: calculate the total ----------
// Loops over the order and adds up how many items there are and what they cost.
function calculateTotal() {
  var count = 0;
  var total = 0;

  for (var i = 0; i < DISHES.length; i++) {
    var dish = DISHES[i];
    var qty = order[dish.id] || 0;
    count = count + qty;
    total = total + qty * dish.price;
  }

  return { count: count, total: total };
}

// ---------- JavaScript function 2: show the order confirmation ----------
// Writes a summary into the confirmation box, shows it, then empties the order.
function showOrderConfirmation() {
  var summary = calculateTotal();
  if (summary.count === 0) return;

  var itemWord = summary.count === 1 ? "item" : "items";
  $("#confirm-text").text(
    "We've received your order of " + summary.count + " " + itemWord +
    ". Your total is " + formatRM(summary.total) +
    ". Please pay when you collect it at 12 Carpenter Street."
  );

  // jQuery fadeIn(): the confirmation box fades onto the screen
  $("#order-confirm").fadeIn(300);
  $("#confirm-close").focus();

  order = {};
  barOpen = false;
  renderAll();
}

// ---------- Drawing the page ----------

function findDish(id) {
  for (var i = 0; i < DISHES.length; i++) {
    if (DISHES[i].id === id) return DISHES[i];
  }
  return null;
}

function buildCard(dish) {
  var $card = $(
    '<div class="col-sm-6 col-lg-4">' +
      '<article class="dish-card">' +
        '<div class="dish-card-media">' +
          '<img width="960" height="720" loading="lazy">' +
        "</div>" +
        '<div class="dish-card-body">' +
          '<div class="dish-card-head">' +
            "<h2></h2>" +
            '<span class="dish-price fs-5"></span>' +
          "</div>" +
          '<p class="dish-card-desc"></p>' +
          '<div class="mt-3">' +
            '<div class="dish-controls"></div>' +
            '<div class="flash-slot"><span class="added-flash" aria-hidden="true">Added ✓</span></div>' +
          "</div>" +
        "</div>" +
      "</article>" +
    "</div>"
  );

  $card.find("article").attr("data-id", dish.id);
  $card.find("img").attr({ src: dish.image, alt: dish.alt });
  $card.find("h2").text(displayName(dish));
  $card.find(".dish-price").text(formatRM(dish.price));
  $card.find(".dish-card-desc").text(dish.description);

  if (dish.tag) {
    $('<span class="dish-card-tag"></span>')
      .text(dish.tag)
      .appendTo($card.find(".dish-card-media"));
  }

  return $card;
}

// The "Order" button, or the − / + stepper once the dish is in the order.
function renderControls(dish) {
  var qty = order[dish.id] || 0;
  var $controls = $('#menu-grid article[data-id="' + dish.id + '"] .dish-controls');

  if (qty === 0) {
    $controls.html(
      '<button type="button" class="btn-brand w-100 py-3" data-action="add">Order</button>'
    );
    return;
  }

  $controls.html(
    '<div class="qty-stepper">' +
      '<button type="button" class="qty-btn qty-btn-light" data-action="remove">−</button>' +
      '<span class="small fw-semibold"></span>' +
      '<button type="button" class="qty-btn qty-btn-dark" data-action="add">+</button>' +
    "</div>"
  );
  $controls.find("span").text(qty + " in your order");
  $controls.find('[data-action="remove"]').attr("aria-label", "Remove one " + dish.name);
  $controls.find('[data-action="add"]').attr("aria-label", "Add one " + dish.name);
}

// The bar at the bottom of the screen and the list above it.
function renderBar() {
  var summary = calculateTotal();
  var $list = $("#order-list");
  var $toggle = $("#order-toggle");

  $list.empty();
  $.each(DISHES, function (_, dish) {
    var qty = order[dish.id];
    if (!qty) return;

    var $li = $(
      "<li>" +
        '<img width="96" height="72" alt="">' +
        '<div class="order-item-info">' +
          '<p class="order-item-name"></p>' +
          '<p class="small text-muted-brand order-item-each"></p>' +
        "</div>" +
        '<div class="order-item-qty">' +
          '<button type="button" class="qty-btn-sm" data-action="remove">−</button>' +
          "<span></span>" +
          '<button type="button" class="qty-btn-sm" data-action="add">+</button>' +
        "</div>" +
        '<span class="order-item-total"></span>' +
      "</li>"
    );
    $li.attr("data-id", dish.id);
    $li.find("img").attr("src", dish.image);
    $li.find(".order-item-name").text(displayName(dish));
    $li.find(".order-item-each").text(formatRM(dish.price) + " each");
    $li.find(".order-item-qty span").text(qty);
    $li.find('[data-action="remove"]').attr("aria-label", "Remove one " + dish.name);
    $li.find('[data-action="add"]').attr("aria-label", "Add one " + dish.name);
    $li.find(".order-item-total").text(formatRM(dish.price * qty));
    $list.append($li);
  });
  $list.append(
    '<li class="order-actions-row">' +
      '<button type="button" class="order-clear" data-action="clear">Clear order</button>' +
      '<button type="button" class="btn-brand" data-action="place">Place order</button>' +
    "</li>"
  );

  // jQuery slideDown() / slideUp(): open or close the order list
  var shouldShow = barOpen && summary.count > 0;
  if (shouldShow && !$list.is(":visible")) {
    $list.slideDown(250);
  } else if (!shouldShow && $list.is(":visible")) {
    $list.slideUp(250);
  }

  $toggle.toggleClass("has-items", summary.count > 0);
  $toggle.attr("aria-expanded", shouldShow ? "true" : "false");
  if (summary.count > 0) {
    var itemWord = summary.count === 1 ? "item" : "items";
    $toggle.find(".order-toggle-label").text(
      summary.count + " " + itemWord + " · " + formatRM(summary.total)
    );
    $toggle.find(".order-toggle-hint").text(barOpen ? "Hide ▾" : "Show ▴").show();
  } else {
    $toggle.find(".order-toggle-label").text("Your order is empty — tap Order on a dish");
    $toggle.find(".order-toggle-hint").hide();
  }
}

function renderAll() {
  $.each(DISHES, function (_, dish) {
    renderControls(dish);
  });
  renderBar();
}

// ---------- Changing the order ----------

function changeQty(id, delta) {
  var next = (order[id] || 0) + delta;
  if (next <= 0) {
    delete order[id];
  } else {
    order[id] = next;
  }
  renderControls(findDish(id));
  renderBar();
}

function addDish(id) {
  barOpen = true;
  changeQty(id, 1);

  // jQuery fadeIn() then fadeOut(): the "Added ✓" note appears briefly
  $('#menu-grid article[data-id="' + id + '"] .added-flash')
    .stop(true, true)
    .fadeIn(200)
    .delay(1000)
    .fadeOut(400);
}

// ---------- Events (jQuery click) ----------

$(function () {
  // Draw every dish card
  $.each(DISHES, function (_, dish) {
    $("#menu-grid").append(buildCard(dish));
  });
  renderAll();

  // Order / + / − buttons on the dish cards
  $("#menu-grid").on("click", "[data-action]", function () {
    var id = $(this).closest("article").attr("data-id");
    if ($(this).attr("data-action") === "add") {
      addDish(id);
    } else {
      changeQty(id, -1);
    }
  });

  // Buttons inside the order list
  $("#order-list").on("click", "[data-action]", function () {
    var action = $(this).attr("data-action");
    var id = $(this).closest("li").attr("data-id");

    if (action === "place") {
      showOrderConfirmation();
    } else if (action === "clear") {
      order = {};
      renderAll();
    } else if (action === "add") {
      changeQty(id, 1);
    } else {
      changeQty(id, -1);
    }
  });

  // The bar at the bottom opens and closes the list
  $("#order-toggle").click(function () {
    barOpen = !barOpen;
    renderBar();
  });

  // jQuery fadeOut(): close the confirmation box
  $("#confirm-close").click(function () {
    $("#order-confirm").fadeOut(300);
    $("#order-toggle").focus();
  });
});
