var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

// router.post("/cadastrar", function (req, res) {
//     // função a ser chamada quando acessar /carros/cadastrar
//     jogoController.cadastrar(req, res);
// });

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    jogoController.listar(req, res);
});

module.exports = router;