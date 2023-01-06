import { Testimonials } from "../../models/testimonial.js";
function contactController() {
  // Factory Function (Function returning an Object)
  return {
    // Contact US
    async contact(req, res) {
      return res.render("contact");
    },

    // Testimonials
    async reviews(req, res) {
      try {
        const testimonial = await new Testimonials({
          name: req.params.name,
          description: req.body.review,
        });
        await testimonial.save();
        return res.redirect("/");
      } catch (error) {
        return res.redirect("/");
      }
    },
  };
}

export { contactController };
