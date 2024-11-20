
// Función para crear una Promesa que se resuelve después de un cierto tiempo
function crearPromesa(tiempo, mensaje) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensaje);
        }, tiempo);
    });
}

// Crear tres Promesas con diferentes intervalos de tiempo
const promesa1 = crearPromesa(2000, 'Promesa 1 resuelta después de 2 segundos');
const promesa2 = crearPromesa(1000, 'Promesa 2 resuelta después de 1 segundo');
const promesa3 = crearPromesa(3000, 'Promesa 3 resuelta después de 3 segundos');

// Usar Promise.all() para esperar a que todas las Promesas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log('Todas las promesas se han resuelto:');
        resultados.forEach(resultado => console.log(resultado));
    })
    .catch((error) => {
        console.error('Ocurrió un error:', error);
    });
