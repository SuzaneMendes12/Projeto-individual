var database = require("../database/config")

// cadastrar usuario
function obterId(senha, email){
    var instrucao = `
            SELECT idUsuario FROM usuario WHERE senha = '${senha}' AND email = '${email}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome,sobrenome, email, senha)  {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, email, senha);
    
    var instrucao = `
            INSERT INTO usuario (nome, sobrenome, email, senha ) VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    obterId,
    cadastrar,
    autenticar
};