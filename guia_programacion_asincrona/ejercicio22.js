// Función que simula una operación asincrónica con cada elemento
async function procesarElemento(elemento) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Procesando elemento: ${elemento}`);
            resolve(`Elemento procesado: ${elemento}`);
        }, 1000); // Simula un retraso de 1 segundo
    });
}

// Función asincrónica para procesar una lista de elementos ingresados por el usuario
async function procesarLista() {
    // Pedir al usuario cuántos elementos quiere ingresar
    const cantidad = parseInt(prompt("¿Cuántos elementos deseas ingresar?"), 10);
    const lista = [];
    
    // Pedir al usuario que ingrese los elementos uno por uno
    for (let i = 0; i < cantidad; i++) {
        const elemento = prompt(`Ingresa el elemento ${i + 1}:`);
        lista.push(elemento);
    }

    // Procesar cada elemento de la lista de forma secuencial
    for (const elemento of lista) {
        const resultado = await procesarElemento(elemento);
        console.log(resultado);
    }

    console.log("Todos los elementos han sido procesados.");
}

// Ejecutamos la función para procesar la lista de elementos ingresados
procesarLista();

