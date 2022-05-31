var database = require("../database/config")

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
  requisitar
};