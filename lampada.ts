/*  
Feito por Marcos Alexandre
Data: 13/08/2021
Código Nº 010
Instituição: Fatec
*/

class Lampada {
    private estado: number;

    constructor(estado: number){
        this.estado = estado;
    }

    acender() {
        this.estado = 1;
    }

    apagar() {
        this.estado = 0;
    }

    getEstado(): string{
        if (this.estado ==0)
            return "Desligado";
        else
            return 'Ligada';
    }
}

let sal: Lampada = new Lampada(0);
console.log('Lampada da sala: ' + sal.getEstado())
sal.acender();
console.log('Lampada da sala: ' + sal.getEstado())

