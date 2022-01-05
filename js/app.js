// harmburger menu code
const mainMenu = document.querySelector(".main_nav_content_container");
const openMenu = document.querySelector(".harmburger");

//  adding event listener

openMenu.addEventListener("click", show);

function show() {
  mainMenu.style.display = "grid";
  mainMenu.style.top = "50px";
  mainMenu.style.left = "50px";
}
