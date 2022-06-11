const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminUserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    rights: {
        type: String
    },
    profile_picture: {
        type: String
    },
    token: {
        type: String
    }
});

const AdminUser = mongoose.model('Admin Users', adminUserSchema, 'admins');
module.exports = AdminUser;