/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {

   let h1 = document.querySelector('h1');
   h1.textContent = 'Titolo cambiato dalla funzione';

}

changeTitle();

/* ESERCIZIO 2
   Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {

   let h1 = document.querySelector('h1');
   h1.classList.add('myHeading');

}

addClassToTitle();

/* ESERCIZIO 3
   Scrivi una funzione per che cambi il testo dei p figli di un div
  */

const changePcontent = function () {

   let p = document.querySelectorAll('div p');
   for (let element of p) {
      element.textContent = 'Testo del paragrafo modificato dalla funzione';
   }

}

changePcontent();

/* ESERCIZIO 4
   Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {

   let a = document.querySelectorAll('a:not(footer a)');

   for (let element of a) {
      element.href = 'https://www.google.com';
   }

}

changeUrls();

/* ESERCIZIO 5
   Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {

   let secondList = document.querySelector('#secondList');
   let newLi = document.createElement('li');

   newLi.textContent = '4th';
   secondList.append(newLi);

}

addToTheSecond();

/* ESERCIZIO 6
   Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/

const addParagraph = function () {

   let firstDiv = document.querySelector('.p-container');
   let secondP = document.createElement('p');

   secondP.textContent = 'Testo secondo paragrafo aggiunto dalla funzione';
   firstDiv.append(secondP);

}

addParagraph();

/* ESERCIZIO 7
   Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {

   let firstList = document.querySelector('#firstList');
   firstList.hidden = true;
   // firstList.style.display = 'none';

}

hideFirstUl();

/* ESERCIZIO 8 
   Scrivi una funzione che renda verde il background di ogni lista non ordinata
  */

const paintItGreen = function () {

   let ulList = document.querySelectorAll('ul');

   for (let ul of ulList) {
      ul.style.backgroundColor = 'green';
   }

}

paintItGreen();

/* ESERCIZIO 9
   Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
  */

const makeItClickable = function () {

   let textH1 = document.querySelector('h1');

   textH1.textContent = textH1.textContent.slice(0, -1);

}

document.querySelector('h1')
.addEventListener('click', makeItClickable);

/* ESERCIZIO 10
   Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
  */

const revealFooterLink = function () {
   let aLink = document.querySelector('footer a');
   alert(aLink.href);

}

document.querySelector('footer')
.addEventListener('click', revealFooterLink);

/* ESERCIZIO 11
   Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
   La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo

   createelement table
   tr con dentro 4 th(imm, nome pro, qta, prezzo)
   altri 4 tr con td - ciclando 5 volte
*/

const generateTable = function () {

   let target = document.querySelector('#table-area');

   let tabella = document.createElement('table');
   let thead = document.createElement('thead');
   let primaTr = document.createElement('tr');

   thead.append(primaTr);
   tabella.append(thead);
   target.append(tabella);

   let colonne = ['immagine', 'nome prodotto', 'quantità', 'prezzo'];

   for(let colonna of colonne){
      let th = document.createElement('th');
      th.textContent = colonna;
      primaTr.append(th);
   }

   let dati = [
      {
         immagine: 'urlimmagine',
         nome_prodotto: 'lorem ipsum',
         quantità: 1000,
         prezzo: 193458
      },
      {
         immagine: 'urlimmagine',
         nome_prodotto: 'lorem ipsum',
         quantità: 34,
         prezzo: 19087
      },
      {
         immagine: 'urlimmagine',
         nome_prodotto: 'lorem ipsum',
         quantità: 75,
         prezzo: 1124
      },
      {
         immagine: 'urlimmagine',
         nome_prodotto: 'lorem ipsum',
         quantità: 12,
         prezzo: 113
      },
      {
         immagine: 'urlimmagine',
         nome_prodotto: 'lorem ipsum',
         quantità: 9078,
         prezzo: 1124
      }
   ];

}

generateTable();

/* ESERCIZIO 12
   Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri

   agganciare alla tabella con una tr nuova e aggiungerla alla tabella
*/

const addRow = function () {


}

/* ESERCIZIO 14
  Crea una funzione che nasconda le immagini della tabella quando eseguita

  creare un bottone al cui click parte la funzione
*/

const hideAllImages = function () {


}

/* EXTRA ESERCIZIO 15
  Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {


}

/* EXTRA ESERCIZIO 16
  Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)

  queryselectorall(tutti gli elementi della pagina che contengono testo) h1,h2,li,a,p
  ciclo tutti
  replaceall
  stringa modificata la rimetto dentro l'elemento che sto ciclando
*/

const deleteVowels = function () {


}