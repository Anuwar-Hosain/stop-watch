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
  stopBtn.removeAttribute("disabled");
  stopBtn.classList.remove("block");
  resetBtn.removeAttribute("disabled");
  resetBtn.classList.remove("block");
});
function stopDisplay() {
  clearInterval(id);
  stopBtn.setAttribute("disabled", true);
  stopBtn.classList += " block";
  startBtn.removeAttribute("disabled");
  startBtn.classList.remove("block");
}
function reset() {
  sum = 0;
  display.innerHTML = "0";
  clearInterval(id);
  resetBtn.setAttribute("disabled", true);
  resetBtn.classList += " block";
  stopBtn.setAttribute("disabled", true);
  stopBtn.classList += " block";
  startBtn.removeAttribute("disabled");
  startBtn.classList.remove("block");
}
