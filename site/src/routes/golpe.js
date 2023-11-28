var express = require("express");
var router = express.Router();

var golpeController = require("../controllers/golpeController");

router.post("/golpe", function (req, res) {
    usuarioController.golpe(req, res);
});

module.exports = router;