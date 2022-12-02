function errorPage() {
  return {
    index(req, res) {
      res.render("404error");
    },
  };
}


export {errorPage}