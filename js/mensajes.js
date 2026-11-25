import { obtenerTodos, borrar } from "./almacen.js";

const lista = document.getElementById("lista-mensajes");

const MOTIVOS = {
   "error-precio-info": "Reportar error en precio o info",
   "incidencia-reparto": "Incidencia con un reparto de gastos",
   "otro": "Otro"
};

function mostrarMensajes() {
   lista.textContent = "";

   const mensajes = obtenerTodos("mensajes");

   if (mensajes.length === 0) {
      const vacio = document.createElement("li");
      vacio.textContent = "Todavía no has enviado ningún mensaje.";
      lista.appendChild(vacio);
      return;
   }

   mensajes.forEach((mensaje) => {
      const fila = document.createElement("li");

      const cabecera = document.createElement("p");
      cabecera.textContent = mensaje.nombre + " (" + mensaje.email + ") · "
         + MOTIVOS[mensaje.motivo] + " · " + mensaje.fechaEnvio;

      const texto = document.createElement("p");
      texto.textContent = mensaje.mensaje;

      const botonBorrar = document.createElement("button");
      botonBorrar.type = "button";
      botonBorrar.textContent = "Borrar";
      botonBorrar.dataset.accion = "borrar";
      botonBorrar.dataset.id = mensaje.id;

      fila.appendChild(cabecera);
      fila.appendChild(texto);
      fila.appendChild(botonBorrar);
      lista.appendChild(fila);
   });
}

lista.addEventListener("click", (evento) => {
   const boton = evento.target.closest("button");

   if (boton === null || boton.dataset.accion !== "borrar") {
      return;
   }

   const confirmado = confirm("¿Estás seguro de que quieres borrar este mensaje?");

   if (confirmado) {
      borrar("mensajes", boton.dataset.id);
      mostrarMensajes();
   }
});

mostrarMensajes();