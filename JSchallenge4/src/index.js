const nation = document.querySelector("select");
function selectCountry(event) {
    let selectC = nation.options[nation.selectedIndex].value;
    localStorage.setItem('country',selectC);
}
function init() {
    nation.addEventListener("change", selectCountry);
}
init();