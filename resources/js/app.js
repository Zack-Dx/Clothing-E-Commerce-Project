import axios from "axios";
import Noty from "noty";
import moment from "moment";
import { initAdmin } from "./admin.js";
const cart = document.querySelector("#cart");
const addToCart = document.querySelectorAll(".add-to-cart");
const cartCounter = document.querySelector("#cartCounter");

//Update Cart
async function updateCart(tshirt) {
  try {
    const res = await axios.post("/update-cart", tshirt);
    cartCounter.innerText = res.data.totalQty; // Updating Cart Counter

    //Noty Notification
    new Noty({
      type: "success",
      timeout: 1000,
      text: "Items added to cart",
    }).show();
  } catch (error) {
    new Noty({
      type: "error",
      timeout: 1000,
      text: "Something went wrong",
    }).show();
  }
}

// Add to Cart
addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let tshirt = JSON.parse(btn.dataset.tshirt);
    updateCart(tshirt);
  });
});

//Removing Alert Message after Order Place
const alertMsg = document.querySelector("#success-alert");
if (alertMsg) {
  setTimeout(() => {
    alertMsg.remove();
  }, 2000);
}
initAdmin();

// Order Status (Rendering Order Status)
let statuses = document.querySelectorAll(".status-line");
console.log(statuses);
let hiddenInput = document.querySelector("#hiddenInput");
let order = hiddenInput ? hiddenInput.value : null;
order = JSON.parse(order);

// Time
let time = document.createElement("small");

function updateStatus(order) {
  let stepCompleted = true;
  statuses.forEach((status) => {
    let dataProp = status.dataset.status;
    if (stepCompleted) {
      status.classList.add("step-completed");
    }
    if (dataProp === order.status) {
      stepCompleted = false;
      time.innerText = moment(order.updatedAt).format("hh:mm A");
      status.appendChild(time);
      if (status.nextElementSibling) {
        status.nextElementSibling.classList.add("current");
      }
    }
  });
}

updateStatus(order);
