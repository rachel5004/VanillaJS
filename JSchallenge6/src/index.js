// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector("input"),
  between = document.querySelector("h3"),
  play = document.querySelector(".play"),
  result = document.querySelector(".result"),
  output = document.querySelector(".output");
let range = 0;
function getNum() {
  // h3 between 0 and cNum
  range = form.value;
  between.innerText = `generate a number betweern 0 and ${range}`;
}
function playGame(event) {
  let cNum = Math.round(Math.random() * range);
  let uNum = document.querySelector(".uNum").value;
  result.innerText = `You chose: ${uNum}, the machine chose : ${cNum}`;
  output.innerText = `${uNum == cNum ? `You won` : `You lose`}`;
}
function init() {
  form.addEventListener("input", getNum);
  play.addEventListener("click", playGame);
}
init();
