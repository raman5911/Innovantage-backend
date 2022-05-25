const express = require("express");
const router = express.Router();
const { fetchAllJobs, createNewJob } = require("../controllers/careerJobs");

router.get("/all", (req, res) => {
    fetchAllJobs(res);
});

router.post("/new", (req, res) => {
    console.log(req.body);
    createNewJob(req.body, res);
});

router.post("/edit", (req, res) => {

});

router.post("/delete", (req, res) => {

});

module.exports = router;