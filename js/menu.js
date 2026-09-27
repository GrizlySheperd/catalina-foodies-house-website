// Menu page

var orderItems = []; // every dish the customer orders, e.g. { name: "Kolo Mee", price: 7.5 }

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

// JavaScript function 2: show the order confirmation
function showOrderConfirmation() {
  var message = "Thank you for your order! You ordered " + orderItems.length +
    " item(s). Total: RM " + calculateTotal().toFixed(2) +
    ". (This is a school project, so no real order was sent.)";

  $("#confirmMsg").text(message).fadeIn();  // jQuery fadeIn()

  // Empty the order and close the order box
  orderItems = [];
  updateOrderBox();
  $("#orderBox").slideUp();  // jQuery slideUp()
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
    showOrderConfirmation();
  });

  // "Clear" button
  $("#clearBtn").click(function () {
    orderItems = [];
    updateOrderBox();
    $("#orderBox").slideUp();
  });

});
