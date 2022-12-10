import axios from 'axios';
import Noty from 'noty';
const cart = document.querySelector('#cart');
const addToCart = document.querySelectorAll('.add-to-cart');
const cartCounter = document.querySelector('#cartCounter');

//Update Cart
async function updateCart(tshirt) {
    try {
        const res = await axios.post('/update-cart', tshirt);
        cartCounter.innerText = res.data.totalQty; // Updating Cart Counter

        //Noty Notification
        new Noty({
            type: 'success',
            timeout: 1000,
            text: 'Items added to cart',
        }).show();
    } catch (error) {
        new Noty({
            type: 'error',
            timeout: 1000,
            text: 'Something went wrong',
        }).show();
    }
}

// Add to Cart
addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let tshirt = JSON.parse(btn.dataset.tshirt);
        updateCart(tshirt);
    });
});
