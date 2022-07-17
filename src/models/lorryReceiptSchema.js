const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lorryReceiptSchema = new Schema({
    lr_number: {
        type: String
    },
    date: {
        type: Date
    },
    vehicle_number: {
        type: String
    },
    vehicle_type: {
        type: String
    },
    driver_mobile: {
        type: String
    },
    consignor_name: {
        type: String
    },
    consignor_building_no: {
        type: String
    },
    consignor_street: {
        type: String
    },
    consignor_city: {
        type: String
    },
    consignor_pincode: {
        type: String
    },
    consignee_name: {
        type: String
    },
    consignee_building_no: {
        type: String
    },
    consignee_street: {
        type: String
    },
    consignee_city: {
        type: String
    },
    consignee_pincode: {
        type: String
    },
    way_bill: {
        type: String
    },
    gst_number: {
        type: String
    },
    special_instructions: {
        type: String
    },
    contact_person: {
        type: String
    },
    vehicle_reporting_date: {
        type: Date
    },
    vehicle_reporting_time: {
        type: Date
    },
    vehicle_departure_date: {
        type: Date
    },
    vehicle_departure_time: {
        type: Date
    },
    driver_name: {
        type: String
    },
    driver_license_number: {
        type: String
    },
    num_of_packages: {
        type: String
    },
    goods_descriptiion: {
        type: String
    },
    actual_weight: {
        type: String
    },
    amount_in_figures: {
        type: String
    },
    amount_in_words: {
        type: String
    },
    document_number: {
        type: String
    },
    document_date: {
        type: Date
    },
});

const LorryReceipt = mongoose.model('Lorry Receipt', lorryReceiptSchema, 'lorryReceipt');
module.exports = LorryReceipt;