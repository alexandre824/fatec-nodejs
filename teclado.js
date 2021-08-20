const readline = require('readline'); //Importa um módulo

const teclado = readline.createInterface({ //Cria o objeto teclado
    input: process.stdin,
    output: process.stdout
});

teclado.question('Digite o seu nome: ', (resposta) => {
    console.log('Olá ' + resposta);
    teclado.close();
});

/*  
Feito por Marcos Alexandre
Data: 30/07/2021
Código Nº 003 
Instituição: Fatec
*/
