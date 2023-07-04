let gnb = document.querySelector(".gnb");
let subMenus = document.querySelectorAll(".sub>li>a");
let waple = document.querySelector(".waple");
let wapleOn = document.querySelector(".wapleOn")

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
    subMenu.style.borderBottomWidth = "0px"
    subMenu.style.borderBottomStyle = "none";
  });

});

waple.addEventListener("click", function(){
  
  wapleOn.style.left = "0px";
})
