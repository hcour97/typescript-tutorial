console.log("HELLO");
function product(x, y) {
    return x * y;
}
console.log(product(4, 7));
var btn = document.getElementById("btn");
var input = document.getElementById("username");
btn.addEventListener("click", function () {
    console.log(input.value);
});
