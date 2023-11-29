var express = require("express");
var router = express.Router();

var golpeController = require("../controllers/golpeController");

router.post("/salvar", function (req, res) {
    golpeController.salvarGolpeFavorito(req, res);
});

module.exports = router;