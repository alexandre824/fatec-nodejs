/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 025
Instituição: Fatec
*/

import { Funcionarios } from "./funcionarios";

export class Terceirizado extends Funcionarios {
    private data_ini: string;
    private duracao: string;
    private nome_empresa: string

    constructor();
    constructor (n_registro: number, nome: string, funcao: string, salario: number, sit: string, data_ini: string, duracao: string, nome_empresa: string);
    constructor (n_registro?: any, nome?: any, funcao?: any, salario?: any, sit?: any, data_ini?: any, duracao?: any, nome_empresa?: any){
        super (n_registro, nome, funcao, salario, sit);
        this.data_ini = data_ini;
        this.duracao = duracao;
        this.nome_empresa = nome_empresa;
    }

    public setData_ini(data_ini: string){
        this.data_ini = data_ini;
    }

    public getData_ini(): string {
        return this.data_ini;
    }

    public setDuracao(duracao: string){
        this.duracao = duracao;
    }

    public getDuracao(): string {
        return this.duracao;
    }

    public setNome_empresa(nome_empresa: string){
        this.nome_empresa = nome_empresa;
    }

    public getNome_empresa(): string {
        return this.nome_empresa;
    }

    public toString(): string {
        return super.toString() +
            "\nData de Inicio: " + this.data_ini + 
            "\nDuração: " + this.duracao + 
            "\nnome empresa prestadora de serviço: " + this.nome_empresa;

    }


}