/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 015
Instituição: Fatec
*/

export class Veiculo {

    protected n_chassi: number; 
    protected n_placa: string; 
    protected fabr: string;  
    protected modelo: string;
    protected ano_fabr: number; 
    protected cor: string; 

    constructor ();
    constructor (n_chassi: number, n_placa: string, fabr: string, modelo: string, ano_fabr: number, cor: string);
    constructor (n_chassi?: any, n_placa?: any, fabr?: any, modelo?: any, ano_fabr?: any, cor?: any){
        this.n_chassi = n_chassi;
        this.n_placa = n_placa;
        this.fabr = fabr;
        this.modelo = modelo;
        this.ano_fabr = ano_fabr;
        this.cor = cor;
    }

    public setN_chassi(n_chassi: number){
        this.n_chassi = n_chassi;
    }

    public getN_chassi(): number {
        return this.n_chassi;
    }

    public setN_placa(n_placa: string){
        this.n_placa = n_placa;
    }

    public getN_placa(): string {
        return this.n_placa;
    }

    public setFabr(fabr: string){
        this.fabr = fabr;
    }

    public getFabr(): string{
        return this.fabr;
    }

    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public getModelo(): string{
        return this.modelo;
    }

    public setAno_fabr(ano_fabr: number){
        this.ano_fabr = ano_fabr;
    }

    public getAno_fabr(): number {
        return this.ano_fabr;
    }

    public setCor(cor: string){
        this.cor = cor;
    }

    public getCor(): string{
        return this.cor;
    }

    public toString(): string{
        return "Nº de Chassi: " + this.n_chassi + "\nNº Placa: " + this.n_placa + "\nFabricante: " + this.fabr + "\nModelo: " + this.modelo + "\nAno do Fabricante: " + this.ano_fabr + "\nCor: " + this.cor;

    }

}