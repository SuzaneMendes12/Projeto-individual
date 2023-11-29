var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/jogo", function (req, res) {
    jogoController.jogo(req, res);
});

module.exports = router;