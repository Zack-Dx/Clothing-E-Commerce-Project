// import { Tees } from "../../../models/products.js";
function productController() {
  return {
    index(req, res) {
      res.render("purchase/products", { query: req.query.product });
    },
  };
}

export { productController };
