// task 3
// напишите функцию которая принимает массив [1,2,3,4,5,6,7,8] и выводит “четное” 
// если число четное “нечетное” если число нечетное. Используйте тернарное выражение.
// ВЫВОД: ['нечетное', 'четное', 'нечетное', 'четное', 'нечетное', 'четное', 'нечетное', 'четное']

// let arr =[1,2,3,4,5,6,7,8]
// let newArr = arr.map((el) => {
//     return el % 2 === 0 ? "even" : "odd"
// })
// console.log(newArr)

const evenOrOdd = (arr) => {
    const newArr = arr.map((el) => {
        return el % 2 === 0 ? "even" : "odd"
    })
    return newArr
}
console.log(evenOrOdd([1,2,3,4,5,6,7,8]))
console.log(evenOrOdd([2,4,6,8]))
