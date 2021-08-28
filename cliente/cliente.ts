/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 023
Instituição: Fatec
*/

interface ICliente {
    // A interface irá conter o prototipo dos métodos publicos
    setCPF(cpf: string): void;
    getCPF(): string;

    setNome(nome: string): void;
    getNome(): string;

    setTelefone(telefone: string): void;
    getTelefone(): string;
}

class Cliente implements ICliente{
    private cpf: string = '';
    private nome: string = '';
    private telefone: string = '';

    setCPF(cpf: string): void {
        this.cpf = cpf;
    }
    getCPF(): string {
        return this.cpf;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    getNome(): string {
        return this.nome;
    }
    setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
    getTelefone(): string {
        return this.telefone;
    }
    public toString(): string {
        return "CPF: " + this.cpf +
        "\nNome: " + this.nome +
        "\nTelefone: " + this.telefone;
        }
    
}

let cli: Cliente = new Cliente();
cli.setCPF('111.1411.111-11');
cli.setNome('Ninguenzinho');
cli.setTelefone('1234-1234');

console.log (cli.toString())