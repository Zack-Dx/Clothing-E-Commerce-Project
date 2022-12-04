const toggleCart = document.querySelector("#toggleCart");
const closePanel = document.querySelector("#closePanel");
const cart = document.querySelector("#cart");
const addToCart = document.querySelectorAll(".add-to-cart");


// Cart Panel
toggleCart.addEventListener("click", () => {
  cart.style.display = "block";
});

closePanel.addEventListener("click", () => {
  cart.style.display = "none";
});

// Add to Cart
addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let tshirt = JSON.parse(btn.dataset.tshirt)
    console.log(tshirt)
   
  });
});


