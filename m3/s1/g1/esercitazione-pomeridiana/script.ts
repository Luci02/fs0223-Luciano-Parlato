function getRandomNumber(): number {
    return Math.ceil(Math.random() * 100);
}

function checkNumber(numberP1: number, numberP2: number): void {

    // Genero un numero casuale
    let randomNumberGenerated: number = getRandomNumber();

    console.log("Numero casuale generato:", randomNumberGenerated);
    console.log("Numero del giocatore 1:", numberP1);
    console.log("Numero del giocatore 2:", numberP2);

    if (numberP1 == randomNumberGenerated) {
        // Se il numero del primo giocatore è uguale al numero randomico allora ha indovinato
        console.log("Il giocatore 1 ha azzeccato il numero casuale: ", randomNumberGenerated);
    } else if (numberP2 == randomNumberGenerated) {
        // Se il numero del secondo giocatore è uguale al numero randomico allora ha indovinato
        console.log("Il giocatore 2 ha azzeccato il numero casuale: ", randomNumberGenerated);
    } else {      
        // Se nessuno dei due giocatori ha indovinato, allora calcolo la differenza tra i numeri scelti e il numero generato casualmente
        let numberPlayer1Diff: number = Math.abs(numberP1 - randomNumberGenerated);
        let numberPlayer2Diff: number = Math.abs(numberP2 - randomNumberGenerated);

        console.log("differenza Giocatore1:", numberPlayer1Diff);
        console.log("differenza Giocatore2:", numberPlayer2Diff);

        if (numberPlayer1Diff > numberPlayer2Diff) {
            // Se la differenza tra il numero casuale e il numero scelto del giocatore 1 è maggiore a quella del giocatore 2, allora il secondo giocatore si è avvicinato maggiormente al numero randomico
            console.log( "Nessuno dei due giocatori ha indovinato il numero casuale, ma il giocatore 2 si è avvicinato di più!" );
        } else {
            console.log( "Nessuno dei due giocatori ha indovinato il numero casuale, ma il giocatore 1 si è avvicinato di più!" );
        }
    }
}


window.onload = function () {
    let numberPlayer1: number = getRandomNumber();
    let numberPlayer2: number = getRandomNumber();
    checkNumber(numberPlayer1, numberPlayer2);
}