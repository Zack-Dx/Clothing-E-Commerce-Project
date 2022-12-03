import { Tees } from "../../../models/tshirt.js";
function productController() {
  return {
    index(req, res) {
      res.render("purchase/products", { query: req.query.tee });
    },
  };
}

export { productController };
