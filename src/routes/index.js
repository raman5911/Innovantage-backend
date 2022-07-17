const express = require("express");
const app = express();
const router = express.Router();
const qoutationForms = require("./qoutationForms");
const trackShipment = require("./trackShipment");
const careerJobs = require("./careerJobs");
const authentication = require("./authentication");
const masterData = require("./masterData");
const lorryReceipt = require("./lorryReceipt");

router.get('/', (req, res) => {
    res.json({ message: 'Server running successfully!' });
});

router.use('/qoutation-forms', qoutationForms);
router.use('/track-shipment', trackShipment);
router.use('/career-jobs', careerJobs);
router.use('/auth', authentication);
router.use('/master-data', masterData);
router.use('/lorry-receipt', lorryReceipt);

module.exports = router;