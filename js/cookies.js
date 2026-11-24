export function escribirCookie(nombre, valor, dias) {
   const caducidad = new Date();
   caducidad.setDate(caducidad.getDate() + dias);

   document.cookie = nombre + "=" + encodeURIComponent(valor)
      + "; expires=" + caducidad.toUTCString()
      + "; path=/; SameSite=Lax";
}

// Devuelve el valor de la cookie, o null si no existe.
export function leerCookie(nombre) {
   const cookies = document.cookie.split("; ");

   for (let i = 0; i < cookies.length; i++) {
      const partes = cookies[i].split("=");

      if (partes[0] === nombre) {
         return decodeURIComponent(partes[1]);
      }
   }

   return null;
}