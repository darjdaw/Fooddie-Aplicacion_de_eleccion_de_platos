const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador-mensaje");

const minimo = mensaje.minLength;
const maximo = mensaje.maxLength;

function actualizarContador() {
   const escritos = mensaje.value.length;

   contador.textContent = escritos + " / " + maximo + " caracteres (mínimo " + minimo + ")";
}

mensaje.addEventListener("input", actualizarContador);

actualizarContador();