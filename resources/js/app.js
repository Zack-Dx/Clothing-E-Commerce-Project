import axios from "axios";
import Noty from "noty";
import moment from "moment";
import { initAdmin } from "./admin.js";

// Cart Section
const cart = document.querySelector("#cart");
const addToCart = document.querySelectorAll(".add-to-cart");
const cartCounter = document.querySelector("#cartCounter");
const clearCart = document.querySelector("#clear-cart");
const increment = document.querySelectorAll("#increment");
const decrement = document.querySelectorAll("#decrement");

// Increment Cart Quantity
increment.forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      const res = await axios.post(
        "/increment-cart",
        JSON.parse(btn.dataset.product)
      );
      window.location.reload();
    } catch (error) {
      new Noty({
        type: "error",
        timeout: 1000,
        text: "Something went wrong",
      }).show();
    }
  });
});

// Decrement Cart Quantity
decrement.forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      const res = await axios.post(
        "/decrement-cart",
        JSON.parse(btn.dataset.product)
      );
      console.log(res);
      window.location.reload();
    } catch (error) {
      new Noty({
        type: "error",
        timeout: 1000,
        text: "Something went wrong",
      }).show();
    }
  });
});

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

// Clear Cart

if (clearCart) {
  clearCart.addEventListener("click", async () => {
    try {
      const res = await axios.post("/clear-cart");
      window.location.reload();
    } catch (error) {
      new Noty({
        type: "error",
        timeout: 1000,
        text: "Something went wrong",
      }).show();
    }
  });
}

//Removing Alert Message after Order Place
const alertMsg = document.querySelector("#success-alert");
if (alertMsg) {
  setTimeout(() => {
    alertMsg.remove();
  }, 2000);
}
// To run Admin Function when only on Admin Page
let adminAreaPath = window.location.pathname;
if (adminAreaPath.includes("admin")) {
  initAdmin();
}

// Order Status (Rendering Order Status)
let statuses = document.querySelectorAll(".status-line");
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
