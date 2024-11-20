// Definimos la función `takeWhile` que toma dos parámetros:
// `array` - el array que vamos a recorrer
// `callback` - una función que verificará si un elemento cumple con una condición
function takeWhile(array, callback) {
    // Array para almacenar los elementos que cumplen la condición
    let result = [];
  
    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
      // Si el callback devuelve `false` para el elemento actual, salimos del bucle
      if (!callback(array[i])) {
        break;
      }
  
      // Si el callback devuelve `true`, agregamos el elemento actual al array `result`
      result.push(array[i]);
    }
  
    // Devolvemos el array `result` con los elementos hasta que el callback devolvió `false`
    return result;
  }
  
  // Solicitamos al usuario la cantidad de elementos que quiere ingresar
  let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
  let numbers = []; // Array para almacenar los números ingresados
  
  // Solicitamos cada número al usuario y lo agregamos al array `numbers`
  for (let i = 0; i < numElements; i++) {
    let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
    numbers.push(number);
  }
  
  // Definimos un callback que verifica si un número es menor que 10
  function isLessThanTen(num) {
    return num < 10; // Devuelve `true` si el número es menor que 10, `false` si es 10 o mayor
  }
  
  // Llamamos a `takeWhile` con el array `numbers` y el callback `isLessThanTen`
  // Esto devolverá un array de todos los números hasta que encuentre uno que sea 10 o mayor
  const result = takeWhile(numbers, isLessThanTen);
  
  console.log("Array de números:", numbers); // Mostramos el array de números ingresados
  console.log("Resultado después de aplicar takeWhile:", result); // Mostramos el array final resultante

  /*EXPLICACION:
  1. Definición de la función takeWhile:
function takeWhile(array, callback) {
Definimos la función takeWhile, que toma dos parámetros: array (el array de entrada) y callback (una función que verificará si un elemento cumple con una condición específica).
2. Definición del array result:
let result = [];
Creamos un array vacío result para almacenar los elementos que cumplen la condición.
3. Bucle for para iterar sobre array:
for (let i = 0; i < array.length; i++) {
Usamos un bucle for para recorrer cada elemento del array de entrada, usando el índice i para acceder a cada elemento.
4. Condicional para verificar el callback y salir del bucle:
if (!callback(array[i])) {
   break;
}
Llamamos al callback con el elemento actual (array[i]). Si el callback devuelve false, usamos break para salir del bucle, deteniendo el proceso de agregar elementos a result.
5. Agregar elementos que cumplen la condición a result:
result.push(array[i]);
Si el callback devuelve true, agregamos el elemento actual al array result.
6. Devolución de result:
return result;
Devolvemos el array result, que contiene todos los elementos hasta que el callback devolvió false.
7. Ingreso de la cantidad de elementos:
let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
Usamos prompt() para solicitar al usuario la cantidad de números que desea ingresar, y parseInt() para convertir la entrada a un número entero.
8. Ingreso de cada número:
for (let i = 0; i < numElements; i++) {
  let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  numbers.push(number);
}
Creamos un bucle para solicitar cada número, lo convertimos a entero con parseInt() y lo agregamos al array numbers usando push.
9. Definición del callback isLessThanTen:
function isLessThanTen(num) {
  return num < 10;
}
Definimos una función isLessThanTen que verifica si un número es menor que 10. Esta función devuelve true si el número es menor que 10 y false si es mayor o igual a 10.
10. Llamada a takeWhile y salida en consola:
const result = takeWhile(numbers, isLessThanTen);
console.log("Array de números:", numbers);
console.log("Resultado después de aplicar takeWhile:", result);
Llamamos a takeWhile con el array numbers y el callback isLessThanTen. Finalmente, mostramos en consola el array original y el resultado después de aplicar takeWhile.*/
