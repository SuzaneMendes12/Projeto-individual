var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

// cadastrar usuario
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/obterId", function (req, res) {
    usuarioController.obterId(req, res);
});
// router.post("/golpe", function (req, res) {
//     usuarioController.golpe(req, res);
// });

// router.post("/jogo", function (req, res) {
//     usuarioController.jogo(req, res);
// });
module.exports = router;