let fecha = new Date();

// Formatea la fecha correctamente con día y mes en texto
function formatearFecha(fecha) {
    const opciones = { day: 'numeric', month: 'long' };
    let fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    return fechaFormateada;
}

// Muestra la fecha inicial (que es la fecha actual)
const fechaElementoDia = document.getElementById('dia');
const fechaElementoMes = document.getElementById('mes');

function actualizarFecha() {
    const fechaFormateada = formatearFecha(fecha);

    // El formato devuelto será "día de mes" (por ejemplo, "7 de noviembre")
    const partesFecha = fechaFormateada.split(' de ');
    const dia = partesFecha[0]; // Día
    const mes = partesFecha[1]; // Mes en texto

    fechaElementoDia.textContent = dia;
    fechaElementoMes.textContent = mes.charAt(0).toUpperCase() + mes.slice(1); // Mayúscula al inicio del mes

    actualizarPosicionDia(dia);  // Llama a la función para ajustar el estilo del día
}

// Función para ajustar el ancho y la clase dependiendo de los dígitos del día
function actualizarPosicionDia(dia) {
    if (dia.length === 1) {
        fechaElementoDia.classList.remove("dos-digitos");
        fechaElementoDia.classList.add("un-digito");
    } else if (dia.length === 2) {
        fechaElementoDia.classList.remove("un-digito");
        fechaElementoDia.classList.add("dos-digitos");
    }
}

actualizarFecha(); // Actualiza la fecha al cargar

// Maneja el click para avanzar la fecha un día
fechaElementoDia.addEventListener('click', function() {
    fecha.setDate(fecha.getDate() + 1); // Incrementa un día
    actualizarFecha(); // Actualiza la fecha mostrada
});

// Verifica si la fecha en la página es la actual al recargar
function actualizarFechaSiEsNuevoDía() {
    const fechaHoy = new Date(); // Fecha actual del sistema
    // Comparar si la fecha de la página está desactualizada
    if (fecha.getDate() !== fechaHoy.getDate() || fecha.getMonth() !== fechaHoy.getMonth()) {
        fecha = fechaHoy; // Actualiza la fecha al día actual
        actualizarFecha();
    }
}

// Llama a la función para comprobar la fecha al cargar la página
actualizarFechaSiEsNuevoDía();
