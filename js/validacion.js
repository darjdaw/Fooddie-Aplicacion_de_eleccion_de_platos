export const EDAD_MINIMA = 14;

export function validarNomUsuario(username) {
   if (username.trim().length < 3) {
      return "El nombre de usuario debe tener al menos 3 caracteres";
   }

   return null;
}

export function validarEmail(email) {
   const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (email.trim() === "") {
      return "El correo electrónico es obligatorio";
   }

   if (!regEmail.test(email)) {
      return "El correo electrónico no es válido, comprueba los caracteres y el formato";
   }

   return null;
}

export function validarPassword(password) {
   if (password.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres";
   }

   if (!/[A-Z]/.test(password)) {
      return "La contraseña debe contener al menos una letra mayúscula";
   }

   if (!/[0-9]/.test(password)) {
      return "La contraseña debe contener al menos un número";
   }

   return null;
}

export function validarRepetirPassword(password, repetirPassword) {
   if (repetirPassword === "") {
      return "Repite la contraseña";
   }

   if (password !== repetirPassword) {
      return "Las contraseñas no coinciden";
   }

   return null;
}

export function validarFechaNacimiento(fecha) {
   if (fecha === "") {
      return "La fecha de nacimiento es obligatoria";
   }

   const partes = fecha.split("-");
   const nacimiento = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));

   if (isNaN(nacimiento.getTime())) {
      return "La fecha de nacimiento no es válida";
   }

   const hoy = new Date();

   if (nacimiento > hoy) {
      return "La fecha de nacimiento no puede ser futura";
   }

   let edad = hoy.getFullYear() - nacimiento.getFullYear();
   const diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

   if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad = edad - 1;
   }

   if (edad < EDAD_MINIMA) {
      return "Debes tener al menos " + EDAD_MINIMA + " años para registrarte";
   }

   return null;
}

export function validarCondiciones(marcada) {
   if (!marcada) {
      return "Debes aceptar las condiciones para continuar";
   }

   return null;
}

export function validarNombre(nombre) {
   if (nombre.trim().length < 2) {
      return "El nombre debe tener al menos 2 caracteres";
   }

   return null;
}

export function validarMotivo(motivo) {
   if (motivo === "") {
      return "Elige un motivo de contacto";
   }

   return null;
}

export function validarMensaje(mensaje, minimo, maximo) {
   const longitud = mensaje.trim().length;

   if (longitud < minimo) {
      return "El mensaje debe tener al menos " + minimo + " caracteres";
   }

   if (longitud > maximo) {
      return "El mensaje no puede superar los " + maximo + " caracteres";
   }

   return null;
}

export function validarAlergias(alergias, tieneAlergias) {
   if (!tieneAlergias) {
      return null;
   }

   if (alergias.trim() === "") {
      return "Necesitas indicar qué alergias tienes";
   }

   return null;
}