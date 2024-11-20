// Función asíncrona para leer un archivo JSON y manipular los datos según el criterio ingresado por el usuario
async function filtrarProductosPorNombre() {
    try {
      // Solicitar al usuario una letra o palabra para filtrar los nombres de productos
      const criterio = prompt("Ingrese la letra o palabra por la que deben empezar los nombres de los productos:");
  
      // Validar que el usuario haya ingresado un criterio válido
      if (!criterio || criterio.trim() === "") {
        console.log("No se ingresó un criterio válido.");
        return;
      }
  
      // Realizar la llamada al archivo JSON usando fetch
      const response = await fetch('productos1.json');
      
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo JSON');
      }
  
      // Convertir la respuesta a un objeto JavaScript
      const data = await response.json();
  
      // Filtrar los productos cuyo nombre empiece con el criterio ingresado (sin distinción de mayúsculas)
      const productosFiltrados = data.filter(producto => 
        producto.nombre.toLowerCase().startsWith(criterio.toLowerCase())
      );
  
      // Mostrar los resultados en la consola
      if (productosFiltrados.length > 0) {
        console.log(`Productos que comienzan con "${criterio}":`);
        console.table(productosFiltrados);
      } else {
        console.log(`No se encontraron productos que comiencen con "${criterio}".`);
      }
      
    } catch (error) {
      console.error('Error al leer el archivo JSON:', error);
    }
  }
  
  // Llamar a la función para ejecutar el programa
  filtrarProductosPorNombre();
  