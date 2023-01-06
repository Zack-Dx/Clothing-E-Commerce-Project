function homeController() {
  // Factory Function (Function returning an Object)
  return {
    async index(req, res) {
      return res.render("home");
    },
  };
}

export { homeController };
