var click_bg = document.getElementById("click_bg");
var show_progress = document.getElementById("show_progress");
var bar = document.getElementById("bar");
bar.style.right = "100%";

var percentage = 0;
click_bg.addEventListener("click", function () {
  if (bar.style.right.slice(0, -1) != 0) {
    bar.style.right = `${bar.style.right.slice(0, -1) - 1}%`;
  } else {
    bar.style.right = "100%";
  }
});

click_bg.addEventListener("click", function () {
  if (percentage != 100) {
    percentage++;
    show_progress.innerText = percentage + "%";
  } else {
    percentage = 1;
    show_progress.innerText = "1%";
  }
});
