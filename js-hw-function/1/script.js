// task 1
// Напишите функцию которая принимает строку и заменяет все буквы “o” на  “a”
// “головоломка” --> "галаваламка"
// "мОлоток" --> "малатак"

// const changeLetter = (str, ) => {

// }

// console.log(str.replaceAll('о', 'а'))

let str = "головоломка"
const changeLetter = (str) => {
    return str.replaceAll ('о', 'а')
}
console.log (changeLetter(str))