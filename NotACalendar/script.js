// Obtener la fecha actual del sistema
let fecha = new Date();

// Formatea la fecha y separa el día y el mes
function formatearFecha(fecha) {
    const opciones = { day: 'numeric', month: 'long' };
    let fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    
    // Dividir la fecha en día y mes usando un método más fiable
    let partesFecha = fechaFormateada.split(" "); // Separar en dos partes
    const dia = partesFecha[0]; // Primer parte es el día
    const mes = partesFecha[1]; // Segunda parte es el mes
    
    // Convertir el mes a mayúsculas
    return { dia, mes: mes.toUpperCase() };
}

// Muestra la fecha inicial (que es la fecha actual)
const fechaElementoDia = document.getElementById('dia');
const fechaElementoMes = document.getElementById('mes');

const { dia, mes } = formatearFecha(fecha);
fechaElementoDia.textContent = dia;
fechaElementoMes.textContent = mes;

// Maneja el click para avanzar la fecha un día
fechaElementoDia.addEventListener('click', function() {
    fecha.setDate(fecha.getDate() + 1); // Incrementa un día
    const { dia, mes } = formatearFecha(fecha);
    fechaElementoDia.textContent = dia; // Actualiza el día
    fechaElementoMes.textContent = mes; // Actualiza el mes
});

// Verifica si la fecha en la página es la actual al recargar
function actualizarFechaSiEsNuevoDía() {
    const fechaHoy = new Date(); // Fecha actual del sistema
    // Comparar si la fecha de la página está desactualizada
    if (fecha.getDate() !== fechaHoy.getDate() || fecha.getMonth() !== fechaHoy.getMonth()) {
        fecha = fechaHoy; // Actualiza la fecha al día actual
        const { dia, mes } = formatearFecha(fecha);
        fechaElementoDia.textContent = dia;
        fechaElementoMes.textContent = mes;
    }
}

// Llama a la función para comprobar la fecha al cargar la página
actualizarFechaSiEsNuevoDía();
