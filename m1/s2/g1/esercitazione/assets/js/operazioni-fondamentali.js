function somma() {
    var risultato = Number(n1.value) + Number(n2.value);
    document.getElementById('somma').innerHTML = Number(n1.value) + " + " + Number(n2.value) + " = " + risultato;
}

function sottrazione() {
    var risultato = Number(n1.value) - Number(n2.value);
    document.getElementById('sottrazione').innerHTML = Number(n1.value) + " - " + Number(n2.value) + " = " + risultato;
}

function moltiplicazione() {
    var risultato = Number(n1.value) * Number(n2.value);
    document.getElementById('moltiplicazione').innerHTML = Number(n1.value) + " x " + Number(n2.value) + " = " + risultato;
}

function divisione() {
    var risultato = Number(n1.value) / Number(n2.value);
    document.getElementById('divisione').innerHTML = Number(n1.value) + " : " + Number(n2.value) + " = " + risultato;
}

function operazioniFondamentali() {
    somma();
    sottrazione();
    moltiplicazione();
    divisione();
}