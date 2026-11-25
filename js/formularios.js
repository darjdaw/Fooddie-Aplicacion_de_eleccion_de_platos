export function mostrarError(campo, mensaje) {
   const spanError = document.getElementById("error-" + campo.id);

   if (mensaje === null) {
      spanError.textContent = "";
      campo.setAttribute("aria-invalid", "false");
   } else {
      spanError.textContent = mensaje;
      campo.setAttribute("aria-invalid", "true");
   }
}

export function activarValidacion(campo, validar) {
   campo.addEventListener("blur", () => {
      campo.dataset.tocado = "true";
      mostrarError(campo, validar());
   });

   campo.addEventListener("input", () => {
      if (campo.dataset.tocado === "true") {
         mostrarError(campo, validar());
      }
   });
}

export function validarTodos(lista) {
   let primerError = null;

   for (let i = 0; i < lista.length; i++) {
      const campo = lista[i].campo;
      const error = lista[i].validar();

      campo.dataset.tocado = "true";
      mostrarError(campo, error);

      if (error !== null && primerError === null) {
         primerError = campo;
      }
   }

   return primerError;
}

export function limpiarFormulario(formulario, lista) {
   formulario.reset();

   for (let i = 0; i < lista.length; i++) {
      lista[i].campo.dataset.tocado = "false";
      mostrarError(lista[i].campo, null);
   }
}
