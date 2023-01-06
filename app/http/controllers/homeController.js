import { Testimonials } from "../../models/testimonial.js";
function homeController() {
  // Factory Function (Function returning an Object)
  return {
    async index(req, res) {
      const review = await Testimonials.find();
      return res.render("home");
    },
  };
}

export { homeController };
