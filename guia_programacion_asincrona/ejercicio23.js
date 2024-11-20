// Función para pedir datos al usuario
function ingresarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const tipoMadera = prompt("Ingrese el tipo de madera (Roble, Pino, Cedro, etc.):");
    const cantidad = parseInt(prompt("Ingrese la cantidad disponible:"));
    const precio = parseFloat(prompt("Ingrese el precio por unidad:"));
  
    // Validar que los datos ingresados sean válidos
    if (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
      console.error("Error: La cantidad y el precio deben ser números válidos y mayores a 0.");
      return null;
    }
  
    return {
      nombre,
      tipoMadera,
      cantidad,
      precio,
      total: cantidad * precio,
    };
  }
  
  // Función asíncrona para leer un archivo JSON local
  async function leerArchivoJSON() {
    try {
      const response = await fetch('productos3.json');
  
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo JSON. Verifique la ruta o el nombre del archivo.");
      }
  
      const productos = await response.json();
      return productos;
    } catch (error) {
      console.error("Error al leer el archivo JSON:", error.message);
      return [];
    }
  }
  
  // Función principal para ejecutar el programa de la carpintería
  async function programaCarpinteria() {
    // Solicitar datos del usuario
    const productoUsuario = ingresarProducto();
    if (!productoUsuario) {
      console.log("El producto ingresado no es válido. Saliendo del programa.");
      return;
    }
  
    // Leer productos adicionales desde un archivo JSON
    const productosArchivo = await leerArchivoJSON();
  
    // Combinar productos ingresados por el usuario con los del archivo
    const todosLosProductos = [productoUsuario, ...productosArchivo];
  
    // Mostrar todos los productos obtenidos
    console.log("Lista completa de productos:");
    console.table(todosLosProductos);
  }
  
  // Ejecutar el programa
  programaCarpinteria();
  