const modal = document.getElementById("modal");
const menu = document.getElementById("menu");
const modal_back = document.getElementById("modal_back");
menu.addEventListener("click", function () {
  modal.style.visibility = "visible";
});
modal_back.addEventListener("click", function () {
  modal.style.visibility = "hidden";
});
