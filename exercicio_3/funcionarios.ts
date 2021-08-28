/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 021
Instituição: Fatec
*/

export class Funcionarios {

    protected n_registro: number; 
    protected nome: string; 
    protected funcao: string;  
    protected salario: number; 
    protected sit: string; 

    constructor ();
    constructor (n_registro: number, nome: string, funcao: string, salario: number, sit: string);
    constructor (n_registro?: any, nome?: any, funcao?: any, salario?: any, sit?: any){
        this.n_registro = n_registro;
        this.nome = nome;
        this.funcao = funcao;
        this.salario = salario;
        this.sit = sit;
    }

    public setN_registro(n_registro: number){
        this.n_registro = n_registro;
    }

    public getN_registro(): number {
        return this.n_registro;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setFabr(fabr: string){
        this.funcao = fabr;
    }

    public getFabr(): string{
        return this.funcao;
    }

    public setSalario(salario: number){
        this.salario = salario;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSit(sit: string){
        this.sit = sit;
    }

    public getSit(): string{
        return this.sit;
    }

    public toString(): string{
        return "Nº de Registro: " + this.n_registro + "\nNome: " + this.nome + "\nFunção: " + this.funcao + "\nSalario: " + this.salario + "\nSituação: " + this.sit;

    }

}