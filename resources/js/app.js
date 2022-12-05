import axios from "axios";
import Noty from "noty";
const toggleCart = document.querySelector("#toggleCart");
const closePanel = document.querySelector("#closePanel");
const cart = document.querySelector("#cart");
const addToCart = document.querySelectorAll(".add-to-cart");
const cartCounter = document.querySelector("#cartCounter");

// Cart Panel
toggleCart.addEventListener("click", () => {
  cart.style.display = "block";
});

closePanel.addEventListener("click", () => {
  cart.style.display = "none";
});

//Update Cart
async function updateCart(tshirt) {
  try {
    const res =await axios.post("/update-cart", tshirt);
    cartCounter.innerText = res.data.totalQty; // Updating Cart Counter

    //Noty Notification
    new Noty({
      type:"success",
      timeout:1000,
      text:"Items added to cart",
      
    }).show()
  } catch (error) {
    new Noty({
      type:"error",
      timeout:1000,
      text:"Something went wrong",
      
    }).show()
  }
}

// Add to Cart
addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let tshirt = JSON.parse(btn.dataset.tshirt);
    updateCart(tshirt);
  });
});
