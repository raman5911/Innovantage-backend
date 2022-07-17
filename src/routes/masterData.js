const express = require("express");
const router = express.Router();

const { apiAuth } = require("../middlewares/auth");
const { fetchAllMasterData, createNewMasterData, editMasterData, deleteMasterData, getOptions } = require("../controllers/masterDataController");

router.get('/all', apiAuth, (req, res) => {
    fetchAllMasterData(res);
})

router.post('/new', apiAuth, (req, res) => {
    createNewMasterData(req.body, res);
})

router.post('/edit', apiAuth, (req, res) => {
    editMasterData(req.body, res);
})

router.post('/delete', apiAuth, (req, res) => {
    deleteMasterData(req.body, res);
})

router.get('/options', apiAuth, (req, res) => {
    getOptions(res);
})

module.exports = router;