import { minusmoney, showmoney } from "./baseconfigure.js";
import { setCookie, getCookie, deleteCookie } from "./setCookies.js";

var buildingupbtn = document.getElementById("buildingup");

var buildingcount = Number(getCookie("buildingcount"));
var showbuildingpay = document.getElementById("show_buildingpay");
var showbuildinglevel = document.getElementById("show_buildinglevel");
showbuildingpay.innerText = `레벨업 비용: ${10 * (1.25 ^ buildingcount)}`;
showbuildinglevel.innerText = `건물 레벨 : ${getCookie("buildingcount")}`;
buildingupbtn.addEventListener("click", function () {
  var buildingcount = Number(getCookie("buildingcount"));
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
