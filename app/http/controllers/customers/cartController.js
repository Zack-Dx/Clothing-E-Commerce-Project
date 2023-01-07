function cartController() {
  return {
    //Get
    cart(req, res) {
      res.render("purchase/cart", { name: "Animesh" });
    },

    //POST
    update(req, res) {
      // For the first time
      if (!req.session.cart) {
        req.session.cart = {
          items: {},
          totalQty: 0,
          totalPrice: 0,
        };
      }

      // If item doen't exist in cart
      let cart = req.session.cart;
      if (!cart.items[req.body._id]) {
        cart.items[req.body._id] = {
          item: req.body,
          qty: 1,
        };
        (cart.totalQty = cart.totalQty + 1),
          (cart.totalPrice = cart.totalPrice + req.body.price);
      } else {
        cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
        (cart.totalQty = cart.totalQty + 1),
          (cart.totalPrice = cart.totalPrice + req.body.price);
      }

      return res.json({ totalQty: req.session.cart.totalQty });
    },

    // Clear Cart
    clear(req, res) {
      delete req.session.cart;
      return res.json({ data: "Cart deleted successfully" });
    },

    // To Increment quantity of Product
    add(req, res) {
      let cart = req.session.cart;
      cart.items[req.body.item._id] = {
        item: req.body.item,
        qty: req.body.qty + 1,
      };
      cart.totalQty = cart.totalQty + 1;
      cart.totalPrice = cart.totalPrice + req.body.item.price;
      return res.json({ cart: req.session.cart });
    },

    // To decrement quanity of Product
    async sub(req, res) {
      let cart = req.session.cart;
      // If the cart counter reaches below 1
      if (cart.items[req.body.item._id].qty <= 1) {
        delete cart.items[req.body.item._id];
        cart.totalQty = cart.totalQty - 1;
        cart.totalPrice = cart.totalPrice - req.body.item.price;

        // If there's no item left in cart
        if (cart.totalQty === 0) {
          delete req.session.cart;
        }
        return res.json({ data: req.body });
      } else {
        cart.items[req.body.item._id] = {
          item: req.body.item,
          qty: req.body.qty - 1,
        };
        cart.totalQty = cart.totalQty - 1;
        cart.totalPrice = cart.totalPrice - req.body.item.price;
        return res.json({ data: req.body });
      }
    },
  };
}

export { cartController };
