/*  
Feito por Marcos Alexandre
Data: 13/08/2021
Código Nº 009
Instituição: Fatec
*/

class Ponto {
    private x: number;
    private y: number;

    constructor(x: string, y: string);
    constructor(x: number, y: number);
    constructor(x: string);
    constructor(x: number);
    constructor(x: any, y?: any) {
        this.x = parseFloat(x);
        if (!y)
        y = -1
        this.y = parseFloat(y);
    }

    getPonto() {
        return this.x + ', ' + this.y;
    }
}

let pt1: Ponto = new Ponto("3");
console.log('x, y = ' + pt1.getPonto());