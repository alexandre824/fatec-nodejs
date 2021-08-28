/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 018
Instituição: Fatec
*/

import { Veiculo } from "./veiculos";

export class OffRoad extends Veiculo {
    private altura: string;
    private tipo_tracao: string;

    constructor();
    constructor(n_chassi: number, n_placa: string, fabr: string, modelo: string, ano_fabr: number, cor: string, altura: string, tipo_tracao: string)
    constructor(n_chassi?: any, n_placa?: any, fabr?: any, modelo?: any, ano_fabr?: any, cor?: any, altura?: any, tipo_tracao?: any){
        super (n_chassi, n_placa, fabr, modelo, ano_fabr, cor);
        this.altura = altura;
        this.tipo_tracao = tipo_tracao;
    }

    public setAxltura(altura: string){
        this.altura = altura;
    }

    public getAxltura(): string {
        return this.altura;
    }

    public setTipo_tracao(tipo_tracao: string){
        this.tipo_tracao = tipo_tracao;
    }

    public getTipo_tracao(): string {
        return this.tipo_tracao;
    }

    public toString(): string {
        return super.toString() +
            "\naltura em relação ao solo " + this.altura + 
            "\ntipo de tração " + this.tipo_tracao;
    }


}