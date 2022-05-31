var database = require("../database/config");



function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select idUsuario as temperatura, momento_cadastro as momento_grafico from usuario where idUsuario=(select count(idUsuario) from usuario);`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select n_cadastro as temperatura, DATE_FORMAT(momento_cadastro,'%H:%i:%s') as momento_grafico from usuario
        order by idUsuario desc limit ${limite_linhas} ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas2(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select idUsuario as temperatura, momento_cadastro as momento_grafico from usuario where idUsuario=(select count(idUsuario) from usuario);`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(fkalbum) as trench from votos where fkalbum='1'
        order by fkalbum desc limit ${limite_linhas};
        
        

        
        `;
        instrucaoSql =`select count(fkalbum) as blurryface from votos where fkalbum='2'
        order by fkalbum desc limit ${limite_linhas};`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(idUsuario) as temperatura from usuario;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select n_cadastro as temperatura, DATE_FORMAT(momento_cadastro,'%H:%i:%s') as momento_grafico from usuario
        order by idUsuario desc limit 1 ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasEmTempoReal2(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(idUsuario) as temperatura from usuario;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(fkalbum) as trench from votos where fkalbum='1'
        order by fkalbum desc limit 1;
        
        

        `;
        instrucaoSql =`select count(fkalbum) as blurryface from votos where fkalbum='2'
        order by fkalbum desc limit 1;`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function requisitar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function requisitar()");
    var instrucao = `
    select al.nome as nome, count(vo.fkalbum) as voto from votos as vo
    inner join album as al
    on al.idalbum = vo.fkalbum group by al.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoReal2,
    buscarUltimasMedidas2,
    requisitar
}
