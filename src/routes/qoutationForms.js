const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({
    storage: multer.memoryStorage()
});

const createForm = require("../controllers/createForm");

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.post("/new", upload.single('file'), (req, res) => {
    const type = req.body.type;
    createForm(type, req, res);
})

router.post("/edit", (req, res) => {
    res.send("Editing ...");
})

module.exports = router;