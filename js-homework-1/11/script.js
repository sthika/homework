// 11. Вам дана переменная month. 
// В ней лежит какое-то число из интервала от 1 до 12. 
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month;
if ( month <= 2 || month === 12) {
    console.log("winter")
} else  if ( month > 2 && month <= 5) {
    console.log("spring")
} else  if ( month > 5 && month <= 8) {
    console.log("summer")
} else  if ( month > 8 && month <= 11) {
    console.log("autumn")
}
