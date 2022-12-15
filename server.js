import dotenv from 'dotenv';
dotenv.config();
import express, { urlencoded } from 'express';
const app = express();
const PORT = process.env.PORT || 80;
import mongoose from 'mongoose';
import { dbConnection } from './app/db/conn.js';
dbConnection();
import { path, __dirname } from './path.js';
import expressEjsLayouts from 'express-ejs-layouts';
import routes from './routes/web.js';
import session from 'express-session';
import MongoDbStore from 'connect-mongo'; // To store sessions into database
import flash from 'express-flash';

// Session Config
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        store: MongoDbStore.create({
            mongoUrl: process.env.MONGO_CONNECTION_URL,
        }),
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    })
);

//Middlewares
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
}); // Global Middlware for Cart Counter

app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Template Engine
app.use(expressEjsLayouts); // For layout
app.use(express.static('public'));
app.set('views', path.join(__dirname, './resources/views'));
app.set('view engine', 'ejs');
routes(app);

// PORT
app.listen(PORT, (req, res) => {
    console.log(`Project is running at port ${PORT}`);
});
