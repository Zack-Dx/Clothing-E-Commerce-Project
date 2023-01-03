import { Order } from "../../../models/order.js";
function AdminstatusController() {
  return {
    update(req, res) {
      Order.updateOne(
        { _id: req.body.orderId },
        {
          status: req.body.status,
        },
        (err, data) => {
          try {
            return res.redirect("/admin/orders");
          } catch (error) {
            return res.redirect("/admin/orders");
          }
        }
      );
    },
  };
}

export { AdminstatusController };
