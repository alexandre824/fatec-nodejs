/*  
Feito por Marcos Alexandre
Data: 06/08/2021
Código Nº 004 
Instituição: Fatec
*/



// Let define a variavel
let nome: string = 'Marcos';
// Nunber pode ser tanto inteiro como flutuante
let idade: number = 19;
let altura: number = 1.70;
// 
let preco: number = 2000.90;
let descricao: string = 'geladeira';
let disponivel: boolean = true;
// any é quando não tem indentificação de tipo
let garantia: any = 12;
// Vetor, é dinamico não precisa definir o tamanho
let historico_preco: number[] = [1990.00, 2100.00, 2052.00, 1990.00];
garantia = '12 meses'
console.log ('Olá, ' + nom + '!');
console.log ('Dscrição do produto:' + descricao);
console.log ('Preço: R$ ' + preco);
console.log ('Garantia: ' + garantia);
// o .length mostra o tamanha do vetor
console.log ('Tamanho do vetor:' + historico_preco.length);
console.log(' Historico de preços: ');
// Percorrendo o Vetor (imprimindo todos)
for (let i in historico_preco) { console.log(historico_preco[i]); }
// Mostra somente o selecionado do vetor
let p:number = 2;
console.log('Terceiro valor:' + historico_preco[p]);
// Pegando o ultimo valor do vetor
let posicao: number = historico_preco.length - 1;
console.log('Ultimo valor: ' + historico_preco[posicao]);
