var database = require("../database/config")

function golpeFav (idUsuario, NomeGolpe) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():" , idUsuario , NomeGolpe);

    var instrucao =` INSERT INTO golpe_favorito (fkUsuario, NomeGolpe ) VALUES ('${idUsuario}','${NomeGolpe}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosGrafico2 (nomeGolpe){

    var instrucao = `
    select ${nomeGolpe}, count(*) quantidade from golpe_Favorito group by ${nomeGolpe};
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    obterDadosGrafico2,
    golpeFav
};