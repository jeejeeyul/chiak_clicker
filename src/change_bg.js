import { getCookie } from "./setCookies.js";

var bg = document.getElementById("bg");
function change_bg(bg_src) {
  bg.src = bg_src;
}
var buildingcount = Number(getCookie("buildingcount"));
if (buildingcount >= 10 && buildingcount < 20) {
  change_bg("../img/2.png");
} else if (buildingcount >= 20 && buildingcount < 50) {
  change_bg("../img/3.png");
} else if (buildingcount >= 50) {
  change_bg("../img/4.png");
} else {
  change_bg("../img/1.png");
}
