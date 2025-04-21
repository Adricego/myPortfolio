function mostrarSaludo() {
    const nombre = document.getElementById("nombreUsuario").value;
    const resultado = document.getElementById("resultadoSaludo");

    if (nombre.trim() !== "") {
        resultado.textContent = '¡Hola, ' + nombre + '! Bienvenido a mi portafolio.';
    } else {
        resultado.textContent = "Por favor, ingresa tu nombre.";
    }
        
}

// 🌤️ API de clima
async function obtenerClima() {
    const ciudad = document.getElementById("ciudadInput").value;
    const resultado = document.getElementById("resultadoClima");

    if (!ciudad) {
        resultado.textContent = "Por favor, ingresa una ciudad.";
        return;
    }

    resultado.textContent = "Conltando clima...";

    const apiKey = "99cf40e39f3d3d9698df4d4f581dfce2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.cod === 200) {
            const temperatura = datos.main.temp;
            const descripcion = datos.weather[0].description;
            const icono = datos.weather[0].icon;
            const ciudadNombre = datos.name;

            resultado.innerHTML = `
                🌍 Ciudad: <strong>${ciudadNombre}</strong><br>
                🌡️ Temperatura: <strong>${temperatura}°C</strong><br>
                🌤️ Clima: <strong>${descripcion}</strong><br>
                <img src="https://openweathermap.org/img/wn/${icono}@2x.png" alt="Icono del clima" style="width: 50px; height: 50px;">
            `;
        } else {
            resultado.textContent = "Ciudad no encontrada.";
        }
    } catch (error) {
        resultado.textContent = "Ocurrió un error al consultar el clima.";
    }
}


// 🐱 API de gatos
async function mostrarGato() {
    const imagen = document.getElementById("imagenGato");
    const cerrarBtn = document.getElementById("cerrarGato");

    try {
        const respuesta = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await respuesta.json();
        imagen.src = data[0].url;
        imagen.style.display = "block";
        cerrarBtn.style.display = "inline-block";
    } catch (error) {
        contenedor.innerHTML = "😿 No se pudo cargar la imagen.";
    }
}

function cerrarImagenGato() {
    document.getElementById("imagenGato").style.display = "none";
    document.getElementById("cerrarGato").style.display = "none";
}

