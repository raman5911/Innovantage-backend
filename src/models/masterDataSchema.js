const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const masterDataSchema = new Schema({
    name: {
        type: String
    },
    building_no: {
        type: String
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    pincode: {
        type: String
    },
});

const MasterData = mongoose.model('Master Data', masterDataSchema, 'masterData');
module.exports = MasterData;