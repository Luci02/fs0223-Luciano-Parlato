let trendingItems = document.querySelectorAll('#trending-now .carousel .carousel-item');
let againItems = document.querySelectorAll('#watch-again .carousel .carousel-item');
let newReleases = document.querySelectorAll('#new-releases .carousel .carousel-item');

trendingItems.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = trendingItems[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

againItems.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = againItems[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

newReleases.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = newReleases[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})