// Definimos la función `findIndex` que toma dos parámetros:
// `array` - el array sobre el cual aplicaremos la condición
// `callback` - una función que verificará si un elemento cumple con una condición
function findIndex(array, callback) {
    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
      // Obtenemos el elemento actual en la posición `i`
      let currentElement = array[i];
  
      // Llamamos al `callback` pasando el elemento actual como argumento
      // Si el `callback` devuelve `true`, retornamos el índice actual `i`
      if (callback(currentElement)) {
        return i;
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
  
  // Definimos un callback que verifica si un número es negativo
  function isNegative(num) {
    return num < 0; // Devuelve `true` si el número es negativo, `false` si es positivo o cero
  }
  
  // Llamamos a `findIndex` con el array `numbers` y el callback `isNegative`
  // Esto devolverá el índice del primer número negativo encontrado o `undefined` si no hay ninguno
  const result = findIndex(numbers, isNegative);
  
  console.log("Array de números:", numbers); // Mostramos el array de números ingresados
  console.log("Índice del primer número negativo:", result); // Mostramos el resultado final

  /* EXPLICACION:
  1. Definición de la función findIndex:
function findIndex(array, callback) {
Aquí definimos la función findIndex, que recibe dos parámetros: array (el array de entrada) y callback (una función que verifica si un elemento cumple con una condición específica).
2.Bucle for para iterar sobre array:
for (let i = 0; i < array.length; i++) {
Un bucle for recorre cada elemento del array de entrada, usando el índice i para acceder a cada elemento.
3. Obtener el elemento actual:
let currentElement = array[i];
Aquí obtenemos el elemento actual del array en la posición i y lo almacenamos en la variable currentElement.
4. Llamada al callback y verificación del resultado:
if (callback(currentElement)) {
   return i;
}
Llamamos al callback con el elemento actual (currentElement). Si el callback devuelve true, devolvemos el índice i de inmediato, ya que es el primer índice que cumple la condición.
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
8. Definición del callback isNegative:
function isNegative(num) {
  return num < 0;
}
Definimos una función isNegative que verifica si un número es negativo. Esta función devuelve true si el número es menor que cero y false si es positivo o igual a cero.
9.Llamada a findIndex y salida en consola:
const result = findIndex(numbers, isNegative);
console.log("Array de números:", numbers);
console.log("Índice del primer número negativo:", result);
Llamamos a findIndex con el array numbers y el callback isNegative. Finalmente, mostramos en consola el array de números ingresados y el índice del primer número negativo encontrado o undefined si no hay números negativos.*/
