const express = require("express");
const router = express.Router();

const createForm = require("../controllers/createForm");

router.get("/", (req, res) => {
    console.log(createForm("freight"));
    res.send("Submitting new form...");
});

module.exports = router;