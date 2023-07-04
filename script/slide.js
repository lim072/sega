let frame = document.querySelector("#visual");
let frames = frame.querySelectorAll(".frame > li");
let btns = frame.querySelectorAll(".btns>div")
let start = frame.querySelector(".start");
let stop = frame.querySelector(".stop");

let bar = document.querySelector(".bar")



const interval = 3000;
const len = frames.length - 1;
let num = 0;
let timer = null;

startRolling();

btns.forEach((el, index) => {
  el.addEventListener("click", () => {
    activation(index);
    stopRolling();
  })
})


start.addEventListener("click", (e) => {

  if (e.target.classList.contains("on")) {
    return;
  } else {
    startRolling()
  }
})

stop.addEventListener("click", stopRolling)

function startRolling() {

  setTimeout(progress, 0);

  activation(num);

  timer = setInterval(rolling, interval);
  start.classList.add('on');
  stop.classList.remove('on');
}


function stopRolling() {

  clearInterval(timer)
  start.classList.remove('on');
  stop.classList.add('on');
}


function activation(index) {
  for (let el of frames) el.classList.remove("on");
  for (let el of btns) el.classList.remove("on");


  frames[index].classList.add("on");
  btns[index].classList.add("on");

  num = index;
  // bar.style.width = "0%";
}

function rolling() {
  if (num < len) {
    num++
  } else {
    num = 0;
  }
  activation(num);
  progress();
}

function progress() {
  // const init = parseInt(bar.style.width) || 0;
  // const targetValue = 100;
  // const unit = '%';
  const startTime = performance.now();

  function animate(time) {
    const realTime = time - startTime;
    const prog = realTime / interval;
    // const currentValus = init + ((targetValue - init) * prog);

    // bar.style.width = `${currentValus}${unit}`

    if (prog < 1) {
      requestAnimationFrame(animate);
    } else {
      // bar.style.width = "0%";
      if (typeof callback === "function") callback();
    };
  }
  requestAnimationFrame(animate);
}