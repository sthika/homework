// task 8 Создайте функцию, которая принимает 2 целых числа в качестве входных данных и сравнивает их,
// если чилса равны, то выведите "равны", а иначе "не равны" 



const matching = (a, b) => {
    // if (a === b) {
    //     return "равны"
    // }
    // return "не равны"
    return a === b ? "равны":"не равны"
    
}
console.log (matching(2,2))
console.log (matching(2,5))