const AdminUser = require("../models/adminUserSchema");
const express = require("express");
const router = express.Router();

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'mySessions',
    autoRemove: 'native'
});

router.use(
    session({
        secret: [process.env.SESSION_SECRET, "admin-session"],
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            // secure: true,
            sameSite: false,
            maxAge: 60 * 60 * 1000 // Time is in miliseconds
        },
        store: store,
    })
);

// const pagesAuth = async (req, res, next) => {
//     const sessionId = req.cookies["connect.sid"];

//     const start = sessionId.indexOf(':') + 1;
//     const end = sessionId.indexOf('.') - 2;

//     const id = sessionId.substr(start, end);

//     const user = await AdminUser.findOne({ token: id });
//     console.log(user);

//     if(user === undefined || user.token === undefined || user.token === "") {
//         next();
//     }

//     res.status(200).json({ message: "Login Successfully !", isLoggedIn: true, name: user.name, profile_picture: user.profile_picture });
// }

const apiAuth = async (req, res, next) => {
    const sessionId = req.cookies["connect.sid"];

    const start = sessionId.indexOf(':') + 1;
    const end = sessionId.indexOf('.') - 2;

    const id = sessionId.substr(start, end);

    const user = await AdminUser.findOne({ token: id });
    console.log(user);

    if(user === undefined || user.token === undefined || user.token === "") {
        return res.status(401).send("User Not Authorized");
    }

    next();
}

module.exports = { apiAuth };