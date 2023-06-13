const clouds = Array.from(document.querySelectorAll(".main__cloud"));
setTimeout(() => {
    clouds.forEach(el => {
        el.style.opacity = "1"
    });  
}, 1500);

let btn = document.querySelector(".main__btn")
let sky = document.querySelector("body")
let stars = Array.from(document.querySelectorAll(".main__star"))
btn.addEventListener("click", () => {
    clouds.forEach((el) => {
        el.style.background = "#9b9a9a"
    })
    sky.style.background = "#25176a"
    stars.forEach(el => {
        el.style.opacity = "1"
    });
})
let i = 0;
setInterval(() => {
    stars.forEach(el => {
        el.style.opacity = i;
    });
    i++;
    if (i > 1) {
        i = 0;
    }
}, 2000);


