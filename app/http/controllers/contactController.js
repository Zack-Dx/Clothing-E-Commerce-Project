function contactController() {
  // Factory Function (Function returning an Object)
  return {
    async contact(req, res) {
      return res.render("contact");
    },
  };
}

export { contactController };
