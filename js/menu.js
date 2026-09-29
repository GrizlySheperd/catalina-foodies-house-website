// Menu page

var orderItems = []; // every item the customer orders, e.g. { name: "Butter Croissant", price: 4.5 }

// JavaScript function 1: add up the price of everything in the order
function calculateTotal() {
  var total = 0;
  for (var i = 0; i < orderItems.length; i++) {
    total = total + orderItems[i].price;
  }
  return total;
}

// Show the order list, number of items and total on the page
function updateOrderBox() {
  $("#orderList").empty();
  for (var i = 0; i < orderItems.length; i++) {
    $("#orderList").append("<li>" + orderItems[i].name + " - RM " + orderItems[i].price.toFixed(2) + "</li>");
  }
  $("#itemCount").text(orderItems.length);
  $("#total").text(calculateTotal().toFixed(2));
}

// Check that an order type is ticked (and an address is typed for COD)
function validateOrderDetails() {
  var valid = true;
  var orderType = $("input[name='orderType']:checked").val();
  var address = $.trim($("#address").val());

  $("#orderTypeError").text("");
  $("#addressError").text("");

  if (!orderType) {
    $("#orderTypeError").text("Please choose Cash on Delivery or Pickup.");
    valid = false;
  } else if (orderType === "Cash on Delivery" && address.length < 10) {
    $("#addressError").text("Please enter your full delivery address.");
    valid = false;
  }
  return valid;
}

// JavaScript function 2: show the order confirmation
function showOrderConfirmation() {
  var orderType = $("input[name='orderType']:checked").val();
  var message = "Thank you for your order! You ordered " + orderItems.length +
    " item(s). Total: RM " + calculateTotal().toFixed(2) + ". ";

  if (orderType === "Cash on Delivery") {
    message += "Cash on Delivery to: " + $.trim($("#address").val()) + ". ";
  } else {
    message += "Please pick it up at our bakery. ";
  }
  message += "(This is a school project, so no real order was sent.)";

  $("#confirmMsg").text(message).fadeIn();  // jQuery fadeIn()

  // Empty the order, reset the form and close the order box
  orderItems = [];
  updateOrderBox();
  resetOrderDetails();
  $("#orderBox").slideUp();  // jQuery slideUp()
}

// Untick the options and clear the address
function resetOrderDetails() {
  $("input[name='orderType']").prop("checked", false);
  $("#address").val("");
  $("#addressBox").hide();
  $("#orderTypeError").text("");
  $("#addressError").text("");
}

$(document).ready(function () {

  // When an "Order" button is clicked
  $(".order-btn").click(function () {
    var name = $(this).attr("data-name");
    var price = parseFloat($(this).attr("data-price"));

    orderItems.push({ name: name, price: price });
    updateOrderBox();

    $("#confirmMsg").hide();     // jQuery hide(): remove the old confirmation
    $("#orderBox").slideDown();  // jQuery slideDown(): open the order box

    // jQuery fadeIn() and fadeOut(): "Added!" appears for a moment
    $(this).next(".added-msg").fadeIn(200).delay(800).fadeOut(400);
  });

  // "Place Order" button
  $("#placeOrderBtn").click(function () {
    if (validateOrderDetails()) {
      showOrderConfirmation();
    }
  });

  // Only ask for an address when Cash on Delivery is ticked
  $("input[name='orderType']").change(function () {
    $("#orderTypeError").text("");
    if ($(this).val() === "Cash on Delivery") {
      $("#addressBox").slideDown();
    } else {
      $("#addressBox").slideUp();
      $("#addressError").text("");
    }
  });

  // "Clear" button
  $("#clearBtn").click(function () {
    orderItems = [];
    updateOrderBox();
    resetOrderDetails();
    $("#orderBox").slideUp();
  });

});
