const Freight = require("../models/freightSchema");
const Custom = require("../models/customSchema");
const Transport = require("../models/transportSchema");
const Warehouse = require("../models/warehouseSchema");
const ValueAdded = require("../models/valueAddedSchema");

const getTrackingResult = (id, type, res) => {
    if (type === "F") {
        Freight.findOne({
          _id: id
        }, function (err, data) {
          if (err)
            res.status(500).json({ message: err });
    
          else if (data) {
            const result = {
                id: data._id,
                requestedService: data.service,
                shipmentFrom: data.shipment_from,
                shipmentTo: data.shipment_to,
                expectedDeliveryDate: data.expected_delivery_date,
                currentShipmentDate: data.current_shipment_phase,
                travelHistory: data.travelHistory
            };
            
            res.status(200).json({ data: result });
          }
          else {
            res.json({ message: "Result Not Found", exist: false });
          }
        });
      }
      else if (type === "C") {
        Custom.findOne({
          _id: id
        }, function (err, data) {
          if (err)
            res.status(500).json({ message: err });
    
          else if (data) {
            const result = {
                id: data._id,
                requestedService: data.service,
                shipmentFrom: data.shipment_from,
                shipmentTo: data.shipment_to,
                expectedDeliveryDate: data.expected_delivery_date,
                currentShipmentDate: data.current_shipment_phase,
                travelHistory: data.travelHistory
            };
            
            res.status(200).json({ data: result });
          }
          else {
            res.json({ message: "Result Not Found", exist: false });
          }
        });
      }
      else if (type === "T") {
        Transport.findOne({
          _id: id
        }, function (err, data) {
          if (err)
            res.status(500).json({ message: err });
    
          else if (data) {
            const result = {
                id: data._id,
                requestedService: data.service,
                shipmentFrom: data.shipment_from,
                shipmentTo: data.shipment_to,
                expectedDeliveryDate: data.expected_delivery_date,
                currentShipmentDate: data.current_shipment_phase,
                travelHistory: data.travelHistory
            };
            
            res.status(200).json({ data: result });
          }
          else {
            res.json({ message: "Result Not Found", exist: false });
          }
        });
      }
      else {
        res.json({ message: "Result Not Found", exist: false });
      }
};

module.exports = getTrackingResult;