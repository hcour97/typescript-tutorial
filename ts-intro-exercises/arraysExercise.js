// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return "$".concat(total);
};
var shoppingBag = [
    { name: "coffee mug", price: 11.50 },
    { name: "notebook", price: 5.75 },
    { name: "pen set", price: 8.25 }
];
var totalPrice = getTotal(shoppingBag);
console.log(totalPrice, "should be $25.50");
