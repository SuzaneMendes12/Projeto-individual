var golpeModel = require("../models/golpeModel");



function  salvarGolpeFavorito (req, res) {
    console.log(`estou em golpeController`)
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario =  req.body.idServer;
    var NomeGolpe = req.body.NomeGolpeServer;
   

    // Faça as validações dos valores
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            golpeModel.golpeFav(idUsuario, NomeGolpe)
            .then(
                function (resultado) {
                    console.log(resultado)
                    res.status(200).json(resultado)
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
    salvarGolpeFavorito
}