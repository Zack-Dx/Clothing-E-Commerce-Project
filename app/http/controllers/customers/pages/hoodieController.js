import { Hoodies } from "../../../../models/products.js";
function hoodieController() {
  return {
    async index(req, res) {
      const hoodies = await Hoodies.find();

      res.render("customers/hoodies", { hoodies: hoodies });
    },
  };
}

export { hoodieController };
