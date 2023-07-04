let gnb = document.querySelector(".gnb");
let subMenus = document.querySelectorAll(".sub>li>a");
let waple = document.querySelector(".waple");
let wapleOn = document.querySelector(".wapleOn");
let wapleOn_button = document.querySelectorAll(".wapleOn>ul>li");

gnb.addEventListener("mouseenter", function () {
  subMenus.forEach(function (subMenu) {
    subMenu.style.height = "80px";
    subMenu.style.borderBottomWidth = "1px";
    subMenu.style.borderBottomColor = "darkBlue";
    subMenu.style.borderBottomStyle = "solid";
  });
});

gnb.addEventListener("mouseleave", function () {
  subMenus.forEach(function (subMenu) {
    subMenu.style.height = "0px";
    subMenu.style.borderBottomWidth = "0px";
    subMenu.style.borderBottomStyle = "none";
  });
});

waple.addEventListener("click", function () {
  if (wapleOn.style.left !== "0px") {
    wapleOn.style.left = "0px";
  } else {
    wapleOn.style.left = "-1000px";
  }
});

wapleOn_button.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    let sub = item.querySelector(".wapleSub");
    sub.style.display = "inline-flex";
  });
});

wapleOn_button.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    let sub = item.querySelector(".wapleSub");
    sub.style.display = "none";
  });
});
