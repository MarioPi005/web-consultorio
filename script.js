document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío normal del formulario

        const nombre = encodeURIComponent(document.getElementById('nombre').value.trim());
        const mensaje = encodeURIComponent(document.getElementById('mensaje').value.trim());

        if (nombre === '' || mensaje === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Número de WhatsApp y mensaje
        const numeroWhatsApp = '524481277660'; // Cambia esto por tu número en formato internacional
        const textoMensaje = `Hola, mi nombre es ${nombre}. Mi mensaje es: ${mensaje}`;

        // Construye la URL de WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensaje}`;

        // Redirige al usuario a la URL de WhatsApp
        window.location.href = urlWhatsApp;
    });
});


function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);