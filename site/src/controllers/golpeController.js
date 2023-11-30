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

    function obterDadosGrafico2(req, res){
        var nomeGolpe = req.body.nomeGolpe;

        golpeModel.obterDadosGrafico2(nomeGolpe)
        .then(
            function(resultadoDabusca){
                if(resultadoDabusca.length >= 1){
                    console.log(resultadoDabusca)
                    res.status(200).json(resultadoDabusca)
                } else{
                    res.status(400).send('nada no banco')
                }
            }
        ) .catch(function(erro){
            console.log(erro.sqlMessage)
            res.status(500).send('Erro ao se conectar com o banco')
        })
    }

module.exports = {
    salvarGolpeFavorito,
    obterDadosGrafico2
}