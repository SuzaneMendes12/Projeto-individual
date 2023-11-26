var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

// cadastrar usuario
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

module.exports = router;