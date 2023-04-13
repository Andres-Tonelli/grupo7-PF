import Swal from 'sweetalert2';
$("#botonSacarEntrada").click(function() {
    // Muestra un mensaje de SweetAlert
    Swal.fire({
        title: '¡Elige con sabiduría!',
        icon: 'info',
        confirmButtonText: 'Aceptar',
    });
    window.location.href = '../Cartelera/cartelera.html';
});
