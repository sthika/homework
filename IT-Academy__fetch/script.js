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
            card.addEventListener("click", modifyCard, false)
        })
        
    })
    


