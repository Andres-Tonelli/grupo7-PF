$("#botonSacarEntrada").click(function() {
    Swal.fire({
      title: '¡Elige con sabiduría!'
    }).then((result) => {
        window.location.href = '../Cartelera/cartelera.html';
    });
  });
