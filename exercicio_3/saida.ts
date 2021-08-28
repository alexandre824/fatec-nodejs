/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 026
Instituição: Fatec
*/

import { Efetivo } from "./efetivo";
import { Temporario } from "./temporario";
import { Terceirizado } from "./terceirizado";

let efetivo: Efetivo = new Efetivo(123, 'Juca', 'adm', 50000.90, 'boa', '27/02/1990', '00/00/0000')
let temporario: Temporario = new Temporario(587, 'bil', 'ajudante', 5000, 'boa', '12/12/2019', '10')
let terceirizado: Terceirizado = new Terceirizado(555, 'Bete', 'Secretaria', 100000.90, 'boa', '10/05/2018', '12 anos', 'Vamos.la' )

console.log ('\n---\n' + efetivo.toString())
console.log ('\n---\n' + temporario.toString())
console.log ('\n---\n' + terceirizado.toString())

