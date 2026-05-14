
// Fecha objetivo: 27 mayo 2026 a las 17:00
const targetDate = new Date("May 27, 2026 17:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "<h3>¡El curso ha terminado!</h3>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Actualiza cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// Desplegables de letras de canciones
document.querySelectorAll('.cancion-toggle').forEach(btn => {
    btn.addEventListener('click', function() {
        // Cierra otros abiertos
        document.querySelectorAll('.cancion-toggle').forEach(b => {
            if (b !== btn) b.classList.remove('active');
        });
        document.querySelectorAll('.cancion-letra').forEach(div => {
            if (div.previousElementSibling !== btn) div.style.display = 'none';
        });
        // Abre/cierra el actual
        btn.classList.toggle('active');
        const letra = btn.nextElementSibling;
        letra.style.display = btn.classList.contains('active') ? 'block' : 'none';
    });
});

