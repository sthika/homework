// 13. Вам дана переменная a='12345'. 
// Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. 
// Если это так – выведите ‘да’, в противном случае выведите ‘нет’.

let a = '12345';
if ( a[0] === '1' || a[0] === '2' || a[0] === '3' ) {
    console.log("yes")
} else {
    console.log("no")
}

// Проверьте, что первым символом этой переменной является ЦИФРА 1, 2 или 3,
// тогда тут надо было так написать?
// if ( a[0] == 1 || a[0] == 2 || a[0] == 3) {
//     console.log("yes")
// } else {
//     console.log("no")
// }