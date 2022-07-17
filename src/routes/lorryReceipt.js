const express = require("express");
const router = express.Router();

const { apiAuth } = require("../middlewares/auth");
const { fetchLR, createNewLR, editLR, deleteLR, downloadLR } = require("../controllers/lorryReceiptController");

router.get('/all', apiAuth, (req, res) => {
    fetchLR(res);
});

router.post('/new', apiAuth, (req, res) => {
    createNewLR(req.body, res);
});

router.post('/edit', apiAuth, (req, res) => {
    editLR(req.body, res);
});

router.post('/delete', apiAuth, (req, res) => {
    deleteLR(req.body, res);
});

router.post('/download', apiAuth, (req, res) => {
    downloadLR(req.body, res);
})

module.exports = router;