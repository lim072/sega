let frame = document.querySelector(".frame");
let visuals = document.querySelectorAll(".frame > li");

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

prev.addEventListener("click", (e) => {
  e.preventDefault;
  frame.prepend(frame.lastElementChild);
});
next.addEventListener("click", (e) => {
  e.preventDefault;
  frame.append(frame.firstElementChild);
});
