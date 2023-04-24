// task 2
// Напишите функцию, которая принимает строку и выводит индекс каждого 
// символа.
let str = "what index"

const checkIndex = (str) => {
    let a = str.split("")
    return a.map((el, index) => {
        return index
    })
}
console.log(checkIndex("what index"))
console.log()
