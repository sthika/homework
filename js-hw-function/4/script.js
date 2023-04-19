// task 5 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.
// Пример:
// "qwertyu" --> "eqrtuwy"
// "dollar" --> "adllor"
// "banana" --> "aaabnn"

let str = "qwertyu"
const strSort = (str) => {
    return str.split('').sort().join('')
}
console.log(strSort (str))

// .sort метод сортировки
// .join объединяет обратно в строку