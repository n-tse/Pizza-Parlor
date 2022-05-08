// create function to calculate price based on toppings added: Pepperoni, Italian Sausage, Grilled Chicken, Onions, Roasted Red Peppers, Mushrooms
// create function to calculate price based on size selected: small 10", medium 12", large 14", X-large 16"
// allow user can order multiple pizzas (probably need something like addressbook). Would you like to order more? If yes, new form. If no, display total $$ for the order and button to place order

function CustomerOrder() {
  this.items = [];
  this.totalOrderPrice = 0;
}

CustomerOrder.prototype.addToOrder = function(newOrder) {
  this.items.push(newOrder);
}

CustomerOrder.prototype.calculateTotalPrice = function() {
  this.items.forEach(function(item) {
    totalOrderPrice += item.price;
  });
}

function Pizza (size) {
  this.toppings = [];
  this.size = size;
  this.price = 5;
}

Pizza.prototype.priceBySize = function() {
  if (this.size === "small") {
    this.price === 4;
  } else if (this.size === "large") {
    this.price === 6;
  } else if (this.size === "x-large") {
    this.price === 7;
  }
  return this.price;
}

Pizza.prototype.priceByToppings = function() {
  const proteins = ["pepperoni", "sausage", "chicken", "ham", "bacon", "steak"];
  this.toppings.forEach(function(topping) {
    if (proteins.includes(this.topping)) {
      this.price += 0.50;
    } else {
      this.price += 0.25;
    }
  });
}

Pizza.prototype.listToppingsOrdered = function() {
  let htmlForToppingsOrdered = "";
  for (let i = 0; i < this.toppings.length; i++) {
    htmlForToppingsOrdered += this.toppings[i];
    if (i < this.toppings.length - 1) {
      htmlForToppingsOrdered += ", ";
    }
  }
  return htmlForToppingsOrdered;
}

let customerOrder = new CustomerOrder();

function displayOrderDetails(orderToDisplay) {
  let orderList = $("ul#userOrders");
  let htmlForOrderList = "";
  orderToDisplay.items.forEach(function(item) {
    htmlForOrderList += "<li>" + item.size + " size pizza with" + item.listToppingsOrdered() + ". Price: " + item.price + "</li>"
  });
  orderList.html(htmlForOrderList);
  // orderList.html("<li> test </li>");
}

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    const toppings = $("input#toppings").val();
    const size = $("input:radio[name=size]:checked").val();
    console.log("my debugs" + toppings + " " + size);
    let newOrder = new Pizza(size);
    newOrder.price = newOrder.priceBySize() + newOrder.priceByToppings();
    customerOrder.addToOrder(newOrder);
    displayOrderDetails(customerOrder);
    // $("#orders").html(displayOrderDetails(customerOrder))
    $("#output").show();
  });
});


