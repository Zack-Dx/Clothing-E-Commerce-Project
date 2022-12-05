function cartController() {
  return {
    //Get
    cart(req, res) {
      res.render("purchase/cart");
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
  };
}

export { cartController };
