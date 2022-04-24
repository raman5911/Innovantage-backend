const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
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
    warehouse_city: {
        type: String
    },
    specific_location: {
        type: String
    },
    covered_area: {
        type: String
    },
    open_area: {
        type: String
    },
    commodity_storage: {
        type: String
    },
    infrastructure_options: {
        type: String
    },
    manpower_options: {
        type: String
    },
    security_options: {
        type: String
    },
    other_requirements: {
        type: String
    },
    work_scope: {
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

const Warehouse = mongoose.model('Warehouse', warehouseSchema, 'users');

module.exports = Warehouse;