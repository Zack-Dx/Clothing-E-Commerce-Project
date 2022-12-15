import { User } from '../../models/user.js';
function authController() {
    return {
        //Register
        register(req, res) {
            res.render('auth/register');
        },
        login(req, res) {
            res.render('auth/login');
        },
        //Registration
        postRegister(req, res) {
            // Validation Check
            console.log(req.body);
        },
    };
}

export { authController };
