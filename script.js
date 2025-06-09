document.addEventListener('DOMContentLoaded', function() {
    // Establece la fecha y hora objetivo (5 de julio de 2025 a las 7:00 PM)
    const targetDate = new Date('July 5, 2025 19:00:00').getTime();

    // Actualiza la cuenta regresiva cada segundo
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calcula el tiempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Muestra el resultado en los elementos correspondientes
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        // Si la cuenta regresiva termina, muestra un mensaje
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "<p>¡La fecha ha llegado!</p>";
            document.querySelector('h1').textContent = "¡Es 5 de julio a las 7 PM!";
        }
    }, 1000); // Actualiza cada 1000 milisegundos (1 segundo)
}); 

 