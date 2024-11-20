// Función para crear un objeto pedido
function crearPedido() {
    const pedido = {};

    // Crear un Proxy para el objeto pedido
    const handler = {
        set(target, prop, value) {
            // Validación de datos (ejemplo: solo números positivos para medidas)
            if (prop === 'medidas' && typeof value !== 'object') {
                console.error('Las medidas deben ser un objeto');
                return false;
            }

            // Calcular precio (ejemplo simplificado)
            if (prop === 'material' && value === 'madera') {
                // Lógica para calcular el precio basado en las medidas y el material
                // ...
                target.precio = calcularPrecio(target.medidas, value);
            }

            target[prop] = value;
            return true;
        }
    };

    const proxyPedido = new Proxy(pedido, handler);

    // Solicitar datos al usuario
    proxyPedido.cliente = prompt('Ingrese el nombre del cliente:');
    proxyPedido.producto = prompt('Ingrese el tipo de producto:');
    proxyPedido.medidas = {
        ancho: parseFloat(prompt('Ingrese el ancho en cm:')),
        alto: parseFloat(prompt('Ingrese el alto en cm:')),
    };
    proxyPedido.material = prompt('Ingrese el material (madera, metal, etc.):');

    return proxyPedido;
}

// Función para calcular el precio (ejemplo simplificado)
function calcularPrecio(medidas, material) {
    // Lógica de cálculo del precio basada en las medidas y el material
    // ...
    return 1000; // Valor de ejemplo
}

// Crear un nuevo pedido
const nuevoPedido = crearPedido();

// Mostrar los datos del pedido
console.log(nuevoPedido);

/*EXPLICACION
Explicación del Código:

Función crearPedido:

Crea un objeto vacío pedido.
Define un handler para el Proxy:
set: Intercepta las asignaciones de propiedades.
Valida los datos ingresados (ejemplo: las medidas deben ser un objeto).
Calcula el precio del pedido en función del material y las medidas.
Asigna el valor a la propiedad del objeto original.
Crea un Proxy con el objeto pedido y el handler.
Solicita los datos al usuario y los asigna al Proxy.
Función calcularPrecio:

Calcula el precio del pedido en función de las medidas y el material. Esta función puede ser más compleja en un escenario real, considerando diferentes materiales, espesores, acabados, etc.
Creación del Pedido:

Llama a la función crearPedido para crear un nuevo pedido.
Muestra los datos del pedido en la consola.
Ventajas de Usar un Proxy:

Validación de datos: Puedes asegurarte de que los datos ingresados sean válidos antes de almacenarlos.
Cálculos automáticos: Puedes realizar cálculos automáticamente al modificar ciertas propiedades (por ejemplo, calcular el precio cuando se cambia el material).
Control de acceso: Puedes restringir el acceso a ciertas propiedades o métodos.
Simulación: Puedes crear diferentes escenarios simulando diferentes valores para las propiedades.
Ampliando el Ejemplo:

Persistencia: Puedes guardar los datos del pedido en un archivo, base de datos o almacenamiento en la nube.
Interfaz de usuario: Puedes crear una interfaz gráfica para facilitar la interacción del usuario.
Generación de cotizaciones: Puedes generar cotizaciones en formato PDF o HTML.
Gestión de inventario: Puedes integrar el sistema con un sistema de gestión de inventario para verificar la disponibilidad de materiales.
Personalización:

Este es solo un ejemplo básico. Puedes personalizar el código para adaptarlo a las necesidades específicas de tu carpintería. Por ejemplo, puedes agregar más tipos de productos, materiales, opciones de acabado, etc.*/