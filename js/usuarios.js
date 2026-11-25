import { obtenerTodos, borrar } from "./almacen.js";

const lista = document.getElementById("lista-usuarios");

function mostrarUsuarios() {
   lista.textContent = "";

   const usuarios = obtenerTodos("usuarios");

   if (usuarios.length === 0) {
      const botonEditar = document.createElement("button");
      botonEditar.type = "button";
      botonEditar.textContent = "Editar";
      botonEditar.dataset.accion = "editar";
      botonEditar.dataset.id = usuario.id;
   }

   usuarios.forEach((usuario) => {
      const fila = document.createElement("li");

      const datos = document.createElement("span");
      datos.textContent = usuario.usuario + " · " + usuario.email + " · " + usuario.fechaNacimiento;

      const botonEditar = document.createElement("button");
      botonEditar.type = "button";
      botonEditar.textContent = "Editar";
      botonEditar.dataset.accion = "editar";
      botonEditar.dataset.id = usuario.id;

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

lista.addEventListener("click", (evento) => {
   const boton = evento.target.closest("button");
   
      if (boton === null || !lista.contains(boton)) {
      return;
   }

   const id = boton.dataset.id;
   const accion = boton.dataset.accion;
   
   if (accion === "editar") {
      window.location.href = "registro.html?id=" + id;
   } 
   else if (accion === "borrar") {
      const confirmado = confirm("¿Estás seguro de que quieres borrar este usuario?");

      if (confirmado) {
         borrar("usuarios", id);
         mostrarUsuarios();
      }
   }
});

mostrarUsuarios();