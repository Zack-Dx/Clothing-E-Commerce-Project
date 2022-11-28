function cartController() {
  return {
    //Get
    cart(req, res) {
      res.render("customers/cart");
    },
  };
}


export {cartController}