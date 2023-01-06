import { Contact } from "../../models/contact.js";
import { Testimonials } from "../../models/testimonial.js";
function contactController() {
  return {
    // Contact US
    contact(req, res) {
      return res.render("contact");
    },
    async postContact(req, res) {
      try {
        const contact = new Contact({
          email: req.body.email,
          message: req.body.message,
        });
        await contact.save();
        return res.redirect("/");
      } catch (error) {
        console.log(error);
        return res.redirect("/");
      }
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
