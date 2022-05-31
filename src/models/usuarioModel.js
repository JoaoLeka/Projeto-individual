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




function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
var cadastro= 0;
var cadastroLista3= [];

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    cadastro= cadastro + 1
    cadastroLista3.push(cadastro)
    var maior= 0
for(var i=0; i <cadastroLista3.length; i++){
    if(cadastroLista3[i]> maior){
        maior= cadastroLista3[i]
    }
}
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, n_cadastro) VALUES ('${nome}', '${email}', '${senha}','${maior }');
        
    `;
       
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function cadastrar2(seleVideo) {
   
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar2():", seleVideo);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.


    if (seleVideo == "1") {
    var instrucao = `
        INSERT INTO votos VALUES ('1');
        
    `;
    }else if(seleVideo == "2"){
        var instrucao = `
        INSERT INTO votos VALUES ('2');
        
    `;

    }else if(seleVideo == "3"){
        var instrucao = `
        INSERT INTO votos VALUES ('3');
        
    `;
    }else if(seleVideo == "4"){
        var instrucao = `
        INSERT INTO votos VALUES ('4');
        
    `;
    }else if(seleVideo == "5"){
        var instrucao = `
        INSERT INTO votos VALUES ('5');
        
    `;
    }else if(seleVideo == "6"){
        var instrucao = `
        INSERT INTO votos VALUES ('6');
        
    `;
    }
    
       
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}



// function votar(sele){

//     if (sele == "1") {
//     var instrucao = `
//         INSERT INTO votos VALUES ('1');
        
//     `;
       
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }
// }



module.exports = {
    entrar,
    cadastrar,
    listar,
  cadastrar2,
  requisitar,
};