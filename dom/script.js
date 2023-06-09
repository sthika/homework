// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.
// let firstDesc = document.querySelector(".nav__link")

// let getFirstDesc = (a) => {
//     return a.innerHTML
// }
// console.log(getFirstDesc(firstDesc))

// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// let links = Array.from(document.querySelectorAll(".nav__link"))

// let getText = (arr) => {
//     return arr.map((el) => el.innerHTML)
// }
// console.log(getText(links))

// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом nav__link__item

// let botLinks = Array.from(document.querySelectorAll(".nav__link__item"))

// let getText = (arr) => {
//     return arr.map((el) => el.innerHTML)
// }
// console.log(getText(botLinks))

// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом nav__link__item
// let botLinks = Array.from(document.getElementsByClassName("nav__link__item"))

// let getAttrContent = (arr) => {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//     let attr = arr[i].attributes
//     newArr = [...newArr, attr.class.textContent]
//     }
//     return newArr
// }
// console.log(getAttrContent(botLinks))


// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link .
// let navLinks = Array.from(document.getElementsByClassName("nav__link"))
// let getAttrContent = (arr) => {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         let attr = arr[i].attributes
//         newArr = [...newArr, attr["data-link"].textContent]
//     }
//     return newArr
// }
// console.log(getAttrContent(navLinks))

// Task 6. Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с 
//классом nav__link должен быть текст порядкового номера индекса. И у этого же элемента должен быть класс с текстовым номером индекса.

// Например
// <a class="nav__link first" data-link="1">first</a>
// Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректно.
// <a class="nav__link zero" data-link="0">first</a>
// Ваша задача вернуть массив атрибутов data-link у элементов, у которых сломана логика. То есть текст внутри не имеет соответствующего класса.
// Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.



let navLinks = Array.from(document.getElementsByClassName("nav__link"))          //надо собрать массив с классом nav__link и перебрать его?
let res = navLinks.map((el, idx) => {                                    //перебрать элементы через map. 
                                                                        // но вернуть массив атрибутов data-link у которых сломана логика,
    let secondClassValue = navLinks[idx].classList[1]                    //  хотя данный метод возвращает такое же кол-во элементов
    let elInnerHtml = navLinks[idx].innerHTML
    let dataLinkValue = el.attributes["data-link"].textContent

    return secondClassValue !== elInnerHtml ? dataLinkValue : el
})

newRes = res.filter((el) => {                           // я не поняла, как сделать и в итоге чтоб  вернуть массив атрибутов 
    return typeof el !== "object"                   // data-link у элементов, у которых сломана логика, отфильтровала.
})
console.log(newRes)


// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a> // Стало // <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>

// Используйте forEach
// let dataLinkValue 
// navLinks.forEach((el) => { 
//     let dataLinkValue = el.attributes["data-link"].textContent
//     el.innerHTML = `${dataLinkValue}` + ` ${el.innerHTML}`
// })
// console.log(navLinks)

// Task 8 // Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()

navLinks.forEach((el, idx) => { 
    let secondClassValue = navLinks[idx].classList[1]                    
    let elInnerHtml = navLinks[idx].innerHTML

    if (secondClassValue !== elInnerHtml) {
        el.remove()
    }
})

// Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div 
// у дива должен быть айди #just-text и текст внутри Hello
// let wrap = document.getElementById("append-div")
// let addDiv = () => {
//    const createDiv = document.createElement("div")
//    wrap.appendChild(createDiv)
//    createDiv.innerHTML = "Hello"
//    createDiv.setAttribute("id", "just-text") 
// }
// addDiv()

// Task 10
// Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div у ul элемента должен быть 
// айди #list Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10

let wrap = document.getElementById("append-div")
let createList = () => {
   const createUl = document.createElement("ul")
   wrap.appendChild(createUl)
   createUl.setAttribute("id", "list") 
   for (let i = 1; i < 11; i++) {
    const createLi = document.createElement("li")
    createUl.appendChild(createLi)
    createLi.innerHTML = `Child ${i}`
   }
}
createList()