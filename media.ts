/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 029
Instituição: Fatec
*/
// Instalar:
// npm i --save-dev @types/node
// Elaborar um programa que a partir de 4 numeros reais digitados
// pelo usuario clacule e mostre a média
import  readLine  from "readline";

const teclado = readLine.createInterface ({
    input:process.stdin,
    output: process.stdout
});

teclado.question('Valor 1: ', (v1:string) => {
    teclado.question('Valor 2: ', (v2:string) => {
        teclado.question('Valor 3: ', (v3:string) => {
            teclado.question('Valor 4: ', (v4:string) => {
                let media: number = (parseFloat(v1) + parseFloat(v2) + parseFloat(v3) + parseFloat(v4)) / 4.0;
                console.log('A média é ' + media);
                teclado.close();
            })
        }) 
    })
})