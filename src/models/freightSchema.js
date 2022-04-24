const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freightSchema = new Schema({
  _id: {
    type: String
  },
  service: {
    type: String
  },
  status: {
    type: String
  },
  shipment_type: {
    type: String
  },
  delivery_incoterms: {
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
  shipment_address: {
    type: String
  },
  area_code: {
    type: String
  },
  shipment_phone_number: {
    type: String
  },
  shipment_phone_number_formatted: {
    type: String
  },
  shipment_from_country_code: {
    type: String
  },
  shipment_from_country_name: {
    type: String
  },
  origin_port: {
    type: String
  },
  shipment_to_country_code: {
    type: String
  },
  shipment_to_country_name: {
    type: String
  },
  destination_port: {
    type: String
  },
  shipment_mode: {
    type: String
  },
  commodity_name: {
    type: String
  },
  commodity_type: {
    type: String
  },
  container_type: {
    type: String
  },
  gross_weight: {
    type: String
  },
  number_of_packages: {
    type: String
  },
  total_volume: {
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

const Freight = mongoose.model('Freight', freightSchema, 'users');

module.exports = Freight;