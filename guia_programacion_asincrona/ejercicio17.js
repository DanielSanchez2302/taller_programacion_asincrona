/*

Para realizar una llamada a un archivo local en formato JSON y mostrar los datos en la consola, se puede utilizar fetch() en JavaScript. Sin embargo, es importante notar que, debido a las restricciones de seguridad en los navegadores, no es posible acceder directamente a archivos locales utilizando fetch() a menos que se esté ejecutando en un servidor local (por ejemplo, usando Live Server en Visual Studio Code).

A continuación, te muestro cómo podrías lograrlo usando fetch() para cargar un archivo JSON. Además, el usuario podrá ingresar el nombre del archivo por teclado usando prompt().

Código Completo
Asegúrate de que el archivo JSON (datos.json) esté en la misma carpeta que tu archivo HTML/JavaScript.

datos.json (Archivo JSON de ejemplo):
json
Copiar código
{
  "nombre": "Juan",
  "edad": 30,
  "ocupacion": "Desarrollador"
}
index.html (HTML + JavaScript):
html
Copiar código
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cargar JSON</title>
</head>
<body>
    <script>
        // Solicitar al usuario ingresar el nombre del archivo JSON
        const fileName = prompt("Ingrese el nombre del archivo JSON (incluyendo la extensión, por ejemplo: datos.json):");

        // Verificar que el usuario haya ingresado un nombre de archivo
        if (fileName) {
            // Usar fetch() para cargar el archivo JSON
            fetch(fileName)
                .then(response => {
                    // Verificar si la respuesta es exitosa
                    if (!response.ok) {
                        throw new Error("No se pudo cargar el archivo JSON");
                    }
                    return response.json(); // Convertir la respuesta a JSON
                })
                .then(data => {
                    // Mostrar los datos obtenidos en la consola
                    console.log("Datos obtenidos del archivo JSON:", data);
                    alert("Datos cargados correctamente. Revisa la consola para más detalles.");
                })
                .catch(error => {
                    // Manejar errores
                    console.error("Error al cargar el archivo JSON:", error);
                    alert("Error al cargar el archivo JSON. Revisa la consola para más detalles.");
                });
        } else {
            alert("No se ingresó ningún nombre de archivo.");
        }
    </script>
</body>
</html>
Explicación del Código:
1. Entrada del usuario:
const fileName = prompt("Ingrese el nombre del archivo JSON (incluyendo la extensión, por ejemplo: datos.json):");
Se solicita al usuario que ingrese el nombre del archivo JSON que desea cargar.
2. Uso de fetch():
fetch(fileName)
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
    }
    return response.json();
  })
Utilizamos fetch() para realizar una solicitud HTTP al archivo local.
Si la respuesta no es satisfactoria (response.ok es false), lanzamos un error.
Convertimos la respuesta a un objeto JavaScript usando .json().
3. Mostrar datos en la consola: 
.then(data => {
  console.log("Datos obtenidos del archivo JSON:", data);
  alert("Datos cargados correctamente. Revisa la consola para más detalles.");
})
Si la carga es exitosa, imprimimos los datos en la consola.
4. Manejo de errores:
.catch(error => {
  console.error("Error al cargar el archivo JSON:", error);
  alert("Error al cargar el archivo JSON. Revisa la consola para más detalles.");
});
Capturamos cualquier error que ocurra durante la carga del archivo y lo mostramos tanto en la consola como en una alerta.
Notas Importantes:
Uso de Servidor Local: Para que este ejemplo funcione correctamente, debes ejecutar tu archivo HTML a través de un servidor local. Puedes usar extensiones como Live Server en Visual Studio Code.
Formato del Archivo JSON: Asegúrate de que el archivo JSON esté correctamente formateado. Un error en el formato puede causar que response.json() falle.
Este enfoque es una excelente manera de practicar la carga y manejo de datos en formato JSON usando JavaScript moderno (fetch, promises).

*/
