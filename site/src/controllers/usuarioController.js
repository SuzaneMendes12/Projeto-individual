var usuarioModel = require("../models/usuarioModel");

// Função para cadastrar
function cadastrar(req, res) {
    console.log(`estou em usuarioController`)
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nickname = req.body.nicknameServer;
    var email = req.body.emailServer;
    var sobrenome = req.body.sobrenomeServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nickname == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");

    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nickname, sobrenome, email,senha)
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

// funçao do jogo
// function jogo(req, res) {
//     console.log(`estou em usuarioController`)
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var resultadoD = req.body.resultadoDServer;
//     var resultadoV = req.body.resultadoVServer;
//     var fkUsuario = req.body.idServer;

//     // Faça as validações dos valores
//     if (resultadoD == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     } else if (resultadoV == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (fkUsuario == undefined) {
//         res.status(400).send("Sua senha está undefined!");

//     } else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         usuarioModel.cadastrar(resultadoD, resultadoV, fkUsuario)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

// function golpe (req, res) {
//     console.log(`estou em usuarioController`)
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var resultadoD = req.body.resultadoDServer;
//     var resultadoV = req.body.resultadoVServer;
//     var fkUsuario = req.body.idServer;

//     // Faça as validações dos valores
//     if (resultadoD == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     } else if (resultadoV == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (fkUsuario == undefined) {
//         res.status(400).send("Sua senha está undefined!");

//     } else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         usuarioModel.cadastrar(resultadoD, resultadoV, fkUsuario)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }


module.exports = {
    cadastrar,
    
}