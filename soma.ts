/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 028
Instituição: Fatec
*/
// Instalar:
// npm i --save-dev @types/node
import  readLine  from "readline";

const teclado = readLine.createInterface({
   input: process.stdin,
   output: process.stdout
});

teclado.question('Digite o primeiro valor: ', (valor1: string) => {
    teclado.question('Digite o segundo valor: ', (valor2: string) => {
        var soma = parseFloat(valor1) + parseFloat(valor2);
        console.log("A soma é + " + soma)
    })
});
