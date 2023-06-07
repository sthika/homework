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
let navLinks = Array.from(document.getElementsByClassName("nav__link"))
let getAttrContent = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
    let attr = arr[i].attributes
    newArr = [...newArr, attr["data-link"].textContent]
    }
    return newArr
}
console.log(getAttrContent(navLinks))
