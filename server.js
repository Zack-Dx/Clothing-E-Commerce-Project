import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
const app = express();
const PORT = process.env.PORT || 4900;
import mongoose from "mongoose";
import { dbConnection } from "./app/db/conn.js";
import { path, __dirname } from "./path.js";
import expressEjsLayouts from "express-ejs-layouts";
import routes from "./routes/web.js";
import session from "express-session";
import MongoDbStore from "connect-mongo"; // To store sessions into database
import flash from "express-flash";
import passport from "passport";
import Emitter from "events";
dbConnection();

//Event Emitter
const eventEmitter = new Emitter();
app.set("eventEmitter", eventEmitter); // Binded to Application
// Session Config
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    store: MongoDbStore.create({
      mongoUrl: process.env.MONGO_CONNECTION_URL,
    }),
  })
);

// Passport Config
import { passportInit } from "./app/config/passport.js";
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session());
//Middlewares
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.user = req.user;
  next();
}); // Global Middlware for Cart Counter

// Template Engine
app.use(expressEjsLayouts); // For layout
app.use(express.static("public"));
app.set("views", path.join(__dirname, "./resources/views"));
app.set("view engine", "ejs");

// SERVER
routes(app);
const server = app.listen(PORT, (req, res) => {
  console.log(`Project is running at port ${PORT}`);
});
