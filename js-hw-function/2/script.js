// task 2
// Напишите функцию которая принимает строку "           
// hello world.        " и удаляет отступы по краям

let str = "            hello world.        "
const deleteSpace = (str) => {
    return str.trim ()
}
console.log (deleteSpace(str))