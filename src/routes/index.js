const express = require("express");
const router = express.Router();
const qoutationForms = require("./qoutationForms");
const trackShipment = require("./trackShipment");
const careerJobs = require("./careerJobs");

router.get('/', (req, res) => {
    res.json({message: 'Server running successfully!'});
});

router.use('/qoutation-forms', qoutationForms);
router.use('/track-shipment', trackShipment);
router.use('/career-jobs', careerJobs);

module.exports = router;