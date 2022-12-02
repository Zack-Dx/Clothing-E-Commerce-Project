function cartController() {
  return {
    //Get
    cart(req, res) {
      res.render("purchase/cart");
    },
  };
}

export { cartController };
