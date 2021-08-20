/*  
Feito por Marcos Alexandre
Data: 06/08/2021
Código Nº 005
Instituição: Fatec
*/


// Classe contém atributos (características) e métodos (ações).
// Nome da classe sempre em letra maiuscula
class Ola {
    private saudacao: string;
    private nome: string; //Atributo nome, apenas visivel dentro da classe

    constructor (n: string) { // Define como um objeto é criado
        this.nome = n; //this indica um atributo ou método da classe
        this.saudacao = "Olá";
    }

    setSaudacao (s: string){
        this.saudacao = s;
    }
    getOla(): string {
        // return "Olá, " + this.nome + "!";
        return this.saudacao + ', ' + this.nome + '!';
    }
}

let ola: Ola = new Ola('Marcos'); //Criação do objeto; Um objeto só
// Pode ser criado a partir de uma classe

console.log(ola.getOla());
ola.setSaudacao('Boa noite');
console.log(ola.getOla());


