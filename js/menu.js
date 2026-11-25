const botonMenu = document.querySelector(".burger-btn");
const menu = document.getElementById("menu-hamburguesa");

botonMenu.addEventListener("click", () => {

   menu.hidden = !menu.hidden;

   botonMenu.setAttribute("aria-expanded", !menu.hidden);

});