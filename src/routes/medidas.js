var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
router.get("/ultimas2", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/tempo-real2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})

router.get("/requisitar", function (req, res) {
    medidaController.requisitar(req, res);
});
router.get("/requisitarMembro", function (req, res) {
    medidaController.requisitarMembro(req, res);
});

router.get("/buscar", function (req, res) {
    medidaController.buscarArtes(req, res);
});

module.exports = router;