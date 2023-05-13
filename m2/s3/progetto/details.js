// product-container
let loadProduct = function(){
    const URL = 'https://striveschool-api.herokuapp.com/api/product/';
    const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTdkMDg4Zjc0MDAwMTQyODc1ZWEiLCJpYXQiOjE2ODM4ODgwODAsImV4cCI6MTY4NTA5NzY4MH0.d17UDiic9aA3MmNZEOCdXxXqDc4OWjkNmApeqaiGvaA';
    let searchBarContent = new URLSearchParams(window.location.search);
    let productID = searchBarContent.get('productID');

    fetch(URL + productID, { 
        headers: {
            "Authorization": `Bearer ${KEY}`,
        }
    })
    .then( res => {
        if (res.ok) {
            return res.json();
        }else{
            throw new Error('Problema nell\'eliminazione del prodotto');
        }
    })
    .then( product => {
        let productContainer = document.getElementById('product-container');

        productContainer.innerHTML += `
        <div class="row d-flex">
            <div class="col">
                <img class="img-fluid" src="${product.imageUrl}" alt="Product Image" />
            </div>
            <div class="col">
                <h1>${product.name}</h1>
                <h3>${product.brand}</h3>
                <p class="fs-3 fw-light">${product.price} €</p>
                <p class="mt-5">${product.description}</p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <a href="index.html">
                    <button class="btn btn-primary w-100">Torna alla pagina HOME</button>
                </a>
            </div>
        </div>
        `
    } )
    .catch(err => console.log(err))
}

window.onload = function(){
    loadProduct();
}