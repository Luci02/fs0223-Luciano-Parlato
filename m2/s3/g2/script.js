let form = document.querySelector('form');
let nameSaved = document.getElementById('name-saved');

nameSaved.innerText = localStorage.getItem("nome");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    nameSaved.innerText = localStorage.getItem("nome");

    let inputName = document.getElementById("name");
    let inputNaveValue = inputName.value;

    localStorage.setItem("nome", inputNaveValue);

    inputName.value = "";
    inputName.focus();
})


let removeName = document.getElementById('remove-name');
removeName.addEventListener('click', () => {

    localStorage.removeItem("nome");

})

// ESERCIZIO 2

sessionStorage.setItem("secondi", 0);
sessionStorage.setItem("minuti", 0);
sessionStorage.setItem("ore", 0);

// INIZIALIZZO A 0 LO SPAN SECONDI
let secondsContenitor = document.getElementById('secondi');
secondsContenitor.innerText = sessionStorage.getItem("secondi");

// INIZIALIZZO A 0 LO SPAN MINUTI
let minutesContenitor = document.getElementById('minuti');
minutesContenitor.innerText = sessionStorage.getItem("minuti");

// INIZIALIZZO A 0 LO SPAN ORE
let hoursContenitor = document.getElementById('ore');
hoursContenitor.innerText = sessionStorage.getItem("ore");

// VARIABILI SECONDI, MINUTI, ORE
let secondsCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;

setInterval(() => {
    secondsCounter++;
    if (secondsCounter > 59) {
        sessionStorage.setItem("secondi", 0);
        secondsCounter = sessionStorage.getItem("secondi");

        minutesCounter++;
        if(minutesCounter > 59){
            sessionStorage.setItem("minuti", 0);
            minutesCounter = sessionStorage.getItem("minuti");

            hoursCounter++;
            sessionStorage.setItem("ore", hoursCounter);
            hoursContenitor.innerText = sessionStorage.getItem("ore");
        }
        minutesContenitor.innerText = minutesCounter;
        sessionStorage.setItem("minuti", minutesCounter);

    }
    secondsContenitor.innerText = secondsCounter;
    sessionStorage.setItem("secondi", secondsCounter);

    

}, 1000);

// setInterval(() => {

//     console.log(seconds, typeof seconds);
//     seconds++;
//     sessionStorage.setItem("secondi", seconds);
//     secondsContenitor.innerText = seconds;

//     if(seconds == 60){

//         minutes++;
//         sessionStorage.setItem("minuti", minutes);
//         minutesContenitor.innerText = minutes;

//     }

// }, 1000);