// Definimos la función `every` que toma dos parámetros:
// `array` - el array sobre el cual vamos a aplicar la condición
// `callback` - una función que verificará si cada elemento cumple con una condición
function every(array, callback) {
    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
      // Obtenemos el elemento actual en la posición `i`
      let currentElement = array[i];
  
      // Llamamos al `callback` pasando el elemento actual como argumento
      // Si el `callback` devuelve `false` para algún elemento, retornamos `false` de inmediato
      if (!callback(currentElement)) {
        return false;
      }
    }
  
    // Si el bucle termina sin encontrar ningún `false`, significa que todos los elementos pasaron el "test"
    // y retornamos `true`
    return true;
  }
  
  // Solicitamos al usuario la cantidad de elementos que quiere ingresar
  let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
  let numbers = []; // Array para almacenar los números ingresados
  
  // Solicitamos cada número al usuario y lo agregamos al array `numbers`
  for (let i = 0; i < numElements; i++) {
    let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
    numbers.push(number);
  }
  
  // Definimos un callback que verifica si un número es positivo
  function isPositive(num) {
    return num > 0; // Devuelve `true` si el número es positivo, `false` si es negativo o cero
  }
  
  // Llamamos a `every` con el array `numbers` y el callback `isPositive`
  // Esto devolverá `true` si todos los números son positivos, y `false` si al menos uno no lo es
  const result = every(numbers, isPositive);
  
  console.log("Array de números:", numbers); // Mostramos el array de números ingresados
  console.log("¿Todos los números son positivos?:", result); // Mostramos el resultado final

  /*EXPLICACION:
  1. Definición de la función every:
  function every(array, callback) {
  Aquí definimos la función every, que recibe dos parámetros: array (el array de entrada) y callback (una función que verificará si cada elemento cumple con una condición).
  2.Bucle for para iterar sobre array:
  for (let i = 0; i < array.length; i++) {
  Un bucle for recorre cada elemento del array de entrada, usando el índice i para acceder a cada elemento.
  3. Obtener el elemento actual:
  let currentElement = array[i];
  Aquí obtenemos el elemento actual del array en la posición i y lo almacenamos en la variable currentElement.
  4.Llamada al callback y verificación del resultado:
  if (!callback(currentElement)) {
   return false;
  }
 Llamamos al callback con el elemento actual (currentElement). Si el callback devuelve false para algún elemento, devolvemos false de inmediato, ya que esto significa que no todos los elementos cumplen la condición.
 5.Devolver true si todos los elementos pasan el "test":
 return true;
 Si el bucle termina sin encontrar ningún false, significa que todos los elementos pasaron la verificación, por lo que devolvemos true.
 6. Ingreso de la cantidad de elementos:
 let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
 Usamos prompt() para solicitar al usuario la cantidad de números que desea ingresar, y parseInt() para convertir la entrada a un número entero.
 7. Ingreso de cada número:
 for (let i = 0; i < numElements; i++) {
  let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  numbers.push(number);
 }
 Creamos un bucle para solicitar cada número, lo convertimos a entero con parseInt() y lo agregamos al array numbers usando push.
 8. Definición del callback isPositive:
function isPositive(num) {
  return num > 0;
}
Definimos una función isPositive que verifica si un número es positivo. Esta función devuelve true si el número es mayor que cero y false si es negativo o igual a cero.
9. Llamada a every y salida en consola:
const result = every(numbers, isPositive);
console.log("Array de números:", numbers);
console.log("¿Todos los números son positivos?:", result);
Llamamos a every con el array numbers y el callback isPositive. Finalmente, mostramos en consola el array de números ingresados y el resultado, que indica si todos los números son positivos o no. */











