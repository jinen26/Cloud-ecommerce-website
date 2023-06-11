var increment = document.getElementsByClassName("counter");
var btn = document.getElementsByClassName("checkout");
console.log(btn);
var a = 0;

btn[0].addEventListener("click", function () {
  a += 1;
  console.log(a);
  increment[0].innerHTML = a;
  alert("A tree will be planted in your region soon!");
  console.log(increment.innerHTML);
});
//total
var price = document.getElementsByClassName("counter");

const product = {};

var carts = document.querySelectorAll(".card");
var s = 0;
for (let i = 0; i < carts.length; i++) {
  carts[i].querySelector("button").addEventListener("click", function (e) {
    product.name = e.target.parentNode.querySelector("h3").innerText;
    product.price = e.target.parentNode.querySelector("h4").innerText;
    product.img = e.target.parentNode.querySelector("img").src;
    s = s + parseInt(product.price);
    console.log(s);
    addToCart(product);
    alert("you've just added an element to your cart");
    e.preventDefault();
  });
}

const productList = [];

// carts[2].querySelector("button").addEventListener("click", function () {
//     addToCart(product)
// })
function addToCart(product) {
  productList.push({ ...product });
  console.log(productList);
  localStorage.setItem("product", JSON.stringify(productList));
}
