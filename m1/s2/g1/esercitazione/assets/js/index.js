// alert('Usa il pop up per dare dei messaggi');
// window.alert('Sto studiando JS');

function esercizioExtra() {
    location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

var nome = prompt('Qual è il tuo nome?');
var cognome = prompt('Qual è il tuo cognome?');

var nomeMaiusc = nome.charAt(0).toUpperCase() + nome.slice(1);
var cognomeMaiusc = cognome.charAt(0).toUpperCase() + cognome.slice(1);

console.log(nome + " " + cognome);
document.getElementById('benvenuto').innerHTML = "Benvenuto " + nomeMaiusc + " " + cognomeMaiusc;