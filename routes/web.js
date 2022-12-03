import { errorPage } from "../app/http/controllers/404Controller.js";
import { authController } from "../app/http/controllers/authController.js";
import { cartController } from "../app/http/controllers/customers/cartController.js";
import { capsController } from "../app/http/controllers/customers/pages/capsController.js";
import { hoodieController } from "../app/http/controllers/customers/pages/hoodieController.js";
import { tshirtController } from "../app/http/controllers/customers/pages/tshirtController.js";
import { productController } from "../app/http/controllers/customers/productController.js";

import { homeController } from "../app/http/controllers/homeController.js";

export default function initRoutes(app) {
  // Home Route
  app.get("/", homeController().index);

  // Authentication Routes
  app.get("/register", authController().register);

  // Cart Routes
  app.get("/cart", cartController().cart);

  //Tshirt Routes
  app.get("/tshirts", tshirtController().index);

  //Caps Page
  app.get("/caps", capsController().index);

  //Hoodie Page
  app.get("/hoodies", hoodieController().index);

  //Product Page

  app.get(`/product/`, productController().index);

  //404 Error Page
  app.get("*", errorPage().index);
}
