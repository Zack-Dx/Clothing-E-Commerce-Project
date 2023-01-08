import { Contact } from "../../../models/contact.js";
import moment from "moment";
function AdmincontactController() {
  return {
    async contacts(req, res) {
      try {
        const users = await Contact.find().sort({ createdAt: -1 });
        return res.render("admin/contact", { users, moment });
      } catch (error) {
        return res.redirect("/");
      }
    },
  };
}

export { AdmincontactController };
