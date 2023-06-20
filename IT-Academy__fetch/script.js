let wrapper = document.querySelector(".store__wrapper")

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data) => {

        return data.forEach(el => {
            let card = document.createElement("div")
            card.classList = "store__card"
            wrapper.appendChild(card)

            let cardWrap = document.createElement("div")
            cardWrap.classList = "store__img"
            card.appendChild(cardWrap)
            
            let img = document.createElement("img")
            cardWrap.appendChild(img)
            img.src = el.image

            let title = document.createElement("p")
            title.classList = "store__title"

            let modifyCard = () => {
                if (card.lastChild == title) {
                    title.remove()
                } else 
                if (card.lastChild === cardWrap) {
                    card.appendChild(title)
                    title.innerHTML = el.title
                }
            }
            card.addEventListener("click", modifyCard)
        })
        
    })

let container = document.querySelector('.container')
let categoriesList = document.createElement('ul')
container.appendChild(categoriesList)

categoriesList.className = 'store__list'
const categoriesText = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]

categoriesText.forEach((el) => {
   let categories = document.createElement('li')
   categories.className = 'store__categories'
   categoriesList.appendChild(categories)
   categories.innerHTML = el
})

let categories = Array.from(document.querySelectorAll('.store__categories'))

const removeActive = () => {
    categories.forEach((el) => {
        el.classList.remove("active");
    })
}
let modal = document.createElement('div')
container.appendChild(modal)
modal.className = 'store__wrapper-list'
// data.category === innerHTML

categories.forEach((el) => {
    removeActive()
    let a = el.innerHTML
    el.addEventListener("click", (e) => {
        removeActive()
        el.classList.add("active"); 
        modal.style.display = "flex"
        let a = el.innerHTML
        fetch(`https://fakestoreapi.com/products/category/${a}`)
            .then(res=>res.json())
            .then((data) => {

                return data.forEach(el => {
                    let card = document.createElement("div")
                    card.classList = "store__card"
                    modal.appendChild(card)
        
                    let cardWrap = document.createElement("div")
                    cardWrap.classList = "store__img"
                    card.appendChild(cardWrap)
                    
                    let img = document.createElement("img")
                    cardWrap.appendChild(img)
                    img.src = el.image
        
                    let title = document.createElement("p")
                    title.classList = "store__title"
        
                    let modifyCard = () => {
                        if (card.lastChild == title) {
                            title.remove()
                        } else 
                        if (card.lastChild === cardWrap) {
                            card.appendChild(title)
                            title.innerHTML = el.title
                        }
                    }
                    card.addEventListener("click", modifyCard)
                })
                
            })
    })
})

