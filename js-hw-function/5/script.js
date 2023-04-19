// task 6 Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
// Пример:
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

let str = "Robin Singh"

const divideStr = (str) => {
    return str.split(" ")
}
console.log (divideStr(str))