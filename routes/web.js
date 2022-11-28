import { authController } from "../app/http/controllers/authController.js";
import { cartController } from "../app/http/controllers/customers/cartController.js";
import { homeController } from "../app/http/controllers/homeController.js";

export default function initRoutes(app) {
  // Home Route
  app.get("/", homeController().index);

// Authentication Routes
app.get ('/register',authController().register)


// Cart Routes
app.get ('/cart',cartController().cart)
}


