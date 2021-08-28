/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 020
Instituição: Fatec
*/

import { Produto } from "./produto";

export class DVD extends Produto {
    private diretor: string;
    private ano: number;
    private nome: string;

    constructor();
    constructor(codigo: number, descricao: string, preco: number, diretor: string, ano: number, nome: string);
    constructor(codigo?: any, descricao?: any, preco?: any, diretor?: any, ano?: any, nome?: any){
        super (codigo, descricao, preco);
        this.diretor = diretor;
        this.ano = ano;
        this.nome = nome;
    }

    // metodos getters e setters 
    public setDiretor(diretor: string){
        this.diretor = diretor;
    }

    public getDiretor(): string {
        return this.diretor;
    }

    public setAno(ano: number){
        this.ano = ano;
    }

    public getAno(): number {
        return this.ano;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public toString(): string {
        return super.toString() +
            "\ndiretor: " + this.diretor + 
            "\nAno de Lançamento: " + this.ano + 
            "\nNome: " + this.nome;
    }
}