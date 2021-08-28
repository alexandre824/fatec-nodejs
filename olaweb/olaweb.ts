/*  
Feito por Marcos Alexandre
Data: 27/08/2021
Código Nº 030
Instituição: Fatec
*/
var fs = require('fs');
var express = require('express');
var app = express();

var servidor = app.listen(8080, function() {
    var porta = servidor.address().port;
    console.log("Servidor executando na porta %s", porta);
}) 

app.get('/', function (req: any, res: any)  {
    fs.readFile('ola.html', function (erro: any, dado: any) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(dado);
        res.end();
    });
});

app.get('/pag', function (req: any, res: any)  {
    fs.readFile('pagina.html', function (erro: any, dado: any) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(dado);
        res.end();
    });
});

app.get('/teste', function (req:any, res:any) {
    let historicoPreco: number[] = [1990.00, 2100.00, 1999]
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Historico de preços</h1>')
    for (let i in historicoPreco) {
        res.write(historicoPreco[i] + '<br>');
    }
    res.end();
});
