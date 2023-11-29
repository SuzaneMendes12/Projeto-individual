var database = require("../database/config")

function jogo(resultadoD, resultadoV, fkUsuario ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():" , resultadoD, resultadoD , fkUsuario);

    var instrucao =` INSERT INTO jogo (fkUsuario , derrotas, vitorias ) VALUES (${fkUsuario}, ${resultadoD},${resultadoV}, );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    jogo
};