let key = 'aknIEkh8JmV6Km7vKrhG60gBe0af2x0tkG0JEyLEUdwsm6U9VbnCiDHc'

let loadImagesBtn = document.getElementById('load-images');
let loadSecondaryImages = document.getElementById('load-secondary-images');
let searchForm = document.getElementById('search-form');

let fetchFunction = function(searchParameter){

    fetch(`https://api.pexels.com/v1/search?query=${searchParameter}&per_page=9`, {
        method: "GET",
        headers: { "Authorization": `${key}` }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Errore nella richiesta al server');
            }
        })
        .then(photo => {

            let cardsImg = document.querySelectorAll('.card.mb-4.shadow-sm');

            cardsImg.forEach((image, i) => {

                let id = document.querySelectorAll('small.text-muted');
                id[i].innerText = photo.photos[i].id;

                image.firstElementChild.remove(); // Rimuovo l'elemento SVG dal DOM

                // Creo il tag immagine
                let newImg = document.createElement('img')
                newImg.src = photo.photos[i].src.medium;
                newImg.width = "100%"
                newImg.height = '225'
                newImg.style.objectFit = 'cover';
                newImg.classList.add('card-img-top')
                image.insertBefore(newImg, image.firstChild); // Inserisco il tag appena creato prima del primo child della card
            });


        })
        .catch(err => console.log(err))

}

// Al click del bottone "Load Images" si scatena questa funzione
loadImagesBtn.onclick = (() => {
    fetchFunction('AI');
})

// Al click del bottone 
loadSecondaryImages.onclick = (() => {
    fetchFunction('NATURA');
})

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputField = searchForm.getElementsByTagName('input')[0];
    
    fetchFunction(inputField.value);
})

let hideElement = function(btn){
    btn = btn.document.activeElement;

    col = btn.closest('.col-md-4');

    col.hidden = true;
}

let changeEditButtons = function(){
    let editButtonsArray = document.querySelectorAll('.btn-group button:last-child')

    editButtonsArray.forEach( button => {
        button.innerText = 'Hide';

        button.addEventListener('click', () => {
            hideElement(this); 
        })
    } )
}

window.onload = function(){
    changeEditButtons();
}