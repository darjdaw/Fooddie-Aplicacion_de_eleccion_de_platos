
import { crear } from "./almacen.js";

const formulario = document.getElementById("form-registro");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const fechaNacimiento = document.getElementById("fecha-nacimiento");
const condiciones = document.getElementById("condiciones");

formulario.addEventListener("submit", (evento) => {
   evento.preventDefault();

   const nuevoUsuario = {
      usuario: usuario.value,
      email: email.value,
      fechaNacimiento: fechaNacimiento.value,
      condiciones: condiciones.checked
   };

   crear("usuarios", nuevoUsuario);
});