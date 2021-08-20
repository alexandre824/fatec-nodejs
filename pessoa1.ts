/*  
Feito por Marcos Alexandre
Data: 13/08/2021
Código Nº 007
Instituição: Fatec
*/

class Pessoa1 {
    private _nome!: string;
    private _endereco!: string;
    private _telefone!: string;
    
    constructor() {
        
    }
    // --------------------------------------------
    public get nome(): string {
        // O método  get é executado quando se chama o proprio método
        return this._nome;
    }
    public set nome(value: string) {
        //  O método set é executado quando ocorre uma atribuição (sinalo de =)
        this._nome = value;
    }
    // -------------------------------------------
    public get endereco(): string {
        return this._endereco;
    }
    public set endereco(value: string) {
        this._endereco = value;
    }
    // -------------------------------------------
    public get telefone(): string {
        return this._telefone;
    }
    public set telefone(value: string) {
        this._telefone = value;
    }
}

let p11: Pessoa1 = new Pessoa1();
p11.nome = "Marcos";
p11.endereco = 'Rua das lamentações';
p11.telefone = '(11) 4002-8922';

console.log('Nome: ' + p11.nome + '\nEndereco: ' + p11.endereco + '\nTelefone: ' + p11.telefone);