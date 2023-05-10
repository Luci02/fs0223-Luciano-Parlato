// https://striveschool-api.herokuapp.com/books
let url = 'https://striveschool-api.herokuapp.com/books';


fetch(url)
.then(response => response.json())
.then( arrayLibrary => {
    console.log(arrayLibrary);

    let cardContenitor = document.querySelector('div.container-fluid div.row')
    console.log(cardContenitor);
    arrayLibrary.forEach(element => {
        cardContenitor.innerHTML += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${element.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text"><span class="fw-bold">Category:</span> ${element.category}</p>
                    <p class="card-text"><span class="fw-bold">Price:</span> ${element.price}</p>
                </div>
            </div>
        </div>
        `
    });
} )
.catch(error => console.log(error))