/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 015
Instituição: Fatec
*/

import { Veiculo } from "./veiculos";

export class Caminhao extends Veiculo {
    private cap_carga: number;
    private n_eixos: number;

    constructor();
    constructor(n_chassi: number, n_placa: string, fabr: string, modelo: string, ano_fabr: number, cor: string, cap_carga: number, n_eixos: number)
    constructor(n_chassi?: any, n_placa?: any, fabr?: any, modelo?: any, ano_fabr?: any, cor?: any, cap_carga?: any, n_eixos?: any){
        super (n_chassi, n_placa, fabr, modelo, ano_fabr, cor);
        this.cap_carga = cap_carga;
        this.n_eixos = n_eixos;
    }

    public setCap_carga(cap_carga: number){
        this.cap_carga = cap_carga;
    }

    public getCap_carga(): number {
        return this.cap_carga;
    }

    public setN_eixos(n_eixos: number){
        this.n_eixos = n_eixos;
    }

    public getN_eixos(): number {
        return this.n_eixos;
    }

    public toString(): string {
        return super.toString() +
            "\nCapacidade de carga: " + this.cap_carga + 
            "\nNº de Eixos: " + this.n_eixos;
    }


}