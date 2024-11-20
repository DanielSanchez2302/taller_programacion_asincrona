// Definir una función asincrónica que simule una operación con un retraso de 1 segundo
async function realizarOperacion() {
  // Solicitar al usuario que ingrese un dato por teclado
  const userInput = prompt("Ingrese un dato para iniciar la operación:");

  // Si el usuario no ingresa nada, retornamos un mensaje indicando que no se ingresaron datos
  if (!userInput) {
    return "No se ingresó ningún dato.";
  }

  // Esperar 1 segundo antes de completar la operación
  await new Promise((resolve) => setTimeout(resolve, 6000));

  // Retornar la cadena de texto después de 1 segundo
  return `Operación completada para el dato ingresado: ${userInput}`;
}

// Función para ejecutar y manejar el resultado usando async/await
async function ejecutarOperacion() {
  try {
    // Llamar a la función asincrónica y esperar su resultado
    const resultado = await realizarOperacion();
    
    // Mostrar el resultado en la consola y en una alerta
    console.log(resultado);
    alert(resultado);
  } catch (error) {
    console.error("Ocurrió un error:", error);
    alert("Ocurrió un error: " + error.message);
  }
}

// Llamar a la función para ejecutar la operación
ejecutarOperacion();

/* EXPLICACION:
1.Definir la función asincrónica realizarOperacion:
async function realizarOperacion() {
La función se declara con la palabra clave async, lo que le permite utilizar await dentro de ella.
2. Solicitar datos al usuario:
const userInput = prompt("Ingrese un dato para iniciar la operación:");
Utilizamos prompt() para pedirle al usuario que ingrese un dato.
El dato ingresado se almacena en la variable userInput.
3. Validar si se ingresó un dato:
if (!userInput) {
  return "No se ingresó ningún dato.";
}
Si userInput es una cadena vacía o null, la función devuelve un mensaje indicando que no se ingresaron datos.
4. Esperar 1 segundo utilizando await y setTimeout:
await new Promise((resolve) => setTimeout(resolve, 6000));
Aquí creamos una Promise que se resuelve después de 1 segundo (6000 milisegundos).
Usamos await para pausar la ejecución de la función hasta que la promesa se resuelva.
5. Retornar un mensaje indicando que la operación fue completada:
return `Operación completada para el dato ingresado: ${userInput}`;
Después del retraso de 1 segundo, retornamos una cadena que incluye el dato que ingresó el usuario.
6.Función adicional ejecutarOperacion para manejar la función asincrónica:
async function ejecutarOperacion() {
  const resultado = await realizarOperacion();
}
Esta función llama a realizarOperacion() y espera su resultado usando await.
También maneja posibles errores con un bloque try...catch.
7. Llamar a la función principal:
ejecutarOperacion();
Llamamos a ejecutarOperacion() para iniciar el proceso.*/