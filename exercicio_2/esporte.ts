/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 016
Instituição: Fatec
*/

import { Veiculo } from "./veiculos";

export class Esporte extends Veiculo {
    private potencia: string;
    private cap_aceleracao: string;

    constructor();
    constructor(n_chassi: number, n_placa: string, fabr: string, modelo: string, ano_fabr: number, cor: string, potencia: string, cap_aceleracao: string)
    constructor(n_chassi?: any, n_placa?: any, fabr?: any, modelo?: any, ano_fabr?: any, cor?: any, potencia?: any, cap_aceleracao?: any){
        super (n_chassi, n_placa, fabr, modelo, ano_fabr, cor);
        this.potencia = potencia;
        this.cap_aceleracao = cap_aceleracao;
    }

    public setPotencia(potencia: string){
        this.potencia = potencia;
    }

    public getPotencia(): string {
        return this.potencia;
    }

    public setCap_aceleracao(cap_aceleracao: string){
        this.cap_aceleracao = cap_aceleracao;
    }

    public getCap_aceleracao(): string {
        return this.cap_aceleracao;
    }

    public toString(): string {
        return super.toString() +
            "\nPotencia: " + this.potencia + 
            "\nCapacidade de aceleração: " + this.cap_aceleracao;
    }


}