function productController() {
  return {
    index(req, res) {
      res.render("purchase/products");
    },
  };
}

export { productController };
