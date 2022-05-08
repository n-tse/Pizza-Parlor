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

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price;
}

Pizza.prototype.priceBySize = function() {
  if (this.size === "10\" Small") {
    this.price = 4;
  } else if (this.size === "12\" Medium") {
    this.price = 5;
  } else if (this.size === "14\" Large") {
    this.price = 6;
  } else if (this.size === "16\" X-Large") {
    this.price = 7;
  }
  return this.price;
}

Pizza.prototype.priceByToppings = function() {
  const proteins = ["pepperoni", "sausage", "chicken", "ham", "bacon", "steak"];
  let toppingsCost = 0;
  // let that = this;
  this.toppings.forEach(function(topping) {
    // console.log(that.price);
    console.log("A: "+ toppingsCost);
    if (proteins.includes(topping)) {
      // that.price += 0.50;
      toppingsCost += 0.5;
      console.log("B: "+toppingsCost);
    } else {
      // that.price += 0.25;
      toppingsCost += 0.25;
      console.log("C: "+toppingsCost);
    }
    console.log("D: "+toppingsCost);
    // console.log("a2" + that.price);
  });
  return toppingsCost;
}

Pizza.prototype.listToppingsOrdered = function() {
  let htmlForToppingsOrdered = "";
  if (this.toppings.length === 0) {
    htmlForToppingsOrdered += "no toppings"
  } else {
    for (let i = 0; i < this.toppings.length; i++) {
      htmlForToppingsOrdered += this.toppings[i];
      if (i < this.toppings.length - 1) {
        htmlForToppingsOrdered += ", ";
      }
    }
  }
  return htmlForToppingsOrdered;
}

let customerOrder = new CustomerOrder();

function displayOrderDetails(orderToDisplay) {
  let orderList = $("ul#userOrders");
  let htmlForOrderList = "";
  orderToDisplay.items.forEach(function(item) {
    htmlForOrderList += "<li>" + item.size + " size pizza with " + item.listToppingsOrdered() + ". Price: $" + item.price.toFixed(2) + "</li>"
  });
  orderList.html(htmlForOrderList);
}

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    let toppings = [];
    $("input[name='toppings']:checked").each(function() {
      toppings.push($(this).val());
    });
    const size = $("input:radio[name=size]:checked").val();

    let newOrder = new Pizza(toppings, size);
    // console.log("my debugs " + newOrder.toppings);
    // console.log(typeof newOrder.toppings);
    // newOrder.price = newOrder.priceBySize();
    newOrder.price = newOrder.priceBySize() + newOrder.priceByToppings();
    // console.log(newOrder.priceBySize());
    // console.log(newOrder.priceByToppings());
    console.log(newOrder.price);
    customerOrder.addToOrder(newOrder);
    displayOrderDetails(customerOrder);
    $("#output").show();
  });
});


