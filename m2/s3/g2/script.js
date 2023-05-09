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

let seconds = sessionStorage.getItem("secondi") || 0;
let minutes = sessionStorage.getItem("minuti") || 0;
let hours = sessionStorage.getItem("ore") || 0;

let secondsContenitor = document.getElementById('secondi');
secondsContenitor.innerText = seconds;

let minutesContenitor = document.getElementById('minuti');
minutesContenitor.innerText = minutes;

let hoursContenitor = document.getElementById('ore');
hoursContenitor.innerText = hours;

setInterval(() => {
    let secondsCounter = sessionStorage.getItem("secondi");
    secondsCounter++;
    sessionStorage.setItem("secondi", secondsCounter);
    secondsContenitor.innerText = secondsCounter;

    if(secondsCounter == 59){
        sessionStorage.setItem("secondi", 0);
        let minutesCounter = sessionStorage.getItem("minuti");
        if(minutesCounter < 60){
            minutesCounter++;
            sessionStorage.setItem("minuti", minutesCounter);
            minutesContenitor.innerText = sessionStorage.getItem("minuti");
        }else{
            sessionStorage.setItem("minuti", 0);
            let hoursCounter = sessionStorage.getItem('ore');
            hoursCounter++;
            sessionStorage.setItem('ore', hoursCounter);
            hoursContenitor.innerText = sessionStorage.getItem("ore");
        }
    }
}, 1000);