function tshirtController() {
  return {
    index(req, res) {
      res.render("customers/tshirt");
    },
  };
}


export {tshirtController}