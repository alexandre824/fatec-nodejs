/*  
Feito por Marcos Alexandre
Data: 20/08/2021
Código Nº 013
Instituição: Fatec
*/
import { DVD } from "./dvd";
import { Eletronico } from "./eletronico";
import { Livro } from "./livros";

let eletr: Eletronico = new Eletronico();
eletr.setCodigo(11);
eletr.setDescricao('Televisor');
eletr.setPreco(2000);
eletr.setTensao(127);
eletr.setGarantia('12 Meses');
console.log (eletr.toString());


let eletr1: Eletronico = new Eletronico(12, 'Computador', 2999, 127, '24 meses');
console.log ('\n---\n' + eletr1.toString())

let lv: Livro = new Livro(53, 'Harry Potter', 35, 'J. K. Rowling', 287, 'Português');
console.log ('\n-----\n' + lv.toString())

let dvd: DVD = new DVD(59, 'filme bem legal', 13.50, 'Stephen King', 2017, 'IT- A coisa');
console.log ('\n-----\n' + dvd.toString())
