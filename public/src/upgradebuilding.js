import { minusmoney, showmoney } from "./baseconfigure.js";
import { setCookie, getCookie, deleteCookie } from "./setCookies.js";
var bg = document.getElementById("bg");
function change_bg(bg_src) {
  bg.src = bg_src;
}
var buildingupbtn = document.getElementById("buildingup");

var buildingcount = Number(getCookie("buildingcount"));
var showbuildingpay = document.getElementById("show_buildingpay");
var showbuildinglevel = document.getElementById("show_buildinglevel");
showbuildingpay.innerText = `레벨업 비용: ${10 * (1.25 ^ buildingcount)}`;
showbuildinglevel.innerText = `건물 레벨 : ${getCookie("buildingcount")}`;
buildingupbtn.addEventListener("click", function () {
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

  if (
    10 * (1.25 ^ buildingcount) <= getCookie("money") &&
    buildingcount < 276
  ) {
    minusmoney(10 * (1.25 ^ buildingcount));
    setCookie("buildingcount", buildingcount + 1, 365);

    showbuildingpay.innerText = `레벨업비용: ${
      10 * (1.25 ^ (buildingcount + 1))
    }`;
    showbuildinglevel.innerText = `건물 레벨 : ${getCookie("buildingcount")}`;
    showmoney();
  }
});
