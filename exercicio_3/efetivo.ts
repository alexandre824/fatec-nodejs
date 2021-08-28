/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 022
Instituição: Fatec
*/

import { Funcionarios } from "./funcionarios";

export class Efetivo extends Funcionarios {
    private data_adm: string;
    private data_demi: string;

    constructor();
    constructor (n_registro: number, nome: string, funcao: string, salario: number, sit: string, data_adm: string, data_demi?: any);
    constructor (n_registro?: any, nome?: any, funcao?: any, salario?: any, sit?: any, data_adm?: any, data_demi?: any){
        super (n_registro, nome, funcao, salario, sit);
        this.data_adm = data_adm;
        this.data_demi = data_demi;
    }

    public setData_adm(data_adm: string){
        this.data_adm = data_adm;
    }

    public getData_adm(): string {
        return this.data_adm;
    }

    public setData_demi(data_demi: string){
        this.data_demi = data_demi;
    }

    public getData_demi(): string {
        return this.data_demi;
    }

    public toString(): string {
        return super.toString() +
            "\nData de Admissão: " + this.data_adm + 
            "\nData de Demissão: " + this.data_demi;
    }


}