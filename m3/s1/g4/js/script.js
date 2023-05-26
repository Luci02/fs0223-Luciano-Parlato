"use strict";
class Capo {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    get mostraPrezzo() {
        return this.prezzoivainclusa + '€';
    }
}
let capiAbbigliamento = [];
fetch('../Abbigliamento.json')
    .then(res => {
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error('Errore nel recupero dei dati dalla fetch');
    }
})
    .then(list => {
    list.forEach((capo) => {
        capiAbbigliamento.push(new Capo(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoivaesclusa, capo.prezzoivainclusa, capo.disponibile, capo.saldo));
    });
    console.log(capiAbbigliamento);
    for (let index = 0; index < capiAbbigliamento.length; index++) {
        console.log('Il capo', capiAbbigliamento[index].capo, 'costa', capiAbbigliamento[index].mostraPrezzo);
    }
})
    .catch((err) => console.log(err));
//# sourceMappingURL=script.js.map