const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const cookieParser = require("cookie-parser");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

router.use(cookieParser());

const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'mySessions',
    autoRemove: 'native'
});

var cookieConfig;

if(process.env.SERVER === "local") {
    cookieConfig = false;
}
else if(process.env.SERVER === "production") {
    cookieConfig = true;
}

router.use(
    session({
        secret: [process.env.SESSION_SECRET, "admin-session"],
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: cookieConfig,
            sameSite: cookieConfig,
            maxAge: 60 * 60 * 1000 // Time is in miliseconds
        },
        store: store,
    })
);

const { createToken } = require("../utils/index");
const AdminUser = require("../models/adminUserSchema");

// const { pagesAuth } = require("../middlewares/auth");

router.get('/admin', (req, res) => {
    return;
})

router.post('/admin/login', async (req, res) => {
    try {

        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {

            if (!email && !password) {
                res.status(400).json({ message: "Email Address and Password are missing !" }).end();
                return;
            }

            if (!email) {
                res.status(400).json({ message: "Email Address is missing !" }).end();
                return;
            }
            if (!password) {
                res.status(400).json({ message: "Password is missing !" }).end();
                return;
            }
        }
        // Validate if user exist in our database
        const adminUser = await AdminUser.findOne({ email });
        // console.log(adminUser);

        if (adminUser && (await bcrypt.compare(password, adminUser.password))) {

            const token = await createToken(adminUser._id, "admin", "5m", adminUser.rights);
            // console.log(token);

            if (token === null) {
                res.status(404).json({ error: "Invalid token type" });
            }

            const userData = { name: adminUser.name, token: token, role: adminUser.rights };
            req.session.isLoggedIn = true;
            req.session.user = userData;
            console.log(req.session);

            res.status(200).json({ message: "Login Successfully !", isLoggedIn: true, name: adminUser.name, profile_picture: adminUser.profile_picture });

            // console.log(req.sessionID);

            adminUser.token = req.sessionID;
            
            adminUser.save((err, result) => {
                if(err) {
                    throw new Error(err);
                }
                else {
                    console.log(result);
                }
            })
        }
        else {
            res.status(401).json({ message: "Invalid Email Address or Password !" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `${err}` });
    }
});

module.exports = router;