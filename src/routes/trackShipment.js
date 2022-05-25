const express = require("express");
const router = express.Router();
const getTrackingResult = require("../controllers/trackSingleShipment");

router.get("/", (req, res) => {
    var id = req.query.orderId;
    var type = id.charAt(0);

    getTrackingResult(id, type, res);
});

module.exports = router;