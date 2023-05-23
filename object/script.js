// 1. Создать объект user с полями name, age и email. Вывести значения полей в консоль.

const user = {
    name: "Sveta",
    age: 25,
    email: "sveta@mail.ru",
}
console.log(Object.values(user)) //      Вывести значения полей в консоль.
user.id = 1;                     //      -Добавить ключ id со значением 1 
user["second name"] = "Svetlana" //      -Добавить ключ second name
delete user.age                 //      -Удалить ключ age
user.email = "sveta@gmail.com"  //      -Изменит значение ключа email
Object.freeze(user)             //      -Сделать так чтоб в дальнейшем этот объект не могли изменять


// 2. Создайте объект заработных плат obj = {Ширин: '1000',
//    Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
const obj = {
    Ширин: '1000',
    Айжан:'500', 
    Атай: '200'
}
                            //                решение 1
Object.keys(obj).forEach((key) => {
    if (key === 'Айжан' || key === 'Атай') {
        console.log(`zp ${key}: ${obj[key]}`);
    }
})
                           //                решение 2
console.log(obj["Айжан"], obj["Атай"])  // через [] так как ключи написаны на русском


// 3. Создать объект team с полем members, представляющим собой массив имен участников. 
//    Добавить нового участника в массив и вывести обновленный объект в консоль. 
//    (Учитываем, то что мы можем не знать список участников которые уже записаны)

const team = {
    members: []
}

let addMember = (obj, name) => {
    obj.members = [...obj.members, name] 
    return obj;
}
addMember(team, "Sveta")
console.log(team)
