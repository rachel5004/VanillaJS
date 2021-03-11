// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>
function init() {
  window.addEventListener("resize", windowColor);
}
function windowColor() {
  if (window.innerWidth > 700) {
    document.body.style.background = "yellow";
  } else if (window.innerWidth > 400) {
    document.body.style.background = "purple";
  } else {
    document.body.style.background = "blue";
  }
}
init();