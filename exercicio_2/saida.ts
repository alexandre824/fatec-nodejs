/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 019
Instituição: Fatec
*/

import { Caminhao } from "./caminhao";
import { Esporte } from "./esporte";
import { OffRoad } from "./off_road";
import { Onibus } from "./onibus";

let caminhao: Caminhao = new Caminhao(1, '123abc', "Fiat", 'Show', 2021, 'Preto', 10000, 7);

let esporte: Esporte = new Esporte(2,'789rts', 'Ford', "verona", 2001, 'Amarelo', "200", "500 MPH");

let onibus: Onibus = new Onibus(3, "194as6", "Voiagem", "modelo bom", 2037, "Preto", 98, 10 );

let off: OffRoad = new OffRoad(4, 'sf645', 'Doger', 'Camaro', 2012, 'Amarelo', '10 Polegadas', 'mono');

console.log ('\n---\n' + caminhao.toString())
console.log ('\n---\n' + esporte.toString())
console.log ('\n---\n' + onibus.toString())
console.log ('\n---\n' + off.toString())