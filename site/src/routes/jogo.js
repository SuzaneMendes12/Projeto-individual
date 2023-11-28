var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/jogo", function (req, res) {
    usuarioController.jogo(req, res);
});

module.exports = router;