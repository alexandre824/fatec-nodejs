/*  
Feito por Marcos Alexandre
Data: 13/08/2021
Código Nº 008
Instituição: Fatec
*/


class Calculo {
    // Exemplo de poliformismo.
    somar(num1: number, num2: number): number;

    somar(num1: string, num2: string): string;

    somar(num1: string, num2: number): string;

    somar(num1: any, num2: any): any {
        return (parseFloat(num1) + parseFloat(num2));
    }
}

let calc: Calculo = new Calculo();

console.log (calc.somar('5,6' , 6.8));

console.log (calc.somar('10.3' , '5.5'));
