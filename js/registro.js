import {
   validarNomUsuario,
   validarEmail,
   validarPassword,
   validarRepetirPassword,
   validarFechaNacimiento,
   validarCondiciones
} from "./validacion.js";
import { mostrarError, activarValidacion, validarTodos, limpiarFormulario } from "./formularios.js";
import { crear, actualizar, obtenerPorId } from "./almacen.js";

const formulario = document.getElementById("form-registro");
const titulo = document.getElementById("titulo-formulario");
const botonGuardar = document.getElementById("btn-guardar");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repetirPassword = document.getElementById("repetir-password");
const fechaNacimiento = document.getElementById("fecha-nacimiento");
const condiciones = document.getElementById("condiciones");

const hoy = new Date();
const mes = String(hoy.getMonth() + 1).padStart(2, "0");
const dia = String(hoy.getDate()).padStart(2, "0");
fechaNacimiento.max = hoy.getFullYear() + "-" + mes + "-" + dia;

const parametros = new URLSearchParams(window.location.search);
const idEditar = parametros.get("id");

if (idEditar !== null) {
   const usuarioGuardado = obtenerPorId("usuarios", idEditar);

   if (usuarioGuardado !== null) {
      usuario.value = usuarioGuardado.usuario;
      email.value = usuarioGuardado.email;
      fechaNacimiento.value = usuarioGuardado.fechaNacimiento;
      condiciones.checked = usuarioGuardado.condiciones;

      titulo.textContent = "Editar usuario";
      botonGuardar.textContent = "Guardar cambios";
   }
}

const campos = [
   { campo: usuario, validar: () => validarNomUsuario(usuario.value) },
   { campo: email, validar: () => validarEmail(email.value) },
   { campo: fechaNacimiento, validar: () => validarFechaNacimiento(fechaNacimiento.value) },
   { campo: condiciones, validar: () => validarCondiciones(condiciones.checked) }
];

// No se pide la contraseña porque no se guarda
if (idEditar === null) {
   campos.push({ campo: password, validar: () => validarPassword(password.value) });
   campos.push({
      campo: repetirPassword,
      validar: () => validarRepetirPassword(password.value, repetirPassword.value)
   });

// Al cambiar la contraseña se vuelve a pedir repetirla
   password.addEventListener("input", () => {
      if (repetirPassword.dataset.tocado === "true") {
         mostrarError(repetirPassword, validarRepetirPassword(password.value, repetirPassword.value));
      }
   });
}

for (let i = 0; i < campos.length; i++) {
   activarValidacion(campos[i].campo, campos[i].validar);
}

formulario.addEventListener("submit", (evento) => {
   evento.preventDefault();

   const primerError = validarTodos(campos);

   if (primerError !== null) {
      primerError.focus();
      return;
   }

   const datos = {
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