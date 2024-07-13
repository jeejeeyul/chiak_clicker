var menubar_contents = document.querySelectorAll(".menubar_contents");
console.log(menubar_contents);
menubar_contents.forEach((element) => {
  element.addEventListener("click", function () {
    menubar_contents.forEach((m) => {
      m.style.border = "1px solid black";
    });
    element.style.border = "none";
  });
});

var menu_contents = document.querySelectorAll(".contents");
for (let i = 0; i < 5; i++) {
  menubar_contents[i].addEventListener("click", function () {
    menu_contents.forEach((element) => {
      element.style.zIndex = "-1000";
    });
    menu_contents[i].style.zIndex = "0";
  });
}
var menu_close = document.getElementById("menu_close");
var menu_open = document.getElementById("menu_open");
var menu = document.getElementById("menu");
menu_close.addEventListener("click", function () {
  menu.style.visibility = "hidden";
  menu_open.style.visibility = "visible";
});

menu_open.addEventListener("click", function () {
  menu.style.visibility = "visible";
  menu_open.style.visibility = "hidden";
});
