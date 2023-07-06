let packBox = document.querySelector(".pack");
let game = document.querySelector(".consol");
let gameOn = game.querySelector("img");
let packs = packBox.querySelectorAll("img");
let selected = null;
let selected2 = null;
let sega = document.querySelector(".screenMain");
let gameImg = game.querySelectorAll("img");
let gamePacks = game.querySelectorAll(".packs");
let gamePacksArr = Array.from(gamePacks);

for (let el of packs) {
  el.addEventListener("dragstart", () => {
    if (selected !== null) {
      packBox.append(selected);
    }
    finishEffect(selected2);
    for (let el of gameImg) {
      el.classList.add("on");
    }
    gameImg[0].classList.remove("on");
  });
  el.addEventListener("dragstart", (e) => {
    selected = e.target;
    selected2 = e.target.id;
  });
  game.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  game.addEventListener("drop", function () {
    game.append(selected);
    startEffect(selected2);
    for (let el of gameImg) {
      el.classList.add("on");
    }
    gameImg[1].classList.remove("on");
  });
  packBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  packBox.addEventListener("drop", () => {
    packBox.prepend(selected);
    finishEffect(selected2);
    for (let el of gameImg) {
      el.classList.add("on");
    }
    gameImg[0].classList.remove("on");
  });
}

let str;

function startEffect(id) {
  str = id.substr(4, 1);

  let games = document.querySelector(".game" + str);

  let screens = document.querySelectorAll(".screen>div");
  for (let i = 0; i < screens.length; i++) {
    if (screens[i].contains(games)) {
      screens[i].classList.add("on");
      sega.style.opacity = "0";
    } else {
      screens[i].classList.remove("on");
    }
  }
}
function finishEffect(id) {
  let games = document.querySelector(".game" + str);

  let screens = document.querySelectorAll(".screen>div");
  for (let i = 0; i < screens.length; i++) {
    if (screens[i].contains(games)) {
      screens[i].classList.remove("on");
      sega.style.opacity = "1";
    }
  }
}
