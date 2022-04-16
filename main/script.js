let nav = document.getElementsByClassName("navb")[0];
let dropdown = document.getElementById("dropdown-btn");
let isShown = false;
const showhide = () => {
    if(isShown) {
        dropdown.className = "fa-solid fa-bars";
        nav.style.left = "100%";
        isShown = false;
    } else {
        dropdown.className = "fa-solid fa-x";
        nav.style.left = "0";
        isShown = true;
    }
}
dropdown.onclick = showhide;