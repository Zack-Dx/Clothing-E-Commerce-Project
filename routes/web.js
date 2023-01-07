//Controllers Import
import { contactController } from "../app/http/controllers/contactController.js";
import { AdminOrderController } from "../app/http/controllers/admin/orderController.js";
import { AdminstatusController } from "../app/http/controllers/admin/statusController.js";
import { errorPage } from "../app/http/controllers/404Controller.js";
import { authController } from "../app/http/controllers/authController.js";
import { cartController } from "../app/http/controllers/customers/cartController.js";
import { orderController } from "../app/http/controllers/customers/orderController.js";
import { tshirtController } from "../app/http/controllers/customers/pages/tshirtController.js";
import { homeController } from "../app/http/controllers/homeController.js";

//Middleware Imports
import { guest } from "../app/http/middlewares/guest.js";
import { auth } from "../app/http/middlewares/auth.js";
import { admin } from "../app/http/middlewares/admin.js";

// Routing
export default function initRoutes(app) {
  // Home Route
  app.get("/", homeController().index);

  // Authentication Routes
  app.get("/register", guest, authController().register);
  app.post("/register", authController().postRegister);
  app.get("/login", guest, authController().login);
  app.post("/login", authController().postlogin);
  app.post("/logout", authController().logout);

  // Customer Cart Routes
  app.get("/cart", cartController().cart);
  app.post("/update-cart", cartController().update);
  app.post("/clear-cart", cartController().clear);
  app.post("/increment-cart", cartController().add);
  app.post("/decrement-cart", cartController().sub);

  // Customer Order Routes
  app.post("/orders", auth, orderController().store);
  app.get("/customer/orders", auth, orderController().index);
  app.get("/customer/orders/:id", auth, orderController().show);

  //Shop Routes
  app.get("/shop", tshirtController().index);

  //Admin Routes
  app.get("/admin/orders", admin, AdminOrderController().index);
  app.post("/admin/order/status", admin, AdminstatusController().update);

  //Contact Page
  app.get("/contact", contactController().contact);
  app.post("/contact", contactController().postContact);
  app.post("/reviews/:name", contactController().reviews);

  //404 Error Page
  app.get("*", errorPage().index);
}
