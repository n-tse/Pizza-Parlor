# _Pizza Parlor_

#### By _**Nick Tse**_

#### _A pizza website where a user can choose one or more individual toppings and a size to order a pizza and see the final cost._

## Technologies Used

* _HTML_
* _CSS_
* _BootStrap_
* _JavaScript_
* _jQuery_

## Description

_This [webpage](https://n-tse.github.io/Pizza-Parlor/) is a web app that allows a user to build their own pizza by selecting a size and any number of toppings. Then, the page will show the user how much the total for their order is, as well as the details for each individual pizza they ordered._

## Setup/Installation Requirements

* _Click on this [webpage](https://n-tse.github.io/Pizza-Parlor/)_
* _Build a pizza by completing the form shown, and click "Add To Order" to view the details of your order_
* _OR_
* _Clone the repository to your device_
* _Open the newly cloned 'pizza-parlor' directory_
* _Click on index.html_
* _Build a pizza by completing the form shown, and click "Add To Order" to view the details of your order_

## Known Bugs

* _No known bugs_

## License

_MIT_

Copyright (c) _2022_ _Nick Tse_

## TESTS

Describe: displayOrderDetails()

Test: "It should display the details of the user's order"
Code:
Input: Medium 12"
displayOrderDetails(customerOrder);
Expected output: 5

Test: "It should display the details of the user's order"
Code:
Input: Medium 12"
displayOrderDetails(customerOrder);
Expected output: test

Test: "It should display the total price of the user's order"
Code:
Input: X-Large 16"
displayOrderDetails(customerOrder);
Expected output: 7

Describe: priceByToppings()

Test: "It should add to the total price based on toppings selected by the user"
Code:
Input: Medium 12", Pepperoni
newOrder.priceByToppings();
Expected output: 5.5

Describe: calculateTotalPrice()

Test: "It should take the price for each pizza ordered and add them all up to return the total price for the entire order"
Code:
Input: Medium 12", Italian Sausage
Input: X-Large 16", Pepperoni, Grilled Chicken, Bacon
customerOrder.calculateTotalPrice();
Expected output: 14