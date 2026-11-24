import { obtenerTodos } from "./almacen.js";

const lista = document.getElementById("lista-usuarios");

function mostrarUsuarios() {
   lista.textContent = "";

   const usuarios = obtenerTodos("usuarios");

   if (usuarios.length === 0) {
      const vacio = document.createElement("li");
      vacio.textContent = "Todavía no hay usuarios registrados.";
      lista.appendChild(vacio);
      return;
   }

   usuarios.forEach((usuario) => {
      const fila = document.createElement("li");

      const datos = document.createElement("span");
      datos.textContent = usuario.usuario + " · " + usuario.email + " · " + usuario.fechaNacimiento;

      const botonEditar = document.createElement("a");
      botonEditar.href = "registro.html?id=" + usuario.id;
      botonEditar.textContent = "Editar";

      const botonBorrar = document.createElement("button");
      botonBorrar.type = "button";
      botonBorrar.textContent = "Borrar";
      botonBorrar.dataset.accion = "borrar";
      botonBorrar.dataset.id = usuario.id;

      fila.appendChild(datos);
      fila.appendChild(botonEditar);
      fila.appendChild(botonBorrar);
      lista.appendChild(fila);
   });
}

mostrarUsuarios();