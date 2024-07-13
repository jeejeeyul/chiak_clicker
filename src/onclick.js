import { setCookie, getCookie, deleteCookie } from "./setCookies.js";

var click_bg = document.getElementById("click_bg");
var show_money = document.getElementById("show_money");
var money = Number(getCookie("money"));
if (getCookie("efficiency") == null) {
  setCookie("efficiency", 100, 365);
}
var buildingcount = Number(getCookie("buildingcount"));
var efficiency = Number(getCookie("efficiency"));
var basemoney = Number(getCookie("basemoney"));

if (show_money.innerText != null || show_money.innerText != undefined) {
  show_money.innerText = `${money}원, 효율:${
    efficiency + buildingcount
  }%, 클릭당 돈:${10 + basemoney}`;
}

click_bg.addEventListener("click", function () {
  var buildingcount = Number(getCookie("buildingcount"));
  var basemoney = Number(getCookie("basemoney"));
  setCookie(
    "money",
    Math.floor(
      Number(getCookie("money")) +
        ((10 + basemoney) * (efficiency + buildingcount)) / 100
    ),
    365
  );
  efficiency = Number(getCookie("efficiency"));
  money = Number(getCookie("money"));

  show_money.innerText = `${money}원, 효율:${
    efficiency + buildingcount
  }%, 클릭당 돈:${10 + basemoney}`;
});

/*ef.addEventListener("click", function () {
  efficiency = efficiency + 10;
  show_money.innerText = `${money}원, 효율:${efficiency}%`;
}); */
