const toggleCart = document.querySelector("#toggleCart");
const closePanel = document.querySelector("#closePanel");
const cart = document.querySelector("#cart");



// Cart Panel
toggleCart.addEventListener("click", () => {
  cart.style.display = "block";
});

closePanel.addEventListener("click", () => {
  cart.style.display = "none";
});
