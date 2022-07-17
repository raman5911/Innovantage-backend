const AdminUser = require("../models/adminUserSchema");
const express = require("express");
const router = express.Router();

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

    if(sessionId === undefined) {
        return res.status(401).json({ message: "Session Expired! Login Again" });
    }

    const start = sessionId.indexOf(':') + 1;
    const end = sessionId.indexOf('.') - 2;

    const id = sessionId.substr(start, end);

    const user = await AdminUser.findOne({ token: id });
    // console.log(user);

    if(user === undefined || user.token === undefined || user.token === "") {
        return res.status(401).send("User Not Authorized");
    }

    next();
}

module.exports = { apiAuth };