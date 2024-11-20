// Función para pedir datos al usuario
function ingresarPedido(id) {
    const nombre = prompt(`Ingrese el nombre del producto para el pedido ${id}:`);
    const cantidad = parseInt(prompt(`Ingrese la cantidad para el pedido ${id}:`));
    const precio = parseFloat(prompt(`Ingrese el precio por unidad para el pedido ${id}:`));
  
    if (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
      return Promise.reject(`Pedido ${id} fallido: Datos inválidos ingresados.`);
    } else {
      return Promise.resolve({
        id,
        nombre,
        cantidad,
        precio,
        total: cantidad * precio,
      });
    }
  }
  
  // Crear tres Promises con los datos ingresados por el usuario
  const pedido1 = ingresarPedido(1);
  const pedido2 = ingresarPedido(2);
  const pedido3 = ingresarPedido(3);
  
  // Utilizar Promise.allSettled() para manejar todas las Promises
  Promise.allSettled([pedido1, pedido2, pedido3])
    .then((resultados) => {
      console.log("Resultados de todos los pedidos:");
      resultados.forEach((resultado, index) => {
        if (resultado.status === 'fulfilled') {
          console.log(`✅ Pedido ${index + 1} completado:`, resultado.value);
        } else {
          console.log(`❌ Pedido ${index + 1} rechazado:`, resultado.reason);
        }
      });
    })
    .catch((error) => {
      console.error("Error al procesar los pedidos:", error);
    });
  