function formRegistro () {

}

function formContacto () {
    
} 

function validarNomUsuario(username) {
    if (username.length < 3) {
        return "El nombre de usuario debe tener al menos 3 caracteres";   
    }
return "";
}

function validarEmail(email) {
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regEmail.test(email)) {
        return "El correo electrónico no es válido, comprueba los caracteres y el formato";
    }
    return "";
}

function validarPassword(password) {
    if (password.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres";
    }

    if (!/[A-Z]/.test(password)) {
        return "La contraseña debe contener al menos una letra mayúscula";
    }

    if (!/[0-9]/.test(password)) {
        return "La contraseña debe contener al menos un número";
    }

    return "";
}

function validarRepetirPassword(password, repetirPassword) {
    if  repetirPassword === "" || password !== repetirPassword) {
        return "Las contraseñas no coinciden";
    }

    return "";