// Definimos la función `find` que toma dos parámetros:
// `array` - el array sobre el cual vamos a aplicar la condición
// `callback` - una función que verificará si un elemento cumple con una condición
function find(array, callback) {
    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
      // Obtenemos el elemento actual en la posición `i`
      let currentElement = array[i];
  
      // Llamamos al `callback` pasando el elemento actual como argumento
      // Si el `callback` devuelve `true`, retornamos el elemento actual
      if (callback(currentElement)) {
        return currentElement;
      }
    }
  
    // Si el bucle termina sin encontrar ningún elemento que cumpla la condición, devolvemos `undefined`
    return undefined;
  }
  
  // Solicitamos al usuario la cantidad de elementos que quiere ingresar
  let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
  let numbers = []; // Array para almacenar los números ingresados
  
  // Solicitamos cada número al usuario y lo agregamos al array `numbers`
  for (let i = 0; i < numElements; i++) {
    let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
    numbers.push(number);
  }
  
  // Definimos un callback que verifica si un número es impar
  function isOdd(num) {
    return num % 2 !== 0; // Devuelve `true` si el número es impar, `false` si es par
  }
  
  // Llamamos a `find` con el array `numbers` y el callback `isOdd`
  // Esto devolverá el primer número impar encontrado o `undefined` si no hay ninguno
  const result = find(numbers, isOdd);
  
  console.log("Array de números:", numbers); // Mostramos el array de números ingresados
  console.log("Primer número impar encontrado:", result); // Mostramos el resultado final

  /*EXPLICACION:
 1. Definición de la función find:
function find(array, callback) {
Aquí definimos la función find, que recibe dos parámetros: array (el array de entrada) y callback (una función que verifica si un elemento cumple con una condición específica).
2. Bucle for para iterar sobre array:
for (let i = 0; i < array.length; i++) {
Un bucle for recorre cada elemento del array de entrada, usando el índice i para acceder a cada elemento.
3. Obtener el elemento actual:
let currentElement = array[i];
Aquí obtenemos el elemento actual del array en la posición i y lo almacenamos en la variable currentElement.
4. Llamada al callback y verificación del resultado:
if (callback(currentElement)) {
   return currentElement;
}
Llamamos al callback con el elemento actual (currentElement). Si el callback devuelve true, devolvemos el currentElement inmediatamente, ya que es el primer elemento que cumple la condición.
5. Devolver undefined si ningún elemento cumple la condición:
return undefined;
Si el bucle termina sin que ningún elemento cumpla con la condición, devolvemos undefined.
6. Ingreso de la cantidad de elementos:
let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
Usamos prompt() para solicitar al usuario la cantidad de números que desea ingresar, y parseInt() para convertir la entrada a un número entero.
7. Ingreso de cada número:
for (let i = 0; i < numElements; i++) {
  let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  numbers.push(number);
}
Creamos un bucle para solicitar cada número, lo convertimos a entero con parseInt() y lo agregamos al array numbers usando push.
8. Definición del callback isOdd:
function isOdd(num) {
  return num % 2 !== 0;
}
Definimos una función isOdd que verifica si un número es impar. Esta función devuelve true si el número no es divisible por 2 y false si es par.
9. Llamada a find y salida en consola:
const result = find(numbers, isOdd);
console.log("Array de números:", numbers);
console.log("Primer número impar encontrado:", result);
Llamamos a find con el array numbers y el callback isOdd. Finalmente, mostramos en consola el array de números ingresados y el resultado, que es el primer número impar encontrado o undefined si no hay números impares. */
