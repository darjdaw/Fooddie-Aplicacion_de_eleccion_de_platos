import {
   validarNombre,
   validarEmail,
   validarMotivo,
   validarMensaje
} from "./validacion.js";
import { activarValidacion, validarTodos } from "./formularios.js";
import { crear } from "./almacen.js";
import { escribirCookie, leerCookie } from "./cookies.js";

const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador-mensaje");

const minimo = mensaje.minLength;
const maximo = mensaje.maxLength;

// Cookie: nombre y correo del ultimo envio.
const nombreGuardado = leerCookie("contacto_nombre");
const emailGuardado = leerCookie("contacto_email");

if (nombreGuardado !== null) {
   nombre.value = nombreGuardado;
}

if (emailGuardado !== null) {
   email.value = emailGuardado;
}


function actualizarContador() {
   const escritos = mensaje.value.length;

   contador.textContent = escritos + " / " + maximo + " caracteres (mínimo " + minimo + ")";
}

mensaje.addEventListener("input", actualizarContador);

actualizarContador();

// Validación
const campos = [
   { campo: nombre, validar: () => validarNombre(nombre.value) },
   { campo: email, validar: () => validarEmail(email.value) },
   { campo: motivo, validar: () => validarMotivo(motivo.value) },
   { campo: mensaje, validar: () => validarMensaje(mensaje.value, minimo, maximo) }
];

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

   // Fecha de envío en formato ISO (AAAA-MM-DD).
   const fechaEnvio = new Date().toISOString().slice(0, 10);

   crear("mensajes", {
      nombre: nombre.value,
      email: email.value,
      motivo: motivo.value,
      mensaje: mensaje.value,
      fechaEnvio: fechaEnvio
   });

// Recordamos nombre y correo durante 30 días.
   escribirCookie("contacto_nombre", nombre.value, 30);
   escribirCookie("contacto_email", email.value, 30);
});