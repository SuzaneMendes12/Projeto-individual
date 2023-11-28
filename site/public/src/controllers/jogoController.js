var jogoModel = require("../models/jogoModel");



// function listar(req, res) {
//     jogoModel.listar().then(function(resultado){
//         // precisamos informar que o resultado voltará para o front-end como uma resposta em json
//         res.status(200).json(resultado);
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
// }

// // function cadastrar(req, res) {
// //     var nome = req.body.nome;

// //     if (nome == undefined) {
// //         res.status(400).send("Seu nome está undefined!");
// //     }

// //     jogoModel.cadastrar(nome).then(function(resposta){
// //         res.status(200).send("Carro criado com sucesso");
// //     }).catch(function(erro){
// //         res.status(500).json(erro.sqlMessage);
// //     })
// // }

// module.exports = {
//     listar,
//     cadastrar
// }

function jogo(req, res) {
    console.log(`estou em usuarioController`)
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var resultadoD = req.body.resultadoDServer;
    var resultadoV = req.body.resultadoVServer;
    var fkUsuario = req.body.idServer;

    // Faça as validações dos valores
    if (resultadoD == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (resultadoV == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");

    } else {

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
}

module.exports = {
   
  jogo
}