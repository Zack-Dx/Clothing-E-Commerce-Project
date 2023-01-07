import { Tees } from "../../../../models/products.js";
function tshirtController() {
  return {
    async index(req, res) {
      try {
        const products = await Tees.find();
        res.render("customers/tshirt", { products });
      } catch (error) {
        console.log(error);
      }
    },
  };
}

export { tshirtController };
