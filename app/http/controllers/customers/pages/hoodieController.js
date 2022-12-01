function hoodieController() {
    return {
      index(req, res) {
        res.render("customers/hoodies");
      },
    };
  }
  
  
  export {hoodieController}