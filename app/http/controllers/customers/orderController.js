import moment from "moment";
import { Order } from "../../../models/order.js";
function orderController() {
  return {
    async store(req, res) {
      try {
        // Validate Request
        const { phone, address } = req.body;
        if (!phone || !address) {
          req.flash("error", "All fields are required.");
          return res.redirect("/cart");
        }
        // Creating new order
        const order = new Order({
          customerId: req.user._id, // Passport js makes logged in user available
          items: req.session.cart.items,
          phone,
          address,
        });
        await order.save();
        req.flash("success", "Order Placed Successfully!");
        delete req.session.cart; // to delete cart Object's Property
        return res.redirect("/customer/orders");
      } catch (error) {
        req.flash("error", "Something went wrong");
        console.log(error);
        return res.redirect("/cart");
      }
    },
    async index(req, res) {
      try {
        const orders = await Order.find({ customerId: req.user._id }, null, {
          sort: { createdAt: -1 },
        });
        res.header(
          "Cache-Control",
          "no-cache,private no-store,must-revalidate, max-stale=0, post-check=0, pre-check=0"
        );
        res.render("purchase/order", {
          orders: orders,
          moment: moment,
        });
      } catch (error) {
        console.log(error);
        return res.redirect("/shop");
      }
    },
    async show(req, res) {
      try {
        const order = await Order.findById(req.params.id);
        // Authorize User
        if (req.user._id.toString() === order.customerId.toString()) {
          return res.render("purchase/singleOrder", { order });
        }
        return res.redirect("/");
      } catch (error) {
        return res.redirect("/");
      }
    },
  };
}
export { orderController };
