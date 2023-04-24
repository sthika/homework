// task 1
// Напишите функцию, которая принимает массив чисел, 
// строк, булеан и верните тип каждого элемента.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false]  


const checkType = (arr) => {
    let newArr = arr.map((el) => {
        return typeof(el)
    })
    return newArr
}
console.log (checkType([1, 2, 3, 4, 'string', 'hello', true, false]))