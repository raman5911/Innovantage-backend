const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const valueAddedSchema = new Schema({
    _id: {
        type: String
    },
    service: {
        type: String
    },
    status: {
        type: String
    },
    user_name: {
        type: String
    },
    user_address: {
        type: String
    },
    user_phone_number: {
        type: String
    },
    user_phone_number_formatted: {
        type: String
    },
    user_email_address: {
        type: String
    },
    service_type: {
        type: String
    },
    file_name: {
        type: String
    },
    file_type: {
        type: String
    },
    file_preview_url: {
        type: String
    },
    file_download_url: {
        type: String
    }
});

const ValueAdded = mongoose.model('Value Added', valueAddedSchema, 'users');

module.exports = ValueAdded;