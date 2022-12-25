//Controllers Import
import { errorPage } from '../app/http/controllers/404Controller.js';
import { authController } from '../app/http/controllers/authController.js';
import { cartController } from '../app/http/controllers/customers/cartController.js';
import { orderController } from '../app/http/controllers/customers/orderController.js';
import { tshirtController } from '../app/http/controllers/customers/pages/tshirtController.js';

import { homeController } from '../app/http/controllers/homeController.js';

//Middleware Imports
import { guest } from '../app/http/middlewares/guest.js';
export default function initRoutes(app) {
    // Home Route
    app.get('/', homeController().index);

    // Authentication Routes
    app.get('/register', guest, authController().register);
    app.post('/register', authController().postRegister);
    app.get('/login', guest, authController().login);
    app.post('/login', authController().postlogin);
    app.post('/logout', authController().logout);

    // Cart Routes
    app.get('/cart', cartController().cart);
    app.post('/update-cart', cartController().update);
    app.post('/orders', orderController().store);
    app.get('/customer/orders', orderController().index);

    //Tshirt Routes
    app.get('/tshirts', tshirtController().index);

    //404 Error Page
    app.get('*', errorPage().index);
}
