function homeController() {
    // Factory Function (Function returning an Object)
  return {
    index(req, res) {
      res.render("home");
    },
  };
}

export { homeController };
