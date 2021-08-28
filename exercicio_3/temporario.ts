/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 024
Instituição: Fatec
*/

import { Funcionarios } from "./funcionarios";

export class Temporario extends Funcionarios {
    private data_inicio: string;
    private duracao_meses: string;

    constructor();
    constructor (n_registro: number, nome: string, funcao: string, salario: number, sit: string, data_inicio: string, duracao_meses?: any);
    constructor (n_registro?: any, nome?: any, funcao?: any, salario?: any, sit?: any, data_inicio?: any, duracao_meses?: any){
        super (n_registro, nome, funcao, salario, sit);
        this.data_inicio = data_inicio;
        this.duracao_meses = duracao_meses;
    }

    public setData_inicio(data_inicio: string){
        this.data_inicio = data_inicio;
    }

    public getData_inicio(): string {
        return this.data_inicio;
    }

    public setDuracao_meses(duracao_meses: string){
        this.duracao_meses = duracao_meses;
    }

    public getDuracao_meses(): string {
        return this.duracao_meses;
    }

    public toString(): string {
        return super.toString() +
            "\nData de Inicio do contrato: " + this.data_inicio + 
            "\nDuração em meses: " + this.duracao_meses;
    }


}