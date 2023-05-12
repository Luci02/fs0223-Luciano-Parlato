let getProducts = function(){
    let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTdkMDg4Zjc0MDAwMTQyODc1ZWEiLCJpYXQiOjE2ODM4ODgwODAsImV4cCI6MTY4NTA5NzY4MH0.d17UDiic9aA3MmNZEOCdXxXqDc4OWjkNmApeqaiGvaA';
    
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            "Authorization": `Bearer ${key}`
        }
    })
    .then( res => {
        if(res.ok){
            return res.json();
        }else{
            throw new Error('Errore nel recupero dei prodotti dal server!');
        }
    })
    .then( productsArray => {
        console.log('Array ottenuto dalla fetch con metodo GET', productsArray);

        let productsContainer = document.getElementById('products-container');
        productsArray.forEach( (product) => {
            productsContainer.innerHTML += `
            <div class="col-10 mx-auto my-4 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <img src="${product.imageUrl}" class="card-img-top object-fit-contain" height="300" alt="Product Image">
                    <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <h6 class="card-subtitle mb-2">${product.brand}</h6>
                      <h6 class="card-subtitle mb-2">${product.price}€</h6>
                      <p class="card-text">${product.description.slice(0, 60)} ...</p>
                      <a class="d-block mb-2" href="details.html?productID=${product._id}">Scopri di più</a>
                      <a href="back-office.html?productID=${product._id}" class="btn btn-primary w-100">Modifica</a>
                    </div>
                </div>
            </div>
            `
        });

        if(productsContainer.firstElementChild){
            let warningContainer = document.getElementById('warning-container');
            warningContainer.remove();
        }
    })
    .catch( err => console.log(err) )
}

// Funzione che aggiunge l'anno al footer della pagina
let footerYear = function(){
    let spanYear = document.getElementById('footer-year');
    spanYear.innerText = new Date().getFullYear();
}

window.onload = function(){
    getProducts();
    footerYear();
}