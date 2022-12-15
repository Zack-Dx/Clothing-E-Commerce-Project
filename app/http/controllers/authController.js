function authController() {
    return {
        //Register
        register(req, res) {
            res.render('auth/register');
        },
        login(req, res) {
            res.render('auth/login');
        },
    };
}

export { authController };
