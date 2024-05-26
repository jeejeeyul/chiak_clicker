var click_bg = document.getElementById("click_bg");
var show_money = document.getElementById("show_money");
var money = 0;
var efficiency = 100;
var ef = document.getElementById("ef");

show_money.innerText = `${money}원, 효율:${efficiency}%`;
click_bg.addEventListener("click", function () {
  money = money + efficiency / 10;
  console.log(money);
  show_money.innerText = `${money}원, 효율:${efficiency}%`;
});

/*ef.addEventListener("click", function () {
  efficiency = efficiency + 10;
  show_money.innerText = `${money}원, 효율:${efficiency}%`;
}); */
