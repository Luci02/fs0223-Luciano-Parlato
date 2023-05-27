"use strict";
class Smartphone {
    constructor() {
        this.carica = 5;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
        console.log('La tua ricarica da ' + euro + '€ è avvenuta con successo');
    }
    numero404() {
        return 'Il credito residuo è: ' + this.carica.toFixed(2) + '€';
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        if ((min * this.costoMinuto) <= this.carica) {
            // incremento il numero di chiamate effettuate
            this.numeroChiamate++;
            // riduco il credito
            this.carica -= (min * this.costoMinuto);
            console.log('Hai effettuato una chiamata durata', min, 'min');
            console.log('Il costo della chiamata è stato di', (min * this.costoMinuto) + '€');
            // Creo un oggetto da inserire nell'array
            let chiamata = {
                id: this.registroChiamate.length + 1,
                durata: min,
                dataOra: new Date(),
            };
            // Aggiungo la chiamata al registro
            this.registroChiamate.push(chiamata);
        }
        else {
            console.log('Non hai credito sufficiente per effettuare la chiamata');
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    mostraRegistroChiamate() {
        this.registroChiamate.forEach((chiamata) => {
            console.log('Hai effettuato una chiamata il giorno: '
                + chiamata.dataOra.toLocaleDateString('it-IT')
                + ' alle ore '
                + chiamata.dataOra.toLocaleTimeString('it-IT')
                + ' che è durata '
                + chiamata.durata
                + ' minuti.');
        });
    }
    filtraChiamatePerDataOra(data) {
        return this.registroChiamate.filter((element) => {
            if (element.dataOra.toLocaleDateString('it-IT') == data.toLocaleDateString('it-IT')) {
                return element;
            }
        });
    }
}
let firstUser = new Smartphone();
let secondUser = new Smartphone();
let thirdUser = new Smartphone();
// Primo utente
firstUser.ricarica(5);
console.log(firstUser.numero404());
console.log('Il numero di chiamate fino ad ora è di:', firstUser.getNumeroChiamate(), 'chiamate');
firstUser.chiamata(5);
firstUser.chiamata(1);
firstUser.chiamata(10);
firstUser.chiamata(100);
console.log(firstUser.numero404());
console.log('Il numero di chiamate fino ad ora è di:', firstUser.getNumeroChiamate(), 'chiamate');
console.log('Chiamate azzerate');
firstUser.azzeraChiamate();
console.log('Il numero di chiamate fino ad ora è di:', firstUser.getNumeroChiamate(), 'chiamate');
firstUser.mostraRegistroChiamate();
console.log(firstUser.filtraChiamatePerDataOra(new Date('2023/05/27')));
// Secondo utente
secondUser.ricarica(5);
console.log(secondUser.numero404());
console.log('Il numero di chiamate fino ad ora è di:', secondUser.getNumeroChiamate(), 'chiamate');
secondUser.chiamata(5);
secondUser.chiamata(1);
secondUser.chiamata(10);
secondUser.chiamata(100);
console.log(secondUser.numero404());
console.log('Il numero di chiamate fino ad ora è di:', secondUser.getNumeroChiamate(), 'chiamate');
console.log('Chiamate azzerate');
secondUser.azzeraChiamate();
console.log('Il numero di chiamate fino ad ora è di:', secondUser.getNumeroChiamate(), 'chiamate');
secondUser.mostraRegistroChiamate();
console.log(secondUser.filtraChiamatePerDataOra(new Date('2023/05/27')));
// Terzo utente
thirdUser.ricarica(5);
console.log(thirdUser.numero404());
console.log('Il numero di chiamate fino ad ora è di:', thirdUser.getNumeroChiamate(), 'chiamate');
thirdUser.chiamata(5);
thirdUser.chiamata(1);
thirdUser.chiamata(10);
thirdUser.chiamata(100);
console.log(thirdUser.numero404());
console.log('Il numero di chiamate fino ad ora è di:', thirdUser.getNumeroChiamate(), 'chiamate');
console.log('Chiamate azzerate');
thirdUser.azzeraChiamate();
console.log('Il numero di chiamate fino ad ora è di:', thirdUser.getNumeroChiamate(), 'chiamate');
thirdUser.mostraRegistroChiamate();
console.log(thirdUser.filtraChiamatePerDataOra(new Date('2023/05/27')));
//# sourceMappingURL=script.js.map