var express = require("express");
var router = express.Router();

var requisitarController = require("../controllers/requisitarController");



router.get("/requisitar", function (req, res) {
    requisitarController.requisitar(req, res);
});

module.exports = router;