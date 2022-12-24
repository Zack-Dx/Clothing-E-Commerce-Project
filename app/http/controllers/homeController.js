function homeController() {
    // Factory Function (Function returning an Object)
    return {
        async index(req, res) {
            res.render('home');
        },
    };
}

export { homeController };
