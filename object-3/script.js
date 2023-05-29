// 1. Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;

// let onlyString = (obj) => {
//     let newObj = {}
//     let arr = Object.keys(obj)
//     arr.forEach((el) => {
//         if (typeof obj[el] === "string") {
//             newObj[el] = obj[el]
//         } 
//     })
//     return newObj
// }
// console.log(onlyString({ name: 'Baha', isAdmin: true, a:1, b:"1" }))

// 2. Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false

// let getNewArr = (obj) => {
//     let newArr = []
//     let arr = Object.keys(obj)
//     arr.forEach((el) => {
//         if (obj[el] === false) {
//             newArr = [...newArr, el]
//         }
//     })
//     return newArr
// }
// console.log(getNewArr({ isAdmin: false, isBaha: true }))

// 3. Напишите функцию, которая принимает массив объектов с полем id. 
// Например [[{id: '100'}, {id: 2}]] и возвращает массив этих id

// let getValues = (arr) => {
//     let newArr = []
//     arr.forEach((el) => {
//         newArr = [...newArr,Object.values(el)]
//     })
//     return newArr
// }
// console.log(getValues([{id: "1"},{id: 2},{id: 3},{id: 4}]))

// 4. Вам дан объект product = { name: "headphones",price: 100, discount: 0}. 
// Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%.
//    Если это не так, сделайте скидку на 7%. Обновите объект.

// const product = {
//         name: "headphones",
//         price: 100,
//         discount: 0
// }
//     product.price > 100 ? product.price = product.price - (product.price * 0.10) : product.price = product.price - (product.price * 0.07)
// console.log(product)

// 5. Вам дан массив из обьектов, создайте функцию которая добовляет в список новый 
//    продукт и вычисляет общее количество калорий. Функция должна передавать новый 
//    продукт например: ('banana', '500').
const list = [
    {
        title: 'sandwich',
        'калорий': '200',
    },
    {
        title: 'chocolate',
        'калорий': '1000',
    },
    {
        title: 'chicken',
        'калорий': '700',
    },
    {
        title: 'burger',
        'калорий': '1000',
    }, 
]
let addProduct = (name, kkal) => {
    let kkalSum = 0
    list[list.length] = {title: `${name}`,'калорий': `${kkal}` }
    list.forEach((el) => {
        kkalSum = kkalSum + Number(el["калорий"])
    })

    return kkalSum
}
console.log(addProduct('banana', '1000'))
