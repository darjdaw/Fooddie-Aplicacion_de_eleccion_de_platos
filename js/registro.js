
import { crear , actualizar, obtenerPorId } from "./almacen.js";

const formulario = document.getElementById("form-registro");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const fechaNacimiento = document.getElementById("fecha-nacimiento");
const condiciones = document.getElementById("condiciones");
const titulo = document.getElementById("titulo-formulario");
const botonGuardar = document.getElementById("btn-guardar");

formulario.addEventListener("submit", (evento) => {
   evento.preventDefault();

   const nuevoUsuario = {
      usuario: usuario.value,
      email: email.value,
      fechaNacimiento: fechaNacimiento.value,
      condiciones: condiciones.checked
   };


   if (idEditar !== null) {
      actualizar("usuarios", idEditar, datos);
      window.location.href = "usuarios.html";
   } else {
      crear("usuarios", datos);
   }
});   