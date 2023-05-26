"use strict";
class RegistroChiamate {
    constructor(obj) {
        this.id = obj.id;
        this.durata = obj.durata;
        this.dataOra = obj.dataOra;
    }
}
class Smartphone {
    constructor() {
        this.carica = 5;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
        console.log('La tua ricarica di ' + euro + '€ è avvenuta con successo');
    }
    numero404() {
        return 'Il credito residuo è: ' + this.carica.toFixed(2) + '€';
    }
    getNumeroChiamate() {
        console.log(`Hai effettuato ${this.numeroChiamate} chiamate`);
        return this.numeroChiamate;
    }
    chiamata(min) {
        if ((min * this.costoMinuto) <= this.carica) {
            // incremento il numero di chiamate effettuate
            this.numeroChiamate++;
            // riduco il credito
            this.carica -= (min * this.costoMinuto);
            console.log('il costo della chiamata è stato di ', (min * this.costoMinuto));
            // Aggiungo la chiamata al registro
            this.registroChiamate.push({
                id: this.registroChiamate.length + 1,
                durata: min,
                dataOra: new Date()
            });
        }
        else {
            console.log('Non hai credito sufficiente per effettuare la chiamata');
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    mostraRegistroChiamate() {
        console.log(this.registroChiamate);
        this.registroChiamate.forEach((chiamata) => {
            var _a, _b;
            console.log('Hai effettuato una chiamata il giorno: '
                + ((_a = chiamata.dataOra) === null || _a === void 0 ? void 0 : _a.toLocaleDateString('it-IT'))
                + ' alle ore '
                + ((_b = chiamata.dataOra) === null || _b === void 0 ? void 0 : _b.toLocaleTimeString('it-IT'))
                + ' che è durata '
                + chiamata.durata
                + ' minuti.');
        });
    }
    filtraChiamatePerDataOra(data, ora) {
        console.log('Chiamate effettuate:');
        this.registroChiamate.forEach((element) => {
            var _a, _b;
            if (((_a = element.dataOra) === null || _a === void 0 ? void 0 : _a.toLocaleDateString('it-IT')) == data || ((_b = element.dataOra) === null || _b === void 0 ? void 0 : _b.getHours()) === ora) {
                console.log(`${element.id} - Durata ${element.durata} minuti`);
            }
        });
    }
}
let firstUser = new Smartphone();
let secondUser = new Smartphone();
let thirdUser = new Smartphone();
// Primo utente
console.log(firstUser.numero404());
firstUser.ricarica(5);
console.log(firstUser.numero404());
firstUser.getNumeroChiamate();
firstUser.chiamata(1);
firstUser.getNumeroChiamate();
firstUser.chiamata(5);
firstUser.chiamata(4);
console.log(firstUser.numero404());
firstUser.azzeraChiamate();
firstUser.getNumeroChiamate();
firstUser.mostraRegistroChiamate();
firstUser.filtraChiamatePerDataOra(new Date('26/05/2023'), 17);
// Secondo utente
console.log(secondUser.numero404());
secondUser.ricarica(5);
console.log(secondUser.numero404());
secondUser.getNumeroChiamate();
secondUser.chiamata(1);
secondUser.getNumeroChiamate();
secondUser.chiamata(5);
secondUser.chiamata(4);
console.log(secondUser.numero404());
secondUser.azzeraChiamate();
secondUser.getNumeroChiamate();
secondUser.mostraRegistroChiamate();
secondUser.filtraChiamatePerDataOra(new Date('26/05/2023'), 17);
// Terzo utente
console.log(thirdUser.numero404());
thirdUser.ricarica(5);
console.log(thirdUser.numero404());
thirdUser.getNumeroChiamate();
thirdUser.chiamata(1);
thirdUser.getNumeroChiamate();
thirdUser.chiamata(5);
thirdUser.chiamata(4);
console.log(thirdUser.numero404());
thirdUser.azzeraChiamate();
thirdUser.getNumeroChiamate();
thirdUser.mostraRegistroChiamate();
thirdUser.filtraChiamatePerDataOra(new Date('26/05/2023'), 17);
