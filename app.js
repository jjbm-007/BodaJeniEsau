const fechaObjetivo = new Date("December 13, 2025 00:00:00").getTime();

function actualizarContador() {
    console.log('test');
    
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        document.querySelector(".contador").innerHTML = "<h3>¡Llegó el día!</h3>";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador(); // mostrar inmediatamente
const intervalo = setInterval(actualizarContador, 1000);


function createDot() {
    const container = document.getElementById('floating-dots');
    const dot = document.createElement('div');
    dot.className = 'dot';
    
    // Tamaño aleatorio entre 1px y 3px (pequeño pero variado)
    const size = Math.random() * 2 + 1;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    
    // Posición aleatoria en toda la pantalla
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = `${Math.random() * 100}vh`;
    
    // Animación ultra-rápida y aleatoria
    const duration = Math.random() * 1 + 0.5; // Entre 0.5s y 1.5s
    dot.style.animationDuration = `${duration}s`;
    dot.style.animationDelay = `${Math.random() * 0.5}s`;
    
    container.appendChild(dot);
    
    // Eliminar el punto después de la animación (optimizado)
    setTimeout(() => {
        dot.remove();
    }, duration * 1000 + 100); // Sincronizado con la duración
}

// Mayor densidad: puntos cada 150ms
setInterval(createDot, 150);