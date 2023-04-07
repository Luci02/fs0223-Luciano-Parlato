/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (const pet of pets) {
  console.log(pet);
}
console.error('fine primo esercizio');

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
for (const pet of pets) {
  console.log(pet);
}
console.error('fine secondo esercizio');

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
for (const pet of pets) {
  console.log(pet);
}
console.error('fine terzo esercizio');

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const element = pets.splice(pets[0], 1)[0];
pets.splice(pets.length, 0, element);
console.log(pets);

console.error('fine quarto esercizio');

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach((element) => {
  element.licencePlate = 'GG002WP';
});
console.log(cars);
console.error('fine quinto esercizio');

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: 'Jaguar',
  model: 'F-Pace',
  color: 'black',
  trims: ['r-dynamic', 'Sport-pack', 'SE'],
});
console.log(cars);

for (const elemento of cars) {
  elemento.trims.pop();
}
console.log(cars);

console.error('fine sesto esercizio');

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

cars.forEach((element) => {
  justTrims.push(element.trims[0]);
});

console.log(justTrims);

console.error('fine settimo esercizio');

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (const auto of cars) {

  if (auto.color.startsWith('b')) {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }

}

console.error('fine ottavo esercizio');

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

i = 0;
while (i < numericArray.length) {
  if (numericArray[i] === 32) {
    console.log(numericArray[i]);
    break;
  } else {
    console.log(numericArray[i]);
  }
  i++;
}

console.error('fine nono esercizio');

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]
const numberArray = [];

console.log(numberArray);
for (const lettera of charactersArray) {
  switch (true) {
    case lettera == 'a':
      numberArray.push(1);
      break;
    case lettera == 'b':
      numberArray.push(2);
      break;
    case lettera == 'c':
      numberArray.push(3);
      break;
    case lettera == 'd':
      numberArray.push(4);
      break;
    case lettera == 'e':
      numberArray.push(5);
      break;
    case lettera == 'f':
      numberArray.push(6);
      break;
    case lettera == 'g':
      numberArray.push(7);
      break;
    case lettera == 'h':
      numberArray.push(8);
      break;
    case lettera == 'i':
      numberArray.push(9);
      break;
    case lettera == 'j':
      numberArray.push(10);
      break;
    case lettera == 'k':
      numberArray.push(11);
      break;
    case lettera == 'l':
      numberArray.push(12);
      break;
    case lettera == 'm':
      numberArray.push(13);
      break;
    case lettera == 'n':
      numberArray.push(14);
      break;
    case lettera == 'o':
      numberArray.push(15);
      break;
    case lettera == 'p':
      numberArray.push(16);
      break;
    case lettera == 'q':
      numberArray.push(17);
      break;
    case lettera == 'r':
      numberArray.push(18);
      break;
    case lettera == 's':
      numberArray.push(19);
      break;
    case lettera == 't':
      numberArray.push(20);
      break;
    case lettera == 'u':
      numberArray.push(21);
      break;
    case lettera == 'v':
      numberArray.push(22);
      break;
    case lettera == 'w':
      numberArray.push(23);
      break;
    case lettera == 'x':
      numberArray.push(24);
      break;
    case lettera == 'y':
      numberArray.push(25);
      break;
    case lettera == 'z':
      numberArray.push(26);
      break;
    default:
      console.log('Valore al di fuori delle lettere dell\'alfabeto italiano');
  }
}
console.log(numberArray);
console.error('fine decimo esercizio');


