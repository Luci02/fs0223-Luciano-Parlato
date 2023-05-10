// https://striveschool-api.herokuapp.com/books
let url = 'https://striveschool-api.herokuapp.com/books';


fetch(url)
    .then((response) => {

        if (response.ok) {
            return response.json();
        }else {
            throw new Error('Errore nell\'esecuzione della chiamata');
        }

    })
    .then(arrayLibrary => {
        console.log(arrayLibrary);

        let cardContenitor = document.querySelector('div.container-fluid div.row')
        arrayLibrary.forEach(element => {
            cardContenitor.innerHTML += `
        <div class="col">
            <div class="card ms-auto me-auto" style="width: 18rem;">
                <img src="${element.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text"><span class="fw-bold">Category:</span> ${element.category}</p>
                    <p class="card-text"><span class="fw-bold">Price:</span> ${element.price}</p>
                    <button class="btn btn-dark discard">Scarta</button>
                    <button class="btn btn-dark buy-now">Compra ora</button>
                </div>
            </div>
        </div>
        `
        });

        let discard = document.querySelectorAll('button.discard')

        for (let button of discard) {
            button.addEventListener('click', () => {
                button.parentElement.parentElement.parentElement.remove();
            })
        }

        let cartList = document.getElementById('cart-list');
        let buyNow = document.querySelectorAll('button.buy-now');

        for (let element of buyNow) {
            element.addEventListener('click', () => {

                let li = document.createElement('li');
                li.innerHTML = `${element.parentNode.children[0].textContent}<button class="btn btn-light ms-2 my-3 remove-from-cart">Rimuovi dal carrello</button>`;
                cartList.appendChild(li);

                cartList.childNodes.forEach((li, i) => {

                    sessionStorage.setItem(`film${i}`, li.childNodes[0].data)

                    li.children[0].addEventListener('click', (e) => {
                        // cancello tutto l'elemento 'li'
                        console.log(sessionStorage.key(i) - 1);
                        sessionStorage.removeItem(`film${i}`);
                        e.srcElement.parentElement.remove();
                    })
                });
            });
        }

    })
    .catch(error => console.log(error))

window.onload = function () {
    let cartList = document.getElementById('cart-list');
    cartList.innerHTML = "";
    let filmCount = sessionStorage.length;
    for (i = 0; i < filmCount; i++) {
        let li = document.createElement('li');
        li.innerHTML = sessionStorage.getItem(sessionStorage.key(i)) + `<button class="btn btn-light ms-2 my-3 remove-from-cart">Rimuovi dal carrello</button>`;
        cartList.append(li);
    }

    cartList.childNodes.forEach((li, i) => {

        li.children[0].addEventListener('click', (e) => {
            // cancello tutto l'elemento 'li'
            console.log(sessionStorage.key(i));
            e.srcElement.parentElement.remove();
            sessionStorage.removeItem(`film${i}`);
        })
    });
}