// 7. Вам дана переменная str = 'Максимально Ужасно'.
// Выведите в консоль "встречается более 1 раза",
// если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"

str = "Максимально Ужасно"
letter = "а"
if (str.indexOf(letter) < str.lastIndexOf(letter)) {
    console.log ("встречается более одного раза")
} else {
    console.log ('стречается менее 1 раза')
}