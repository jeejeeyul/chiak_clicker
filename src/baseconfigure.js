import { setCookie, getCookie, deleteCookie } from "./setCookies.js";

if (getCookie("basemoney") == null || getCookie("basemoney") == "undefined") {
  setCookie("basemoney", 0, 365);
}

if (getCookie("money") == null) {
  setCookie("money", 0, 365);
}

if (getCookie("efficiency") == null) {
  setCookie("efficiency", 100, 365);
}

if (getCookie("baseupcount") == null) {
  setCookie("baseupcount", 1, 365);
}

if (getCookie("buildingcount") == null) {
  setCookie("buildingcount", 0, 365);
}

export function minusmoney(value) {
  setCookie("money", Number(getCookie("money")) - value, 365);
}

export function showmoney() {
  var show_money = document.getElementById("show_money");
  show_money.innerText = `${getCookie("money")}원, 효율:${
    Number(getCookie("efficiency")) + Number(getCookie("buildingcount"))
  }%, 클릭당 돈:${10 + Number(getCookie("basemoney"))}`;
}
