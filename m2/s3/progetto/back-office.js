// Funzione che aggiunge l'anno al footer della pagina
let footerYear = function(){
    let spanYear = document.getElementById('footer-year');
    spanYear.innerText = new Date().getFullYear();
}

let createModifyEvent = function(){
    const URL = 'https://striveschool-api.herokuapp.com/api/product/';
    const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTdkMDg4Zjc0MDAwMTQyODc1ZWEiLCJpYXQiOjE2ODM4ODgwODAsImV4cCI6MTY4NTA5NzY4MH0.d17UDiic9aA3MmNZEOCdXxXqDc4OWjkNmApeqaiGvaA';

    let addressBarContent = new URLSearchParams(window.location.search);
    let productId = addressBarContent.get('productID');
    console.log('ID del prodotto:', productId);

    let productName = document.getElementById('product-name')
    let productDescription = document.getElementById('product-description')
    let productBrand = document.getElementById('product-brand')
    let productImage = document.getElementById('product-image')
    let productPrice = document.getElementById('product-price')

    class Product {
        constructor(
            name = productName.value,
            description = productDescription.value,
            brand = productBrand.value,
            imgUrl = productImage.value,
            price = productPrice.value){
            this.name = name,
            this.description = description,
            this.brand = brand,
            this.imageUrl = imgUrl,
            this.price = price
        }
    }

    if(productId){
        document.getElementsByTagName('h1')[0]
        .innerText = 'Modifica il prodotto';

        document.getElementById('save-product')
        .innerText = 'modifica prodotto';

        let deleteButton = document.getElementById('delete-product');
        deleteButton.classList.toggle('d-none');

        fetch(URL + productId, {
            headers: {
                "Authorization": `Bearer ${KEY}`,
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();                
            }else{
                throw new Error("Errore nel recupero del prodotto");
            }
        })
        .then(product => {
            console.log('DATI DEL PRODOTTO', product)
            productName.value = product.name;
            productDescription.value = product.description;
            productBrand.value = product.brand;
            productImage.value = product.imageUrl;
            productPrice.value = product.price;
        })
        .catch(err => console.log(err))

        deleteButton.addEventListener('click', () => {

            let confirm = window.confirm('Confermi di voler cancellare il prodotto?');

            if(confirm){
                fetch(URL + productId, { 
                    method: 'DELETE',
                    headers: {
                        "Authorization": `Bearer ${KEY}`,
                    }
                })
                .then( res => {
                    if (res.ok) {
                        alert('Prodotto eliminato con successo!');
                        location.assign('index.html')
                    }else{
                        throw new Error('Problema nell\'eliminazione del prodotto');
                    }
                })
                .catch(err => console.log(err))
            }else{
                alert("Operazione annullata");
            }
        })
    }

    const productForm = document.getElementById('save-modify-product');
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch( productId ? URL + productId : URL, {
            method: productId ? 'PUT' : 'POST',
            body: JSON.stringify(new Product()),
            headers: {
                "Authorization": `Bearer ${KEY}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                alert(productId ? 'Prodotto modificato con successo' : 'Prodotto creato con successo');
                location.assign('index.html')
            }else{
                throw new Error('ERRORE NEL SALVATAGGIO')
            }
        })
        .catch( err => console.log(err) )
    })

    // Inserisco la conferma prima di resettare il form
    let resetForm = document.getElementById('reset-form');

    resetForm.onclick = function(){
        let confirm = window.confirm("Sei sicuro di voler resettare tutti i campi del form?");

        if(confirm){
            productForm.reset();
        }else{
            alert('Operazione annullata');
        }
    }

}

window.onload = function(){
    createModifyEvent();
    footerYear();
}