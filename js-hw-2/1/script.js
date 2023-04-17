// 1. Вам дана переменная str = ‘LIGHTCODE PROGRAMMING’. 
//Выведите в консоль длину первого слова.

let str = "LIGHTCODE PROGRAMMING";
console.log (str.substring(0,9).length)

// console.log (str.substr(0,9).length)
// substr () перечеркивается в редакторе и не предлагается emmet,
// поэтому я оставила str.substring, но как поняла можно еще использовать String.slice()