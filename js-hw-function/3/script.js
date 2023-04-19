// task 4 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую 
// букву а в каждом имени на я и выведите в консоль.

let names = ['Аскар', 'Баяман', 'Калмамат']

const changeNames = (names) => {
    return names.join(",").replaceAll('а','я').replaceAll('А','Я').split(",")
}
console.log (changeNames(names))