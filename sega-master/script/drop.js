let packBox = document.querySelector(".pack");
let consol = document.querySelector(".consol");
let consolOn = consol.querySelector("img")
let packs = packBox.querySelectorAll("img");
let selected = null;
let selected2 = null;
let sega = document.querySelector(".screenMain");
let consolImg = consol.querySelectorAll("img");
let consolPacks = consol.querySelectorAll(".packs");
let consolPacksArr = Array.from(consolPacks);

console.log(consolPacksArr)
console.log(consolPacks)

for (let el of packs) {
    el.addEventListener("dragstart", () => {
        if (selected !== null) {
            packBox.append(selected);
        }
        finishEffect(selected2)
        for (let el of consolImg) {
            el.classList.add('on')
        }
        consolImg[0].classList.remove('on')
    })
    el.addEventListener("dragstart", (e) => {
        selected = e.target;
        selected2 = e.target.id;
    })
    consol.addEventListener("dragover", (e) => {
        e.preventDefault();

    })
    consol.addEventListener("drop", function () {
        consol.append(selected)
        startEffect(selected2)
        for (let el of consolImg) {
            el.classList.add('on')
        }
        consolImg[1].classList.remove('on')
    })
    packBox.addEventListener("dragover", (e) => {
        e.preventDefault()
    })
    packBox.addEventListener("drop", () => {
        packBox.prepend(selected);
        finishEffect(selected2)
        for (let el of consolImg) {
            el.classList.add('on')
        }
        consolImg[0].classList.remove('on')
    })
}


let str;

function startEffect(id) {
    str = id.substr(4, 1);

    let games = document.querySelector(".game" + str);

    let screens = document.querySelectorAll(".screen>div");
    for (let i = 0; i < screens.length; i++) {
        if (screens[i].contains(games)) {
            screens[i].classList.add('on')
            sega.style.opacity = "0"

        } else {
            screens[i].classList.remove('on')
        }
    }
}
function finishEffect(id) {
    str = id.substr(4, 1);

    let games = document.querySelector(".game" + str);

    let screens = document.querySelectorAll(".screen>div");
    for (let i = 0; i < screens.length; i++) {
        if (screens[i].contains(games)) {
            screens[i].classList.remove('on')
            sega.style.opacity = "1"
        }
    }
}
