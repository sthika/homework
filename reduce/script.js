
// Написать функцию, которая принимает массив строк и возвращает новую строку, 
// состоящую из всех элементов этого массива, объединенных в одну строку, с использованием метода reduce().

// const getSentence =(arr) => {
//     return arr.reduce ((acc,rec) => {
//         return acc + rec
//     }, "")
// }
// console.log(getSentence(["a", "s", "as"]))

// Написать функцию, которая принимает массив строк и возвращает количество символов во 
// всех строках с использованием метода reduce().

// const getLength =(arr) => {
//     return arr.reduce ((acc,rec) => {
//         return [...acc, rec.length]
//     }, [])
// }

// console.log(getLength(["a", "s", "as"]))

// Написать функцию, которая принимает массив чисел и возвращает новый массив, 
// состоящий только из элементов, которые больше заданного значения, с использованием метода reduce(), 
// (Без использования метода push()) 

const getBiggerNum = (arr) => {
    return arr.reduce ((acc,rec) => {
        return rec > 10 ? [...acc, rec] : acc
         
    }, [])
}
console.log(getBiggerNum([1, 22, 13, 8, 0]))