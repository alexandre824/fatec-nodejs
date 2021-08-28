/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 017
Instituição: Fatec
*/

import { Veiculo } from "./veiculos";

export class Onibus extends Veiculo {
    private quant_passa: number;
    private n_eixos: number;

    constructor();
    constructor(n_chassi: number, n_placa: string, fabr: string, modelo: string, ano_fabr: number, cor: string, quant_passa: number, n_eixos: number)
    constructor(n_chassi?: any, n_placa?: any, fabr?: any, modelo?: any, ano_fabr?: any, cor?: any, quant_passa?: any, n_eixos?: any){
        super (n_chassi, n_placa, fabr, modelo, ano_fabr, cor);
        this.quant_passa = quant_passa;
        this.n_eixos = n_eixos;
    }

    public setQuant_passa(quant_passa: number){
        this.quant_passa = quant_passa;
    }

    public getQuant_passa(): number {
        return this.quant_passa;
    }

    public setN_eixos(n_eixos: number){
        this.n_eixos = n_eixos;
    }

    public getN_eixos(): number {
        return this.n_eixos;
    }

    public toString(): string {
        return super.toString() +
            "\nQuntª de Pessoas: " + this.quant_passa + 
            "\nNº de Eixos: " + this.n_eixos;
    }


}