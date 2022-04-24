const express = require("express");
const router = express.Router();
const qoutationForms = require("./qoutationForms");

router.get('/', (req, res) => {
    res.json({message: 'Server running successfully!'});
});

router.use('/qoutation-forms', qoutationForms);

module.exports = router;