function mostrarSaludo() {
    const nombre = document.getElementById("nombreUsuario").value;
    const resultado = document.getElementById("resultadoSaludo");

    if (nombre.trim() !== "") {
        resultado.textContent = '¡Hola, ' + nombre + '! Bienvenido a mi portafolio.';
    } else {
        resultado.textContent = "Por favor, ingresa tu nombre.";
    }
    
    
}