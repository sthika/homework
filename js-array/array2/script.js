// Напишите функцию, которая принимает массив чисел, 
// строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]

// const changeBoolean = (arr) => {
//     return arr.map((el) => {
//         return el === true || el === false ? !el : el
//     })
    
// }
// console.log(changeBoolean([1,2,3,4,'string', 'hello', true, false]))

// ..........................................task 2
// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
// Пример входных данных: "test"
// ВЫВОД: "tteesstt"

// const duplicateLetter = (str) => {
//     let arr = str.split("").map((el) => {
//         return el + el
//     })
//     return arr.join("")
// }
// console.log(duplicateLetter("test"))

// ..........................................task 3
// Напишите функцию которая принимает массив ['Ваня', 'Антон', 'Ян', 'Джонни', 'Том', 'Бекнур'],
// если в этом массиве есть строки 'Ян' и 'Том' то верните длину этих строк, иначе верните строку.
// ВЫВОД: [ 'Ваня', 'Антон', 2, 'Джонни', 3, 'Бекнур' ]

// const findNames = (arr) => {
//     const newArr = arr.map((el) => {
//         return el === 'Ян' || el === 'Том' ? el.length : el
//     })
//     return newArr
// }
// console.log(findNames(['Ваня', 'Антон', 'Ян', 'Джонни', 'Том', 'Бекнур']))


// ..........................................task 4
// Напишите функцию которая принимает массив из чисел и возводит четные числа в квадрат.

// const mathEven = (arr) => {
//     const newArr = arr.map((el) => {
//         return el % 2 === 0 ? el * el : el
//     })
//     return newArr
// }
// console.log(mathEven([1,2,3,4,5,6]))

// ..........................................task 5
// Напишите функцию которая принимает массив из строк и чисел,
// и выводит длину каждой строки, а если число, то выводит его индекс

// const func = (arr) => {
//     return arr.map((el, index) => {
//         return typeof(el) === 'string' ? el.length : index
//     })

    
// }
// console.log(func([1,'oew', 2, 'asda']))


// ..........................................task 6
// Напишите функцию которая принимает массив из чисел, и умножает каждое число на последнее значение массива.

// const math = (arr) => {
//     const newArr = arr.map((el) => {
//         return el * (arr[arr.length-1])
//     })
//     return newArr
// }

// console.log (math([1,2,3,4,1]))
