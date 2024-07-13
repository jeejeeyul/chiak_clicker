import { minusmoney, showmoney } from "./baseconfigure.js";
import { setCookie, getCookie, deleteCookie } from "./setCookies.js";

var efficiencyup = document.getElementById("efficiencyup");
var base = 10;

var baseupcount = Number(getCookie("baseupcount"));
var showpay = document.getElementById("show_pay");
showpay.innerText = `업그레이드 비용: ${10 * (1.065 ^ baseupcount)}`;
efficiencyup.addEventListener("click", function () {
  var basemoney = Number(getCookie("basemoney"));
  var baseupcount = Number(getCookie("baseupcount"));
  if (10 * (1.065 ^ baseupcount) <= getCookie("money") && baseupcount < 276) {
    setCookie("basemoney", basemoney + 1, 365);
    minusmoney(10 * (1.065 ^ baseupcount));
    setCookie("baseupcount", baseupcount + 1, 365);

    showpay.innerText = `업그레이드 비용: ${10 * (1.065 ^ (baseupcount + 1))}`;
    showmoney();
  }
});
