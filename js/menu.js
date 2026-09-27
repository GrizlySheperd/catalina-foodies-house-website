// Menu page: render dishes and manage the order bar.
$(function () {
  var order = {}; // dish id -> quantity
  var barOpen = false;
  var flashTimers = {};

  var $grid = $("#menu-grid");
  var $list = $("#order-list");
  var $toggle = $("#order-toggle");

  function findDish(id) {
    for (var i = 0; i < DISHES.length; i++) {
      if (DISHES[i].id === id) return DISHES[i];
    }
    return null;
  }

  function orderItems() {
    var items = [];
    $.each(DISHES, function (_, dish) {
      if (order[dish.id]) items.push({ dish: dish, qty: order[dish.id] });
    });
    return items;
  }

  // ---------- Dish cards ----------

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
              '<span class="added-flash" aria-hidden="true">Added ✓</span>' +
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

  function renderControls(dish) {
    var qty = order[dish.id] || 0;
    var $controls = $grid.find('article[data-id="' + dish.id + '"] .dish-controls');

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

  // ---------- Order bar ----------

  function renderBar() {
    var items = orderItems();
    var count = 0;
    var total = 0;

    $.each(items, function (_, item) {
      count += item.qty;
      total += item.qty * item.dish.price;
    });

    $list.empty();
    $.each(items, function (_, item) {
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
            '<button type="button" class="qty-btn-sm" data-action="add-silent">+</button>' +
          "</div>" +
          '<span class="order-item-total"></span>' +
        "</li>"
      );
      $li.attr("data-id", item.dish.id);
      $li.find("img").attr("src", item.dish.image);
      $li.find(".order-item-name").text(displayName(item.dish));
      $li.find(".order-item-each").text(formatRM(item.dish.price) + " each");
      $li.find(".order-item-qty span").text(item.qty);
      $li.find('[data-action="remove"]').attr("aria-label", "Remove one " + item.dish.name);
      $li.find('[data-action="add-silent"]').attr("aria-label", "Add one " + item.dish.name);
      $li.find(".order-item-total").text(formatRM(item.dish.price * item.qty));
      $list.append($li);
    });
    $list.append(
      '<li class="order-clear-row">' +
        '<button type="button" class="order-clear" data-action="clear">Clear order</button>' +
      "</li>"
    );
    $list.prop("hidden", !(barOpen && count > 0));

    $toggle.toggleClass("has-items", count > 0);
    $toggle.attr("aria-expanded", barOpen && count > 0 ? "true" : "false");
    if (count > 0) {
      $toggle.find(".order-toggle-label").text(
        count + " " + (count === 1 ? "item" : "items") + " · " + formatRM(total)
      );
      $toggle.find(".order-toggle-hint").text(barOpen ? "Hide ▾" : "Show ▴").prop("hidden", false);
    } else {
      $toggle.find(".order-toggle-label").text("Your order is empty — tap Order on a dish");
      $toggle.find(".order-toggle-hint").prop("hidden", true);
    }
  }

  // ---------- Actions ----------

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

    var $flash = $grid.find('article[data-id="' + id + '"] .added-flash');
    $flash.addClass("show");
    clearTimeout(flashTimers[id]);
    flashTimers[id] = setTimeout(function () {
      $flash.removeClass("show");
    }, 1400);
  }

  $grid.on("click", "[data-action]", function () {
    var id = $(this).closest("article").data("id");
    if ($(this).data("action") === "add") {
      addDish(id);
    } else {
      changeQty(id, -1);
    }
  });

  $list.on("click", "[data-action]", function () {
    var action = $(this).data("action");
    var id = $(this).closest("li").data("id");

    if (action === "clear") {
      order = {};
      $.each(DISHES, function (_, dish) {
        renderControls(dish);
      });
      renderBar();
    } else if (action === "add-silent") {
      changeQty(id, 1);
    } else {
      changeQty(id, -1);
    }
  });

  $toggle.on("click", function () {
    barOpen = !barOpen;
    renderBar();
  });

  // ---------- Initial render ----------

  $.each(DISHES, function (_, dish) {
    $grid.append(buildCard(dish));
    renderControls(dish);
  });
  renderBar();
});
