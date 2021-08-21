/*  
Feito por Marcos Alexandre
Data: 20/08/2021
Código Nº 012
Instituição: Fatec
*/

import { Produto } from "./produto"; 

export class Eletronico extends Produto {
    // extends = indica herança, neste exemplo, a classe Eletronico
    // recebe todos os atributos e métodos da classe produto (super Classe) 
    // (super classe) que são declarados como protected ou public    
    //  Atributos especificos da classe Eletrionico
    private tensao: number;
    private garantia: string;

    constructor();
    constructor(codigo: number, descricao: string, preco: number, tensao: number, garantia: string);
    constructor(codigo?: any, descricao?: any, preco?: any, tensao?: any, garantia?: any){
        super (codigo, descricao, preco);
        this.tensao = tensao;
        this.garantia = garantia;
    }

    // metodos getters e setters 
    public setTensao(tensao: number){
        this.tensao = tensao;
    }

    public getTensao(): number {
        return this.tensao;
    }

    public setGarantia(garantia: string){
        this.garantia = garantia;
    }

    public getGarantia(): string {
        return this.garantia;
    }

    public toString(): string {
        return super.toString() + 
            "\nTensão: " + this.tensao + 
            "\nGarantia: " + this.garantia;
    }
}