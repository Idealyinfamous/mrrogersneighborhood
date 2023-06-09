//const input = document.querySelector("input");
//const log = document.getElementById("quantity");

function talkRoger() {
  let talkRoger = prompt("Howdy neighbor");
  let speak = document.getElementById("#speak");
  if (talkRoger >= 50) {
    label.speak = "gO AWAY";
  } else {
    label.speak = " welcome beep boop";
  }
}
let rogerButton = document.querySelector("button");
rogerButton.addEventListener("click", talkRoger);

//let inputNum = document.querySelector("input");
// inputNum.addEventListener("input", updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }
