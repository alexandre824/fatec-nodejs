/*  
Feito por Marcos Alexandre
Data: 20/08/2021
Código Nº 014
Instituição: Fatec
*/

import { Produto } from "./produto";

export class Livro extends Produto {
    private autor: string;
    private num_pagina: number;
    private idioma: string;

    constructor();
    constructor(codigo: number, descricao: string, preco: number, autor: string, num_pagina: number, idioma: string);
    constructor(codigo?: any, descricao?: any, preco?: any, autor?: any, num_pagina?: any, idioma?: any){
        super (codigo, descricao, preco);
        this.autor = autor;
        this.num_pagina = num_pagina;
        this.idioma = idioma;
    }

    // metodos getters e setters 
    public setAutor(autor: string){
        this.autor = autor;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setNum_pagina(num_pagina: number){
        this.num_pagina = num_pagina;
    }

    public getNum_pagina(): number {
        return this.num_pagina;
    }

    public setIdioma(idioma: string){
        this.idioma = idioma;
    }

    public getIdioma(): string {
        return this.idioma;
    }

    public toString(): string {
        return super.toString() +
            "\nAutor: " + this.autor + 
            "\nNº de pagina: " + this.num_pagina + 
            "\nIdioma: " + this.idioma;
    }
}