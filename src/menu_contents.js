var menu_contents = document.querySelectorAll(".menu_contents");
console.log(menu_contents);
menu_contents.forEach((element) => {
  element.addEventListener("click", function () {
    menu_contents.forEach((m) => {
      m.style.borderBottom = "1px solid black";
    });
    element.style.borderBottom = "none";
  });
});

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
