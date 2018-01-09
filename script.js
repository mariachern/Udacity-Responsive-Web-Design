var menu = document.getElementById("nav__list");
var openMenu = document.getElementById("open__menu");

openMenu.addEventListener("click", function(evt) {
  if (menu.classList.contains("show__menu")) {
    menu.classList.remove("show__menu");
  } else {
    menu.classList.add("show__menu");
  }
});


