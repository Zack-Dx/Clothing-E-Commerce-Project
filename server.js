import express from "express";
import { path, __dirname } from "./path.js";
import expressEjsLayouts from "express-ejs-layouts";
import routes from './routes/web.js'
const app = express();

const PORT = process.env.PORT || 4600;
//Middlewares


// Template Engine
app.use(expressEjsLayouts); // For layout
app.use(express.static("public"));
app.set("views", path.join(__dirname, "./resources/views"));
app.set("view engine", "ejs");
routes(app)

// PORT
app.listen(PORT, (req, res) => {
  console.log(`Project is running at port ${PORT}`);
});
