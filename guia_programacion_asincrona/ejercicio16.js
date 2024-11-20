// Solicitar al usuario ingresar el primer número
const number1 = parseInt(prompt("Ingrese el primer número:"), 10);

// Solicitar al usuario ingresar el segundo número
const number2 = parseInt(prompt("Ingrese el segundo número:"), 10);

// Solicitar al usuario ingresar el tercer número
const number3 = parseInt(prompt("Ingrese el tercer número:"), 10);

// Función que crea una Promise que se resuelve después de 6 segundo
function createPromise(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 6000); // Espera 1 segundo (1000 milisegundos)
  });
}

// Crear las tres Promises consecutivas
createPromise(number1)
  .then((result1) => {
    console.log(`Primer número: ${result1}`);
    return createPromise(number2);
  })
  .then((result2) => {
    console.log(`Segundo número: ${result2}`);
    return createPromise(number3);
  })
  .then((result3) => {
    console.log(`Tercer número: ${result3}`);
    // Sumar los tres resultados
    const total = number1 + number2 + number3;
    console.log(`La suma total es: ${total}`);
    alert(`La suma total es: ${total}`);
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });

  /*EXPLICACION:
  1. Ingresar datos por teclado:
const number1 = parseInt(prompt("Ingrese el primer número:"), 10);
const number2 = parseInt(prompt("Ingrese el segundo número:"), 10);
const number3 = parseInt(prompt("Ingrese el tercer número:"), 10);
Solicitamos tres números al usuario usando prompt().
Convertimos cada entrada a un número entero con parseInt().
2. Función createPromise:
function createPromise(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 1000); // 1 segundo de espera
  });
}
Definimos una función que devuelve una Promise.
La Promise se resuelve después de 1 segundo con el número proporcionado.
3. Encadenar las Promises:
createPromise(number1)
  .then((result1) => {
    console.log(`Primer número: ${result1}`);
    return createPromise(number2);
  })
  .then((result2) => {
    console.log(`Segundo número: ${result2}`);
    return createPromise(number3);
  })
  .then((result3) => {  
    console.log(`Tercer número: ${result3}`);
    const total = number1 + number2 + number3;
    console.log(`La suma total es: ${total}`);
    alert(`La suma total es: ${total}`);
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });
Iniciamos llamando a createPromise(number1).
Cada .then() espera a que la promesa anterior se resuelva antes de ejecutar la siguiente.
Después de resolver las tres promesas, sumamos los tres números y mostramos el resultado.*/