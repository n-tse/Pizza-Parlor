// create function to calculate price based on toppings added: Pepperoni, Italian Sausage, Grilled Chicken, Onions, Roasted Red Peppers, Mushrooms
// create function to calculate price based on size selected: small 10", medium 12", large 14", X-large 16"
// allow user can order multiple pizzas (probably need something like addressbook). Would you like to order more? If yes, new form. If no, display total $$ for the order and button to place order

function customerOrder() {
  this.items = {};
}

function Pizza (toppings, size) {
  this.toppings = [];
  this.size = "medium";
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
  const proteins = ["pepperoni", "italian sausage", "grilled chicken", "ham", "bacon", "philly steak"];
  this.toppings.forEach(function(topping) {
    if (proteins.includes(this.topping)) {
      this.price += 0.50;
    } else {
      this.price += 0.25;
    }
  });
}

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    const toppings = $("input#toppings").val();
    const size = $("input#size").val();
    let newOrder = new Pizza(toppings, size);
    customerOrder.addToOrder(newOrder);
    displayOrderDetails(customerOrder);
  });
});


