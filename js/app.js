const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let id;
let sum = 0;
document.getElementById("start").addEventListener("click", function () {
  id = setInterval(() => {
    let num = sum++;
    display.innerHTML = num;
  }, 1000);
  startBtn.setAttribute("disabled", true);
  startBtn.classList += " block";
});
function stopDisplay() {
  clearInterval(id);
  startBtn.removeAttribute("disabled");
  startBtn.classList.remove("block");
}
function reset() {
  sum = 0;
  display.innerHTML = "0";
  clearInterval(id);
}
