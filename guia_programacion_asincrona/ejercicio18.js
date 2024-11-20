// Función para solicitar al usuario un criterio de búsqueda
function solicitarCriterio() {
    const criterio = prompt("Ingrese la letra por la que deben empezar los nombres de productos:");
    if (!criterio) {
      console.log("No se ingresó ningún criterio. Inténtalo de nuevo.");
      return null;
    }
    return criterio;
  }
  
  // Función para leer y filtrar datos desde un archivo JSON
  function filtrarProductos(criterio) {
    fetch('productos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        return response.json();
      })
      .then(data => {
        // Filtrar productos cuyo nombre empiece con la letra ingresada (ignorando mayúsculas)
        const productosFiltrados = data.filter(producto => 
          producto.nombre?.toLowerCase().startsWith(criterio.toLowerCase())
        );
  
        // Mostrar resultados en la consola
        if (productosFiltrados.length > 0) {
          console.log(`Productos que comienzan con la letra "${criterio}":`);
          console.table(productosFiltrados);
        } else {
          console.log(`No se encontraron productos que comiencen con la letra "${criterio}".`);
        }
      })
      .catch(error => {
        console.error('Error al leer el archivo JSON:', error);
      });
  }
  
  // Ejecución del programa
  const criterio = solicitarCriterio();
  if (criterio) {
    filtrarProductos(criterio);
  }
  