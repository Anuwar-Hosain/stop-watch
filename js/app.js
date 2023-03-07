const display = document.getElementById("display");
var id;
let sum = 0;
document.getElementById("start").addEventListener("click", function () {
  id = setInterval(() => {
    let num = sum++;
    display.innerHTML = num;
  }, 1000);
});
function stopDisplay() {
  clearInterval(id);
}
function reset() {
  sum = 0;
  display.innerHTML = "0";
  clearInterval(id);
}
