import { Tees } from "../../../../models/tshirt.js";
function tshirtController() {
  return {
    async index(req, res) {
      try {
        const products = await Tees.find();

        res.render("customers/tshirt", { products: products });
      } catch (error) {
        console.log(error);
      }
    },
  };
}

export { tshirtController };
