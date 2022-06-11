const express = require("express");
const router = express.Router();
const { fetchAllJobs, createNewJob, editJob, deleteJob } = require("../controllers/careerJobs");
const { apiAuth } = require("../middlewares/auth");

// router.use(apiAuth);

router.get("/all", (req, res) => {
    fetchAllJobs(req, res);
});

router.post("/new", apiAuth, (req, res) => {
    console.log(req.body);
    createNewJob(req.body, req, res);
});

router.post("/edit", apiAuth, (req, res) => {
    console.log(req.body);
    editJob(req.body, res);
});

router.post("/delete", apiAuth, (req, res) => {
    deleteJob(req.body, res);
});

module.exports = router;