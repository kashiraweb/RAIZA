const URL_PAGINA = window.location.href;
const TELEFONO_DUENO = "73976893"; // ⚠️ Cambia por tu número real

const botonesFiltro = document.querySelectorAll('.btn-filtro');
const tarjetasProductos = document.querySelectorAll('.producto');
const botonesCompra = document.querySelectorAll('.btn-compra');
const cajaQR = document.getElementById('qr-codigo');
const btnDescargarQR = document.getElementById('btn-descargar-qr');
const campoNombre = document.getElementById('nombre-cliente');
const campoMensaje = document.getElementById('mensaje-cliente');
const botonEnviarMensaje = document.getElementById('btn-enviar');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesFiltro.forEach(btn => btn.classList.remove('activo'));
        boton.classList.add('activo');
        const categoria = boton.dataset.categoria;
        tarjetasProductos.forEach(producto => {
            if (categoria === 'todos') {
                producto.classList.remove('oculto');
            } else if (producto.classList.contains(categoria)) {
                producto.classList.remove('oculto');
            } else {
                producto.classList.add('oculto');
            }
        });
    });
});

botonesCompra.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombre = boton.dataset.nombre;
        const precio = boton.dataset.precio;
        const mensaje = `Hola 👋! Escaneé el QR de El Dorado y quiero información sobre:\n\n📦 ${nombre}\n💰 Precio: Bs. ${precio}\n\n¿Está disponible? Me gustaría coordinar la compra. ¡Gracias!`;
        const enlace = `https://wa.me/${TELEFONO_DUENO}?text=${encodeURIComponent(mensaje)}`;
        window.open(enlace, '_blank');
    });
});