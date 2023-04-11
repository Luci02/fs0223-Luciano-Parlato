// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1 CORRETTO
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(array) {
    let sum = 0;
    for (numero of array) {
        sum += numero;
        if (numero > 5) {
            console.log(`${numero} è maggiore di 5`);
        } else {
            console.log(`${numero} è minore di 5`);
        }
    }
    return sum;
}

console.log(checkArray(giveMeRandom(6)));

/* EXTRA 2 
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
    {
        id: 1,
        name: 'Apple iPhone 14 (128 GB)',
        price: 900,
        quantity: 100
    },
    {
        id: 2,
        name: 'Samsung Galaxy S23',
        price: 850,
        quantity: 200
    },
    {
        id: 3,
        name: 'Realme 10',
        price: 280,
        quantity: 500
    }
];

function shoppingCartTotal(element) {
    let total = 0;
    for (let i of element) {
        total += i.price * i.quantity;
    }
    return total;
}


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

//non ho capito cosa intende l'esercizio

function addToShoppingCart(params) {

}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
    let max = 0;
    for (let i of shoppingCart) {
        if (i.price > max) {
            max = i.price;
        }
    }
    return max;
}

/* EXTRA 5 CORRETTO
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x) {
    let contatore = 0;
    do {
        console.log(Math.floor(Math.random() * 10));
        if (Math.floor(Math.random() * 10) > x) {
            contatore++;            
        } 
    } while ( contatore < 3 );
}

/* EXTRA 7 CORRETTO
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

arrayNum = [1,'prova stringa',2,3,4,5,true,6,7,8,9,10];

function average(array) {
    let media = 0;
    let contatoreNumeri = 0;
    for (let i of array) {
        if(typeof i == 'number'){
            media += i;
            contatoreNumeri++;
        }
    }    
    return media/contatoreNumeri;
}

/* EXTRA 8 CORRETTO
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

arrayStr = ['weiutg', 'wet', 'hgwrjqrtb', 'uywqgr'];

function longest(array) {
    let longest = '';
    for (let i of array) {
        if (i.length > longest.length) {
            longest = i;
        }
    }
    return longest;
}

console.log(longest(arrayStr));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function antiSpam(emailContent) {
    emailContent = emailContent.toUpperCase();
    if (emailContent.includes('SPAM') || emailContent.includes('SCAM')) {
        return false;
    } else {
        return true;
    }
}

console.log(antiSpam('questa mail è pubblicità'));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

let now = new Date();
let data2 = new Date('02/02/2020');

if (now < data2){
    
}

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
