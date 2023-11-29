var jogoModel = require("../models/jogoModel");


function jogo(req, res) {
    console.log(`estou em usuarioController`)
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var resultadoD = req.body.resultadoDServer;
    var resultadoV = req.body.resultadoVServer;
    var fkUsuario = req.body.idServer;

    // Faça as validações dos valores
   

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        jogoModel.jogo(resultadoD, resultadoV, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
   
    jogo
}