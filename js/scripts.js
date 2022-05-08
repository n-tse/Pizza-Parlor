function CustomerOrder() {
  this.items = [];
  this.totalOrderPrice;
}

CustomerOrder.prototype.addToOrder = function(newOrder) {
  this.items.push(newOrder);
}

CustomerOrder.prototype.calculateTotalPrice = function() {
  let runningTotal = 0;
  this.items.forEach(function(item) {
    runningTotal += item.price;
  });
  return runningTotal;
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
  this.toppings.forEach(function(topping) {
    if (proteins.includes(topping)) {
      toppingsCost += 0.5;
    } else {
      toppingsCost += 0.25;
    }
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
    newOrder.price = newOrder.priceBySize() + newOrder.priceByToppings();
    customerOrder.addToOrder(newOrder);
    displayOrderDetails(customerOrder);
    $("#orderTotal").html(customerOrder.calculateTotalPrice());
    $("#output").show();
  });
});


