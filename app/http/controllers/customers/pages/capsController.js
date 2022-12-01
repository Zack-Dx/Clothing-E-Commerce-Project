function capsController() {
    return {
      index(req, res) {
        res.render("customers/caps");
      },
    };
  }
  
  
  export {capsController}