/*  
Feito por Marcos Alexandre
Data: 13/08/2021
Código Nº 006
Instituição: Fatec
*/



class Pessoa {
    private _nome!: string;
    private _endereco!: string;
    private _telefone!: string;
    
    constructor () {
        // this._nome = '';
        // this._endereco = '';
        // this._telefone = '';
    }
    // ---------------------------------
    public getNome(): string {
        return this._nome;
    }
    public setNome(value: string) {
        // if (value !== '')
            this._nome = value;
    }
    // ---------------------------------
    public getEndereco(): string {
        return this._endereco;
    }
    public setEndereco(value: string) {
        this._endereco = value;
    }
    // ---------------------------------
    public getTelefone(): string {
        return this._telefone;
    }
    public setTelefone(value: string) {
        this._telefone = value;
    }
}

let p1: Pessoa = new Pessoa();
let p2: Pessoa = new Pessoa();
p1.setNome ("Marcos");
p1.setEndereco ('Rua das lamentações');
p1.setTelefone ('(11) 4002-8922');

p2.setNome ("Alexandre");
p2.setEndereco ('Rua das perdição');
p2.setTelefone ('(11) 0800-kiko');

console.log(
    'Nome: ' + p1.getNome() + 
    '\nEndereço: ' + p1.getEndereco() + 
    '\nTelefone: ' + p1.getTelefone()
    );

console.log(
    'Nome: ' + p2.getNome() + 
    '\nEndereço: ' + p2.getEndereco() + 
    '\nTelefone: ' + p2.getTelefone()
    );


