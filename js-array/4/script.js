// task 4
// Вам дана переменная str = 'максимально ужасно'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// ВЫВОД: [ 'Максимально', 'Ужасно' ]

let str = 'максимально ужасно'
let arr = str.split(" ")
let newArr = arr.map((el) => {
    return el.replace(el[0], el[0].toUpperCase())
})
console.log(newArr)