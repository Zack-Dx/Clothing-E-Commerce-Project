function authController() {
  return {
    //Register
    register(req, res) {
      res.render("auth/register");
    },
    
  };
}

export { authController };
