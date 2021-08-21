/*  
Feito por Marcos Alexandre
Data: 20/08/2021
Código Nº 011
Instituição: Fatec
*/

export class Produto {
    //  A super classe comtem atributos e métodos que são comuns
    // a todos os tipos de produto (DVD, Eletronico e Livro)
    protected codigo: number; // protected = atribnuto (ou método ) é visivel
    protected descricao: string; //na própria classe (super classe) é nas
    protected preco: number;  // subclasses

    // Polimofirmo no método
    constructor ();
    constructor (codigo: number, descricao: string, preco: number);
    constructor (codigo?: any, descricao?: any, preco?: any){
        this.codigo = codigo;
        this.descricao = descricao;
        this.preco = preco;
    }

    // Métodos getters e setters
    public setCodigo(codigo: number){
        this.codigo = codigo;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setDescricao(descricao: string){
        this.descricao = descricao;
    }

    public getDrscricao(): string{
        return this.descricao;
    }

    public setPreco(preco: number){
        this.preco = preco;
    }

    public getPreco(): number{
        return this.preco;
    }

    public toString(): string{
        return "Código: " + this.codigo + "\nDescrição: " + this.descricao + "\nPreço: " + this.preco;

    }
} 

