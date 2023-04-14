// 12. Вам дана переменная day. 
// В ней лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day;
if ( day >= 1 && day <= 10) {
    console.log("first")
} else  if (day >= 11 && day <= 20) {
    console.log("second")
} else  if ( day >= 21 && day <= 31) {
    console.log("third")
}