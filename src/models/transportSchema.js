const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transportSchema = new Schema({
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
    pickup_address: {
        type: String
    },
    destination_address: {
        type: String
    },
    vehicle_type: {
        type: String
    },
    vehicle_size: {
        type: String
    },
    packing_type: {
        type: String
    },
    other_specs: {
        type: String
    },
    package_per_unit: {
        type: String
    },
    package_weight: {
        type: String
    },
    shipment_weight: {
        type: String
    },
    measurement_unit: {
        type: String
    },
    length: {
        type: String
    },
    width: {
        type: String
    },
    height: {
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
    },
    expected_delivery_date: {
        type: Date
    },
    current_shipment_phase: {
        type: String
    },
    travelHistory: [{
        fullDateTime: {
            type: Date
        },
        date: {
            type: String
        },
        time: {
            type: String
        },
        location: {
            type: String
        },
        description: {
            type: String
        }
    }]
});

const Transport = mongoose.model('Transport', transportSchema, 'users');

module.exports = Transport;
